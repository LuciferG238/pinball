export default class playArea {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }


    draw(ctx){

        
        //machine  setup
        let greyHeight = this.gameHeight;
        let greyWidth = this.gameWidth;
        let boxX = 0;
        let boxY = 0;
        ctx.fillStyle = '#787b87';
        ctx.fillRect( boxX, boxY, greyWidth,greyHeight);

        let blackHeight = 150;        
        let blackWidth = this.gameWidth - 80;
        let blackX = 30;
        let blackY = this.gameHeight - blackHeight - 120;
        ctx.fillStyle = '#333439';
        ctx.fillRect(blackX, blackY ,blackWidth,blackHeight);

        


        //launcher
        let launcherHeight = 600;
        let launcherWidth = 20;
        let launcherX = this.gameWidth - launcherWidth - 20;
        let launcherY = 210;
        ctx.fillRect(launcherX,launcherY,launcherWidth,launcherHeight);

        let circleR = this.gameWidth/2 - 20;
        let circleX = this.gameWidth / 2;
        let circleY = 210;
        ctx.arc(circleX,circleY,circleR,0*Math.PI,2*Math.PI);
        ctx.strokeStyle = '#333439';
        ctx.fillStyle = '#333439';
        ctx.fill();

        // upper triangle (under circle)
        ctx.moveTo(blackX, blackY);
        ctx.lineTo(blackX + blackWidth, blackY);
        ctx.lineTo(circleX, circleY);
        ctx.strokeStyle = '#333439';
        ctx.fillStyle = '#333439';
        ctx.fill();
        ctx.closePath();

        // lower triangle under box
        ctx.fillStyle = '#333439';
        ctx.moveTo(blackX, blackY + blackHeight);
        ctx.lineTo(blackX + blackWidth,  blackY + blackHeight);
        ctx.lineTo(blackX + blackWidth/2,  blackY + blackHeight + 150);
        ctx.fill();
        ctx.closePath();

        // notch
        let notchHeight =20;
        let notchWidth = 800;
        ctx.fillStyle='#787b87';
        ctx.fillRect(this.gameWidth/2 - notchWidth/2, this.gameHeight - notchHeight, notchWidth,notchHeight);
        
        //fliphands
        let leftfliphand = document.getElementById("fliphandleft");
        let rightfliphand = document.getElementById("fliphandright");
        ctx.drawImage(leftfliphand, blackX + 30, blackY + 20, 70, 140);
        ctx.drawImage(rightfliphand, blackX + blackWidth-100 , blackY + 20, 70, 140);
        
        //ctx.fill
    }

}
