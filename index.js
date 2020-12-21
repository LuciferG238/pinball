import left_paddle from './left-paddle.js';
import right_paddle from './right-paddle.js';
import Bumper20 from './bumper20.js';
import Bumper30 from './bumper30.js';
import inputHandler from './inputHandler.js';
import Ball from "./Ball.js";
import playArea from "./playArea.js";
import Spring from "./launcher.js";
import collisionDetection from "./collisionDetection.js";


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

//const gameWidth = 800;
//const gameHeight = 600;
const gameWidth = 450;
const gameHeight = 650;

ctx.fillStyle='#000';

let gameArea = new playArea(gameWidth, gameHeight);

let leftPaddle = new left_paddle(gameWidth, gameHeight);
let rightPaddle = new right_paddle(gameWidth, gameHeight);

let bumper1 = new Bumper20(gameWidth/2 - 20, 200, 50);
let bumper2 = new Bumper30(100, 130, 50);
let bumper3 = new Bumper20(gameWidth - 150, 130, 50);

let spring = new Spring(gameWidth, gameHeight);

let ball = new Ball(gameWidth, gameHeight, leftPaddle, rightPaddle, gameArea);


new inputHandler(leftPaddle, rightPaddle);

let col = new collisionDetection(ball, gameWidth, gameHeight, leftPaddle, rightPaddle, gameArea);


let lastTime=0;


function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, gameWidth, gameHeight);

    gameArea.draw(ctx);

    rightPaddle.update(deltaTime);
    rightPaddle.draw(ctx);

    leftPaddle.update(deltaTime);
    leftPaddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx); 

    bumper1.draw(ctx);
    bumper2.draw(ctx);
    bumper3.draw(ctx);

    spring.draw(ctx);

    let imgData = ctx.getImageData(0, 0, gameWidth, gameHeight);
    let data = imgData.data;
   
    col.update(ctx, data);
   

  

    

    requestAnimationFrame(gameLoop);
}

gameLoop();