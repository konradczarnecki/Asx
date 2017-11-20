import {Dir, frames, playerViewConfig} from './config';
import { Drawable } from '../../interfaces/drawable.interface';
import { CharacterViewConfig } from '../../interfaces/character-view.config.interface';
import { CharacterConfig } from '../../interfaces/character.config.interface';
import {UserService} from "../../login/user.service";
import {Injectable} from "@angular/core";

@Injectable()
export class Character implements CharacterConfig {

    level: number;
    exp: number;
    strength: number;
    dexteriety: number;
    perception: number;
    intelligence: number;
    speed: number;

    hp: number;
    ap: number;
    acc: number;
    eva: number;

    view: CharacterView;

    constructor(config: CharacterConfig){

        for(let field in config) if(config.hasOwnProperty(field)) this[field] = config[field];
        this.view = new CharacterView(playerViewConfig);
        this.view.sp = this.speed;
    }

    jump(): void {
        this.view.jump();
        this.eva += 20;
        setTimeout(() => this.eva -= 20, 250);
    }

    attack(): void {
        this.view.attack();
    }

    getHit(damage: number): void {
        this.hp -= damage;
        this.view.getHit();
    }
}

@Injectable()
export class Enemy extends Character {

    meta: {                                 // metadata for AI controlling enemy characters
        timer: number                       // time from last direction change
    };
}

export class CharacterView implements CharacterViewConfig, Drawable {

        w: number; h: number;
        x: number; y: number;
        z: number;                          // determines the layer to draw element to

        speedX: number; speedY: number;
        sp: number;                         // speed multiplier

        dir: Dir;                           // current direction
        prevDir: Dir;                       // last direction that wasn't Dir.NONE

        inAir: boolean;
        attacking: boolean;
        alpha: number;

        sprites: HTMLImageElement[];
        spr: number;                        // current sprite index
        animationTimeout: number;
        animationSpeed: number;

        constructor(config: CharacterViewConfig){

            for(let field in config) this[field] = config[field];
            this.loadSprites(config.source);
        }

        // (x1, y1), (x2, y2) defines two corners of collision box rectangle

        get x1(): number {
            return this.x + 8;
        }

        get y1(): number {
            return this.y + this.h - 20;
        }

        get x2(): number {
            return this.x + this.w - 8;
        }

        get y2(): number {
            return this.y + this.h;
        }

        move(delta: number): void {
            this.x += delta * this.speedX * this.sp / 8;
            this.y += delta * this.speedY * this.sp / 8;
        }

        moveBack(delta: number): void {
            this.x -= delta * this.speedX * this.sp / 8;
            this.y -= delta * this.speedY * this.sp / 8;
        }

        changeDirection(direction: Dir): void {

            clearTimeout(this.animationTimeout);

            if(direction == Dir.NONE) this.stop();
            else {
                this.spr = frames.walk[direction];
                this.walk(direction);
             }

             this.dir = direction;
             this.prevDir = direction != Dir.NONE ? direction : this.prevDir;
        }

        walk(direction: Dir): void {

            this.speedX = direction == Dir.LEFT ? -1 : direction == Dir.RIGHT ? 1 : 0;
            this.speedY = direction == Dir.UP ? -1 : direction == Dir.DOWN ? 1 : 0;

            clearTimeout(this.animationTimeout);

            let idx = frames.walk[direction];
            this.spr++;
            if(this.spr == idx + 3) this.spr = idx;
            this.animationTimeout = setTimeout(this.walk.bind(this, direction), 1 / this.animationSpeed);
        }

        stop(): void {
            this.speedX = 0;
            this.speedY = 0;
            this.spr = frames.stand[this.prevDir];
            clearTimeout(this.animationTimeout);
        }

        jump(): void {

            if(this.inAir) return;

            clearTimeout(this.animationTimeout);

            this.inAir = true;
            this.spr = frames.jump[this.prevDir];
            this.speedY = -2;

            let ground = this.y;

            function gravity(speed: number): number {
                return  0.2 - 0.07 * speed;
            }

            let movement = () => {

                if(this.speedY < 2) this.speedY += gravity(this.speedY);

                if(this.y >= ground) {

                    this.speedY = 0;
                    this.y = ground;
                    this.inAir = false;

                    if(this.dir == Dir.NONE) this.spr = frames.stand[this.prevDir];
                    else this.dir = Dir.NONE; // clear direction to trigger walking animation start

                 } else setTimeout(movement, 20);
            };
            setTimeout(movement, 20);
        }

        attack(): void {

            if(this.attacking) return;

            this.attacking = true;
            setTimeout(() => {this.attacking = false}, 1000 / (this.sp * 2));

            clearTimeout(this.animationTimeout);

            let start: number = frames.attack[this.prevDir];
            let end: number = frames.stand[this.prevDir];

            this.spr = start;
            let i = start;

            let nextFrame = () => {

                if(i < start + 3){
                    this.spr = i++;
                    setTimeout(nextFrame, 60);

                } else {
                    this.spr = end;
                    if(this.dir != Dir.NONE) this.walk(this.dir);
                }
            };
            setTimeout(nextFrame, 40);
        }

        getHit(): void {
            this.alpha = 0.3;
            setTimeout(() => this.alpha = 1, 100);
        }

        getSprite(): HTMLImageElement {
            return this.sprites[this.spr];
        }

        loadSprites(spritesDir): void {

            for(let i = 0; i < 18; i++){
                let img = new Image();
                let plusOne = i+1;
                let prefix = plusOne < 10 ? '0' : '';

                img.src = 'asx/assets/' + spritesDir + '/moves_' + prefix + plusOne + '.png';
                this.sprites[i] = img;
            }

            let imageIdx = 1;

            for(let i = 18; i < 30; i++){
                let img = new Image();
                let prefix: string = imageIdx < 10 ? '0' : '';
                img.src = 'asx/assets/images/a_' + prefix + imageIdx + '.png';
                this.sprites[i] = img;
                imageIdx++;
            }
        }
    }

