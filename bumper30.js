export default class Bumper30{
    constructor(placeX, placeY, size){
        this.position = {
            x : placeX,
            y : placeY,
        };
        this.size = size;
    }
    
    
    draw(ctx) {

        let bumper30Img = document.getElementById("bumper_30_img");
        ctx.drawImage(bumper30Img, this.position.x, this.position.y, this.size, this.size);
      
    }
}