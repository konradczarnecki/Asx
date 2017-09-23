import { Dir } from './config';

export function bindKeys() {

    let player = this.game.player;
    let attackPressed = false;
    
    document.onkeydown = evt => {

        switch(evt.keyCode){
            case 37 : 
                this.button = Dir.LEFT;
                break;
            case 39 : 
                this.button = Dir.RIGHT;
                break;
            case 38:
                this.button = Dir.UP;
                break;
            case 40:
                this.button = Dir.DOWN;
                break;
            case 90:
                this.game.jump(player);
                break;
            case 88:
                if(attackPressed) break;
                this.game.attack(player);
                attackPressed = true;
                break;
        }
    }

    document.onkeyup = evt => {

        switch(evt.keyCode){
            case 37:
                if(this.button == Dir.LEFT) this.button = Dir.NONE;
                break;
            case 39:
                if(this.button == Dir.RIGHT) this.button = Dir.NONE;
                break;
            case 38:
                if(this.button == Dir.UP) this.button = Dir.NONE;
                break;
            case 40:
                if(this.button == Dir.DOWN) this.button = Dir.NONE;
                break;
            case 88:
                attackPressed = false;
        }
    }
}