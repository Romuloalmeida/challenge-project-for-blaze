import Circle from "./circle";

export default class Monster extends Circle {
    
    
    
    update(state) {
        this.x += this.v.x;
        this.y += this.v.y;

        var w = 800;
        var h = 600

        if (this.x >= w -this.radius || this.x <= this.radius)
            this.v.x *= -1;

        if (this.y >= h -this.radius || this.y <= this.radius)
            this.v.y *= -1;

        if (state.player.active && this.collide(state.player.position.x, state.player.position.y, 10)){
            state.monster.caught = true;
        }
        
    }


    collide(x,y,radius) {
        let dx = x - this.x;
        let dy = y - this.y;
        let dist = Math.sqrt(dx*dx + dy*dy);

        return dist < (this.radius + radius);
    }
}

