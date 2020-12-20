import Ball from "./Ball.js";

export default class collisionDetection{
    constructor(ball, gameWidth, gameHeight, leftPaddle, rightPaddle, gameArea){
        this.ball = ball;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.leftPaddle = leftPaddle;
        this.rightPaddle = rightPaddle;
        this.gameArea = gameArea;

    }


    update(){
        //let ang = Math.atan(this.gameArea.circleY - )

        if(this.ball.posx < 0 || (this.ball.posx + this.ball.size) > this.gameWidth){
            this.ball.speedx = -this.ball.speedx/2.0;
        }

        if(this.ball.posy < 0){
            this.ball.speedy = -this.ball.speedy;
            //this.acceny = 0.5;    
        }

        if((this.ball.posy + this.ball.size) > this.gameHeight){
            this.ball.speedy= -this.ball.speedy/2.0;
        }
        //console.log(this.posx);
        console.log(this.ball.posy);
    }
}