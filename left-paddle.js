export default class left_paddle {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.in_position = {
            x: (30) + 95, 
            y: (this.gameHeight - 270) + 150                  
        };
        
        this.len = 65;
        this.thta = -Math.PI/6;
        //this.posx = (gameWidth-50)/2 - 25;
        //this.posy = gameHeight-150;
        this.posx = this.in_position.x + this.len*Math.cos(this.thta);
        this.posy = this.in_position.y - this.len*Math.sin(this.thta);
        this.speed = 0;


        
    }

    move(){
        this.speed = 200;
    }

    moveBack(){
        this.speed = -250;
    }


    draw(ctx) {
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

    update(deltaTime) {
       
        if(!deltaTime) return;
        else{            
            this.posy -= this.speed/deltaTime;
            this.posx = this.in_position.x + Math.sqrt(this.len*this.len - ((this.posy - this.in_position.y)*(this.posy - this.in_position.y)));
        }   

        if(this.posy < this.in_position.y - this.len*Math.sin(Math.PI/3)) {
            this.posy = this.in_position.y - this.len*Math.sin(Math.PI/3);
            this.posx = this.in_position.x + Math.sqrt(this.len*this.len - ((this.posy - this.in_position.y)*(this.posy - this.in_position.y)));            
            return;
        }        

        if(this.posy > this.in_position.y - this.len*Math.sin(-Math.PI/6)) {
            this.posy = this.in_position.y - this.len*Math.sin(-Math.PI/6);
            this.posx = this.in_position.x + Math.sqrt(this.len*this.len - ((this.posy - this.in_position.y)*(this.posy - this.in_position.y)));           
            return;
        }        
    }
}