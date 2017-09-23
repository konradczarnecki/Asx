import { Injectable } from '@angular/core';
import { CharacterView, Character, Enemy } from './character';
import { Dir, CHAR_CONFIG, playerViewConfig, playerDefConfig } from './config';
import { CharacterViewConfig } from '../../interfaces/character-view.config.interface';
import { CharacterConfig } from '../../interfaces/character.config.interface'
import { Location, Element } from './location';
import { MobControl } from './mob';
import { street } from '../street/street';
import { ConfigService } from '../../config.service';
import { Drawable } from '../../interfaces/drawable.interface';

@Injectable()
export class GameService {

    player: Character;
    location: Location;
    mob: MobControl

    constructor(configService: ConfigService){
        this.location = new Location(configService.location);
        this.player = new Character(configService.character);
        this.mob = new MobControl(configService, this);
        this.mob.startSpawning();
    }

    setPlayerDir(direction: Dir): void {

        if(direction != this.player.view.dir)
            this.player.view.changeDirection(direction);
    }

    advance(delta: number): void {
        
        this.player.view.move(delta);
        this.mob.action(delta);

        if(this.location.checkMapCollisions(this.player.view, true))
            this.player.view.moveBack(delta);
    }

    toDraw(): Drawable[] {
        return [...this.location.elements, ...this.location.enemyViews, this.player.view];
    }

    attack(attacker: Character){

        if(attacker.view.attacking) return;
        attacker.attack();

        let hitArea: Element;
        let range: number = 20;

        switch(attacker.view.prevDir){
            case Dir.RIGHT:
                hitArea = new Element(attacker.view.x1 + attacker.view.w, attacker.view.y1, range, attacker.view.h);
                break;
            case Dir.LEFT:
                hitArea = new Element(attacker.view.x1 - range, attacker.view.y1, range, attacker.view.h);
                break;
            case Dir.UP:
                hitArea = new Element(attacker.view.x1, attacker.view.y1 - range, attacker.view.w, range);
                break;
            case Dir.DOWN:
                hitArea = new Element(attacker.view.x1, attacker.view.y2, attacker.view.w, range);
                break;
        }
        
        let inRange: Character[] = [];
        if(!(attacker instanceof Enemy)) inRange = this.location.enemies.filter(enemy => Location.checkCollision(enemy.view, hitArea));
        else if(Location.checkCollision(this.player.view, hitArea)) inRange.push(this.player);
        
        for(let enemy of inRange){

            let hit: boolean = Math.random() * 100 < attacker.acc;
            let evaded: boolean = Math.random() * 100 < enemy.evasion;
            let damage: number = attacker.strenght - enemy.defense;
            
            if(damage < 1) damage = 1;
            if(hit && !evaded) enemy.getHit(damage);

            if(enemy.hp <= 0) {
                if(enemy instanceof Enemy) this.location.enemies.splice(this.location.enemies.indexOf(enemy), 1);
                else this.player = null;
            } 
        }
    }

    jump(jumper: Character){
        jumper.jump();
    }
}