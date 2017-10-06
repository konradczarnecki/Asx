import {Location, Element} from '../logic/location';
import { Character } from '../logic/character';

import { playerViewConfig } from '../logic/config';
import { CharacterViewConfig } from '../../interfaces/character-view.config.interface';
import { CharacterConfig } from '../../interfaces/character.config.interface';
import { LocationConfig } from '../../interfaces/location.config.interface';

let els: Element[] = [];
els.push(new Element(0, 0, 367, 188));
els.push(new Element(362, 0, 310, 64));
els.push(new Element(670, 0, 330, 180)); // top buildings

let img = new Image();
img.src = 'asx/assets/street/c1.png';
let c1 = new Element(509, 180, 96, 58, img);
c1.setCollisionBox(519, 208, 594, 231);
els.push(c1);

let img2 = new Image();
img2.src = 'asx/assets/street/c2.png';
let c2 = new Element(691, 186, 192, 56, img2);
c2.setCollisionBox(704, 209, 876, 230);
els.push(c2);

let img3 = new Image();
img3.src = 'asx/assets/street/roof.png';
let roof = new Element(636, 338, 364, 162, img3);
roof.setCollisionBox(0, 0, 0, 0);
roof.z = 1;
els.push(roof);

let cloneViewConfig: CharacterViewConfig = JSON.parse(JSON.stringify(playerViewConfig));
let cloneConfig: CharacterConfig  = {
    name : 'clone',
    level: 1,
    hp: 5,
    ap: 3,
    strenght: 5,
    defense: 20,
    acc: 70,
    evasion: 10,
    speed : 0.5,
    view: cloneViewConfig
}

export const street: LocationConfig = {
    background : 'asx/assets/street/back.png',
    elements: els,
    enemiesTemplate : [cloneConfig]
}


