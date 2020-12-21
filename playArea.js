export default class playArea {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.circleR;
        this.circleX;
        this.circleY;
        this.launcherX;
        this.launcherY;
        this.blackX;
        this.blackY;
        this.blackHeight;      
        this.blackWidth;
        this.notchHeight;
        this.notchWidth;
    }


    draw(ctx){

        
        //machine  setup
        let greyHeight = this.gameHeight;
        let greyWidth = this.gameWidth;
        let boxX = 0;
        let boxY = 0;
        ctx.fillStyle = '#787b87';
        ctx.fillRect( boxX, boxY, greyWidth, greyHeight);

        this.blackHeight = 150;        
        this.blackWidth = this.gameWidth - 80;
        this.blackX = 30;
        this.blackY = this.gameHeight - this.blackHeight - 120;
        ctx.fillStyle = '#333439';
        ctx.fillRect(this.blackX, this.blackY ,this.blackWidth,this.blackHeight);

        


        //launcher
        let launcherHeight = 600;
        let launcherWidth = 20;
        this.launcherX = this.gameWidth - launcherWidth - 20;
        this.launcherY = 210;
        ctx.fillRect(this.launcherX,this.launcherY,launcherWidth,launcherHeight);

        this.circleR = this.gameWidth/2 - 20;
        this.circleX = this.gameWidth / 2;
        this.circleY = 210;
        ctx.arc(this.circleX,this.circleY,this.circleR,0*Math.PI,2*Math.PI);
        ctx.strokeStyle = '#333439';
        ctx.fillStyle = '#333439';
        ctx.fill();
        



        // upper triangle (under circle)
        ctx.moveTo(this.blackX, this.blackY);
        ctx.lineTo(this.blackX + this.blackWidth, this.blackY);
        ctx.lineTo(this.circleX, this.circleY);
        ctx.strokeStyle = '#333439';
        ctx.fillStyle = '#333439';
        ctx.fill();
        ctx.closePath();

        
        

        // lower triangle under box
        ctx.fillStyle = '#333439';
        ctx.moveTo(this.blackX, this.blackY + this.blackHeight);
        ctx.lineTo(this.blackX + this.blackWidth,  this.blackY + this.blackHeight);
        ctx.lineTo(this.blackX + this.blackWidth/2,  this.blackY + this.blackHeight + 150);
        ctx.fill();
        ctx.closePath();

        // notch
        this.notchHeight =20;
        this.notchWidth = 800;
        ctx.fillStyle='#787b87';
        ctx.fillRect(this.gameWidth/2 - this.notchWidth/2, this.gameHeight - this.notchHeight, this.notchWidth, this.notchHeight);
        
        //fliphands
        let leftfliphand = document.getElementById("fliphandleft");
        let rightfliphand = document.getElementById("fliphandright");
        ctx.drawImage(leftfliphand, this.blackX + 30, this.blackY + 20, 70, 140);
        ctx.drawImage(rightfliphand, this.blackX + this.blackWidth-100 , this.blackY + 20, 70, 140);
        
        //ctx.fill
    }

}
