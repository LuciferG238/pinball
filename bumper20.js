export default class Bumper20{
    constructor(placeX, placeY, size){
        this.position = {
            x : placeX,
            y : placeY,
        };
        this.size = size;
    }
    
    
    draw(ctx) {

        let bumper20Img = document.getElementById("bumper_20_img");
        ctx.drawImage(bumper20Img, this.position.x, this.position.y, this.size, this.size);
      
    }
}