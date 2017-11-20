import { Element } from '../game/logic/location';
import { Character } from '../game/logic/character';
import { CharacterConfig } from './character.config.interface';

export interface LocationConfig {
    id: string;
    elements: Element[];
    enemyTemplates: CharacterConfig[];
}
