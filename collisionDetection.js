import Ball from "./Ball.js";

export default class collisionDetection{
    constructor(ball, gameWidth, gameHeight, leftPaddle, rightPaddle, gameArea){
        this.ball = ball;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.leftPaddle = leftPaddle;
        this.rightPaddle = rightPaddle;
        this.gameArea = gameArea;
        this.isDetected = false;
        this.oncePadL = 0;
        this.oncePadR = 0;
        

    }
/*
    pixelColor(ballX,ballY){
        loadPixels();

        let temp;
        let index = (ballX + ballY*gameWidth)*4;
        //color of pixel at ballX,ballY is stored in temp;
        temp = pixels[index];
        return temp;
    }*/


    update(ctx, data){


        
        //with the outer boundary //just a check since other parts are sloppy

        if(this.ball.posx < 0){
            this.ball.posx =0;
            this.ball.speedx = - (4/6)*this.ball.speedx;

        } 

        if((this.ball.posx + this.ball.size) > this.gameWidth){
            this.ball.posx = this.gameWidth - this.ball.size ;
            this.ball.speedx = - (4/6)*this.ball.speedx;
        }
        
        if(this.ball.posy < 0){
            this.ball.posy = 0;
            this.ball.speedy = - this.ball.speedy;
            
        }
        
        if((this.ball.posy + this.ball.size) > this.gameHeight){
            this.ball.posy = this.gameHeight - this.ball.size ;
            this.ball.speedy = -0.75*this.ball.speedy;
        }
        
        



        //few variables
        let ballR = this.ball.size/2;
        let ballX = this.ball.posx + ballR;
        let ballY = this.ball.posy + ballR;
        let domeR = this.gameArea.circleR;
        let domeX = this.gameArea.circleX;
        let domeY = this.gameArea.circleY;






        //collision with play area

        let indexR = Math.floor((ballX + ballY*this.gameWidth)*4);
     
        //R value of color of pixel at ballX,ballY is stored in tempR
        let tempR = data[indexR];
        let tempG = data[indexR+1];
        let tempB = data[indexR+2];
        let tempA = data[indexR+3];

        //ctx.putImageData(imgData, 0, 0);
       
        console.log(data[indexR]);
        
           

        
        if(tempR == 120){ //&& tempG == 123 && tempB == 135 && tempA == 1) {   //RGBA values of #787b87
            console.log('collision-detected');

            //after pixel detection

            //with dome //this.gameArea.circleR/2 is approx value

            if (this.ball.posy <= this.gameArea.circleY + this.gameArea.circleR/2){
                console.log('DomeDetected');
                let alpha = Math.atan((ballY - domeY)/(ballX - domeX));
                let beta = Math.atan(this.ball.speedy/this.ball.speedx);
                let velI = Math.sqrt((this.ball.speedx*this.ball.speedx) + (this.ball.speedy*this.ball.speedy));
                let vel_norm = velI*Math.cos(beta-alpha);
                let vel_along = velI*Math.sin(beta-alpha);
                let vel_norm_vec = {
                    x: vel_norm*Math.cos(alpha),
                    y: vel_norm*Math.sin(alpha)
                };
                let vel_along_vec = {
                    x: vel_along*Math.sin(alpha),
                    y: vel_along*Math.cos(alpha)
                };
                let velF_vec = {
                    x: vel_along_vec.x - vel_norm_vec.x, 
                    y: vel_along_vec.y - vel_norm_vec.y
                };                   

                
                this.ball.speedx = velF_vec.x;
                
                this.ball.speedy = velF_vec.y;
                    
                
                //this.isDetected = false;
                //this.once = 1;           

            } 

            //with upper triangle
            else if(this.ball.posy <= this.gameArea.blackY){
                if(this.ball.speedx >= 0){
                    this.ball.speedx = 0;
                }
                else{
                    this.ball.speedx = 1.5*this.ball.speedx;
                }
                this.ball.speedy = -this.ball.speedy;              
                
            }

            //with rectangle

            else if(this.ball.posy <= this.gameArea.blackY + this.gameArea.blackHeight){
                this.ball.speedx = -this.ball.speedx;
            }

            //with bottom triangle plus condn for relaunch

            else if(this.ball.posy > this.gameArea.blackY + this.gameArea.blackHeight){
                if((this.ball.posy >= this.gameHeight - this.gameArea.notchHeight) && (this.ball.posx >= this.gameWidth/2 - this.gameArea.notchWidth/2) && (this.ball.posx <= this.gameWidth/2 + this.gameArea.notchWidth/2)){
                    console.log("relaunch!");
                    this.ball.posx = this.gameWidth - 40;
                    this.ball.posy = this.gameHeight - 50;
                    this.ball.speedy = 200.00; 
                    this.ball.speedx = 30.00;
                }
                
                
            }


            //-----------------------------------------------------------------------------

        }

   
        //checking the collision for paddles
        
        /*ctx.beginPath();
        ctx.moveTo(this.leftPaddle.in_position.x, this.leftPaddle.in_position.y);
        ctx.lineTo(this.leftPaddle.posx, this.leftPaddle.posy); 
        ctx.closePath();
        let radius = ball.size;
        let cirX = ball.posx;
        let cirY = ball.posy;*/

            //slope of line through left paddle
        let slopeL = (this.leftPaddle.posy - this.leftPaddle.in_position.y) / (this.leftPaddle.posx - this.leftPaddle.in_position.x);

        //for left paddle       

        //intercept of line
        let interceptL = this.leftPaddle.posy - slopeL * this.leftPaddle.posx;

        //calculating prependicular distance between line and circle
        let numerL = Math.abs(ballY - (slopeL * ballX) - interceptL);
        let denoL = Math.sqrt(1 + (slopeL*slopeL));
        let pDistanceL = numerL / denoL;
        //console.log(pDistanceL);

    

        //for left paddle
        if ( ballX >= this.leftPaddle.in_position.x && ballX <= this.leftPaddle.posx + 3){      
               
            if (pDistanceL <= (ballR+10) && this.oncePadL==0) {
                
                this.ball.speedy = -this.ball.speedy;
                if(this.leftPaddle.posy <= this.leftPaddle.in_position.y){
                    this.ball.speedx = 0;
                }
                else{
                    this.ball.speedx += -20;
                }
                
                this.oncePadL = 1;
                //console.log("yepppLLLL");
            }
            else{
                this.oncePadL = 0;
            }  
        }     
     
        
        // for right paddle(similar as for left paddle)

        ctx.beginPath();
        ctx.moveTo(this.rightPaddle.in_position.x, this.rightPaddle.in_position.y);
        ctx.lineTo(this.rightPaddle.posx, this.rightPaddle.posy); 
        ctx.closePath();

        let slopeR = (this.rightPaddle.posy - this.rightPaddle.in_position.y) / (this.rightPaddle.posx - this.rightPaddle.in_position.x);
        
        //intercept of line
        let interceptR = this.rightPaddle.posy - (slopeR*this.rightPaddle.posx);

        //calculating prependicular distance between line and circle
        let numerR = Math.abs(ballY - (slopeR*ballX) - interceptR);
        let denoR = Math.sqrt(1 + slopeR*slopeR);
        let pDistanceR = numerR / denoR;
        //console.log(pDistanceR);

        //checking the collision
        if ( ballX <= this.rightPaddle.in_position.x && ballX >= (this.rightPaddle.posx - 3)){
            if (pDistanceR <= (ballR+10) && this.oncePadR==0) {
                this.ball.speedy = -this.ball.speedy;
                if(this.rightPaddle.posy <= this.rightPaddle.in_position.y){
                    this.ball.speedx = 0;
                }
                else{
                    this.ball.speedx += 20;
                }
                
                
                this.oncePadR = 1;
                //console.log("yepppRRRR");
            }
            else{
                this.oncePadR = 0;
            }  
        }
        
    }



    
}