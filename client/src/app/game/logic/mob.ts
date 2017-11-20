import { Injectable } from '@angular/core';
import { CharacterView, Character, Enemy } from './character';
import { GameService } from './game';
import { CharacterConfig } from '../../interfaces/character.config.interface'
import { LocationConfig } from '../../interfaces/location.config.interface'
import { Location } from './location';
import { Dir } from './config';

export class MobControl {

    constructor(private game: GameService){}

    startSpawning(): void {

        let spawn = (): void => {
            for(let enmTemplate of this.game.location.enemyTemplates)
                if(Math.random() < 1 && this.game.location.enemies.length < 1) this.spawn(enmTemplate);

            setTimeout(spawn, 4000);
        }

        setTimeout(spawn, 0);
    }

    spawn(config: CharacterConfig){

        let toSpawn: Enemy = new Enemy(config);

        do {
            toSpawn.view.x = Math.random() - 0.5 > 0 ? -100 : 1100;
            toSpawn.view.y = Math.random() * 500;
        } while (this.game.location.checkMapCollisions(toSpawn.view))

        toSpawn.view.changeDirection(Dir.RIGHT);
        toSpawn.meta = {
            timer : 0
        };

        this.game.location.enemies.push(toSpawn);
    }

    action(delta: number): void {

        for(let enemy of this.game.location.enemies){

            let dx = this.game.player.view.x - enemy.view.x;
            let dy = this.game.player.view.y - enemy.view.y;

            if(Math.abs(dx) < 20 && Math.abs(dy) < 20) {
                if(enemy.view.speedX > 0 || enemy.view.speedY > 0) enemy.view.stop();
                this.game.attack(enemy);

            } else this.move(enemy, dx, dy, delta);

            if(Location.checkCollision(this.game.player.view, enemy.view)) enemy.view.moveBack(delta);
        }
    }

    move(enemy: Enemy, dx: number, dy: number, delta: number): void { // dx, dy - distance to target position, delta - time between frames

        enemy.meta.timer += delta;

        if(enemy.meta.timer > 500) {
            let dirX = dx > 0 ? Dir.RIGHT : Dir.LEFT;
            let dirY = dy > 0 ? Dir.DOWN : Dir.UP;

            let finalDir: Dir = Math.abs(dx) > Math.abs(dy) ? dirX : dirY;

            enemy.view.changeDirection(finalDir);
            enemy.meta.timer = 0;
        }

        enemy.view.move(delta);

        if(this.game.location.checkMapCollisions(enemy.view, false)){
            enemy.view.moveBack(delta);

            // sets the direction perpendicular to current, facing player position
            let newDir = enemy.view.dir == Dir.RIGHT || enemy.view.dir == Dir.LEFT ?
                 (dy > 0 ? Dir.DOWN : Dir.UP) : (dx > 0 ? Dir.RIGHT : Dir.LEFT);

            enemy.view.changeDirection(newDir);
            enemy.meta.timer = -1000;
        }
    }
}
