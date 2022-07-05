import * as PIXI from "pixi.js";


export default class Circle extends PIXI.Graphics {
    
    constructor(color, radius, v) {
        super();
        this.radius = radius;
        this.v = v;

        
        this.beginFill(color);
        this.drawCircle(0, 0, radius);
        this.endFill();
        this.x = radius;
        this.y = radius;

    }
}