export default class inputHandler{
    constructor (leftPaddle, rightPaddle) {
        document.addEventListener("keydown", event => {
                   
            switch(event.keyCode){
                case 37:
                    leftPaddle.move();
                    break;
                
                case 39:
                    rightPaddle.move();
                    break;
            }

            });

        document.addEventListener("keyup", event => {
                
            switch(event.keyCode){
                case 37:
                    leftPaddle.moveBack();
                    break;
                
                case 39:
                    rightPaddle.moveBack();
                    break;
            }

            });
    

    }
}