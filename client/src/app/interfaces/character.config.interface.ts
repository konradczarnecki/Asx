import { CharacterView } from '../game/logic/character';
import { CharacterViewConfig } from './character-view.config.interface';

export interface CharacterConfig {
    level: number;
    exp: number;
    strength: number;
    dexteriety: number;
    perception: number;
    intelligence: number;
    speed: number;
}
