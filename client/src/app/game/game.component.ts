import { Component, OnInit } from '@angular/core';

import { CharacterView, Character } from './logic/character';
import { Dir, CHAR_CONFIG, playerViewConfig } from './logic/config';
import { Drawable } from '../interfaces/drawable.interface';
import { bindKeys } from './logic/keybindings';
import { MobControl } from './logic/mob';
import { GameService } from './logic/game';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: []
})
export class GameComponent implements OnInit {

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  button: Dir; // pressed directional button
  lastFrame: number;

  constructor(private game: GameService){}

  ngOnInit() {

    this.canvas = <HTMLCanvasElement> document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.button = Dir.NONE;
    bindKeys.bind(this)();

    this.lastFrame = 0;
    this.render(this.lastFrame);
  }

  render(clock: number) {

    let delta: number = clock - this.lastFrame;
    this.lastFrame = clock;

    this.game.setPlayerDir(this.button);
    this.game.advance(delta);

    let ctx = this.context;

    ctx.clearRect(0, 0, 1000, 500);
    let background = new Image(1000, 500);
    background.src = `/asx/assets/${this.game.location.id}/background.png`;
    ctx.drawImage(background, 0, 0, 1000, 500);

    let layers: Drawable[][] = [ [], [], [], [], [] ]; // create five layers
    this.game.toDraw().forEach(element => layers[element.z + 2].push(element));

    for(let layer of layers){
        layer = layer.filter(el => el.getSprite()); // filter out background elements which dont have sprites of their own
        layer.sort((el1, el2) => el1.y - el2.y); // elements in a layer should be drawn top to bottom

        for(let el of layer){
            ctx.globalAlpha = el.alpha;
            ctx.drawImage(el.getSprite(), el.x, el.y, el.w, el.h)
        }
    }

    ctx.globalAlpha = 1;

    requestAnimationFrame(this.render.bind(this));
}

}
