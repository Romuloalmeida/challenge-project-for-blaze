import Circle from "./circle";
import {gameCommands} from "../index"

export default class Player extends Circle {



    update(state) {
        if (state.player.alive){
            this.width = Math.max(this.width - 15,40);
            this.height = Math.max(this.height - 15,40);
            this.x = state.player.position.x;
            this.y = state.player.position.y;
        }else{
            this.width += 25;
            this.height += 25;
        }

        this.checkMonterCaught(state);
    }

    checkMonterCaught(state){
        
        if (state.player.active && state.player.alive && state.monster.caught){
            state.player.alive = false;
            state.player.active = false;
            setTimeout(() => {
                gameCommands.reset();
            }, 2000);
        }
    }

    
}

