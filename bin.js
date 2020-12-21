// file to store some deleted code which 'might' be useful
//ignore this file
  
  
  
//after pixel detection-------------------------------------------------------------------

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
elif(this.ball.posy <= this.gameArea.blackY){
    if(this.ball.speedx >= 0){
        this.ball.speedx = 0;
    }
    else{
        this.ball.speedx = 1.5*this.ball.speedx;
    }
    this.ball.speedy = -this.ball.speedy;
    
    
}
elif(this.ball.posy <= this.gameArea.blackY + this.gameArea.blackHeight){
    this.ball.speedx = -this.ball.speedx;

}
elif(this.ball.posy > this.gameArea.blackY + this.gameArea.blackHeight){
    if((this.ball.posy == this.gameHeight - this.gameArea.notchHeight) && (this.ball.posx >= this.gameWidth/2 - this.gameArea.notchWidth/2) && (this.ball.posx <= this.gameWidth/2 + this.gameArea.notchWidth/2)){
        this.ball.posx = this.gameWidth - 40;
        this.ball.posy = this.gameHeight - 50;
        this.ball.speedy = 200.00; 
        this.ball.speedx = 30.00;
    }
    
    
}


//-----------------------------------------------------------------------------


  
  
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







 /*
        //between ball & dome
        let domeBall_dx = ballX - domeX;
        let domeBall_dy = ballY - domeY;
        let domeBall_dist = Math.sqrt(domeBall_dx*domeBall_dx + domeBall_dy*domeBall_dy);


        
        if(domeBall_dist < (domeR - ballR ) && domeBall_dist > (domeR - ballR - 1)){            
            this.isDetected= true;
        }
        console.log(this.isDetected);
        if(this.isDetected){
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
            //console.log(this.ball.speedx);
            this.ball.speedy = velF_vec.y;
            //console.log(this.ball.speedy);         
            
            this.isDetected = false;
            this.once = 1;           
            
            
        }
        //else{
        //    this.once = 0;
        //}
        */






