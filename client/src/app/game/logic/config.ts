import { InjectionToken } from '@angular/core';
import { CharacterViewConfig } from '../../interfaces/character-view.config.interface';
import { CharacterConfig } from '../../interfaces/character.config.interface'

export enum Dir {
    LEFT, RIGHT, UP, DOWN, NONE
}

export let CHAR_CONFIG = new InjectionToken<CharacterConfig>('character.configuration');

export const playerViewConfig: CharacterViewConfig = {

    x : 300,
    y: 300,
    z: 0,
    w: 33,
    h: 48,
    speedX: 0,
    speedY: 0,
    dir: Dir.NONE,
    inAir: false,
    attacking: false,
    sprites: [],
    spr: 4,
    animationTimeout: 0,
    animationSpeed: 1/130,
    source: 'images',
    alpha : 1
};

export const frames = {

    attack : [27, 21, 18, 24],
    stand : [12, 4, 0, 8],
    walk : [13, 5, 1, 9],
    jump : [17, 16, 1, 8]
};
