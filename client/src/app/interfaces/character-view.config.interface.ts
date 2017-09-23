import { Dir } from '../game/logic/config';

export interface CharacterViewConfig {
    w: number;
    h: number;
    x: number;
    y: number;
    z: number;
    speedX: number;
    speedY: number;
    dir: Dir; // direction
    inAir: boolean;
    attacking: boolean;
    sprites: HTMLImageElement[];
    spr: number; // current sprite
    animationTimeout: number;
    animationSpeed: number;
    source?: string;
    alpha?: number;
};