export default class Spring{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight =  gameHeight;
        this.width = 20;
        this.height = 100;
        
        this.position = {
            x : this.gameWidth - this.width - 20, 
            y : this.gameHeight - (this.height*5/6)
        };
    }


    draw(ctx) {

        let springImg = document.getElementById("spring_img");
        ctx.drawImage(springImg,this.position.x,this.position.y, this.width, this.height);
    }

    update(){
        //todo
    }
}