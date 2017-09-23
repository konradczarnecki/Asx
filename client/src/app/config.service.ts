import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CharacterView, Character, Enemy } from './game/logic/character';
import { Dir, playerViewConfig, playerDefConfig } from './game/logic/config';
import { CharacterViewConfig } from './interfaces/character-view.config.interface';
import { street } from './game/street/street';
import { CharacterConfig } from './interfaces/character.config.interface'
import { LocationConfig } from './interfaces/location.config.interface'


export class ConfigService {

    location: LocationConfig;
    character: CharacterConfig;
    
    constructor(){
        this.character = playerDefConfig;
        this.location = street;
    }
}
