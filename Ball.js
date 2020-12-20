//import collisionDetection from "./collisionDetection.js";

export default class Ball{
    constructor(gameWidth, gameHeight, leftPaddle, rightPaddle, gameArea){
        this.image = document.getElementById("ballimg");
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.leftPaddle = leftPaddle;
        this.rightPaddle = rightPaddle;
        this.gameArea = gameArea;
        this.posx = this.gameWidth - 40;
        this.posy = this.gameHeight - 50;
        this.speedy = 200; //280 real value
        this.speedx = 0;
        this.acceny = -0.1;
        this.size = 18;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.posx, this.posy, this.size, this.size);
    }

    update(deltaTime) {

        if(!deltaTime) return;
        
        this.posy -= this.speedy/deltaTime; // + this.acceny;
        //this.acceny -= 4/deltaTime;
        this.speedy += this.acceny*deltaTime;

        this.posx -= this.speedx/deltaTime;

        //this.posy += this.speedy*deltaTime + this.acceny*(deltaTime)*(deltaTime);

        
        
       

    }
}