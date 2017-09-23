import { Injectable } from '@angular/core';
import { CharacterView } from './character';
import { street } from '../street/street';
import { Drawable } from '../../interfaces/drawable.interface';
import { MobControl } from './mob';
import { Character, Enemy } from './character';

export class Location {

    background: HTMLImageElement;
    elements: Element[];
    enemies: Enemy[];

    constructor(config) {
        this.elements = config.elements;
        this.background = new Image(1000, 500);
        this.background.src = config.background;
        this.enemies = [];
    }

    get enemyViews(): CharacterView[]  {
        return this.enemies.map(enemy => enemy.view);
    }

    checkMapCollisions(toCheck: Drawable, checkEnemies?: boolean): boolean {

        let collides = (el: Drawable) => 
            toCheck.x2 > el.x1 && toCheck.x1 < el.x2 && toCheck.y2 > el.y1 && toCheck.y1 < el.y2;
        
        if(checkEnemies) return this.elements.some(collides) || this.enemyViews.some(collides);
        else return this.elements.some(collides);
    }
    
    static checkCollision(el1: Drawable, el2: Drawable): boolean {
        return el1.x2 > el2.x1 && el1.x1 < el2.x2 && el1.y2 > el2.y1 && el1.y1 < el2.y2;
    }
}

export class Element implements Drawable {

    image: HTMLImageElement;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    z: number;
    alpha: number;
    
    constructor(public x: number, public y: number, public w: number, public h: number, img?: HTMLImageElement){
        this.image = img;
        this.x1 = x;
        this.y1 = y;
        this.x2 = x + w;
        this.y2 = y + h;
        this.z = 0;
        this.alpha = 1;
    }

    setCollisionBox(x1: number, y1: number, x2: number, y2: number): void {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    setImage(src: string): void {
        this.image = new Image(this.w, this.h);
        this.image.src = src;
    }

    getSprite(): HTMLImageElement {
        return this.image;
    }
}