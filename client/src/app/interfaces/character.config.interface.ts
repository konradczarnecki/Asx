import { CharacterView } from '../game/logic/character';
import { CharacterViewConfig } from './character-view.config.interface';

export interface CharacterConfig {
    name: string;
    level: number;
    hp: number;
    ap: number;
    strenght: number;
    defense: number;
    acc: number;
    evasion: number;
    speed: number;
    view: CharacterViewConfig;
}