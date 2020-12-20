export default class right_paddle {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.in_position = {
            x: (30)+(this.gameWidth - 80)-95,
            y: (this.gameHeight - 270)+150
        };
        this.len = 65;
        this.thta = 7*Math.PI/6;
        this.posx = this.in_position.x + this.len*Math.cos(this.thta);
        this.posy = this.in_position.y - this.len*Math.sin(this.thta);
        this.speed = 0;
        //this.return=false;

        //this.posx = (gameWidth-50)/2 + 25;
        //this.posy = gameHeight-150;
       
    }

    move(){
        this.speed = 200;
    }

    moveBack(){
        this.speed = -250;
        //this.return = true;
    }


    draw(ctx) {
        //ctx.clrRect(0,0,gameWidth, gameHeight);
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(this.in_position.x, this.in_position.y);
        ctx.lineTo(this.posx, this.posy);     
        ctx.lineWidth = 20;
        ctx.strokeStyle = '#FF3B3B';
        ctx.stroke();
        ctx.closePath();
        //ctx.fillStyle='#000';
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime){
        if(!deltaTime) return;
        else{
            this.posy -= this.speed/deltaTime;
            this.posx = this.in_position.x - Math.sqrt(this.len*this.len - ((this.posy - this.in_position.y)*(this.posy - this.in_position.y)));
        }   

        if(this.posy < this.in_position.y - this.len*Math.sin(2*Math.PI/3)) {
            this.posy = this.in_position.y - this.len*Math.sin(2*Math.PI/3);
            this.posx = this.in_position.x - Math.sqrt(this.len*this.len - ((this.posy - this.in_position.y)*(this.posy - this.in_position.y)));            
            return;
        }        

        if(this.posy > this.in_position.y - this.len*Math.sin(7*Math.PI/6)) {
            this.posy = this.in_position.y - this.len*Math.sin(7*Math.PI/6);
            this.posx = this.in_position.x - Math.sqrt(this.len*this.len - ((this.posy - this.in_position.y)*(this.posy - this.in_position.y)));           
            return;
        }        
    }
}