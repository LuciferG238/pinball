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
//wait for this

let gameArea = new playArea(gameWidth, gameHeight);
//gameArea.draw(ctx);


let leftPaddle = new left_paddle(gameWidth, gameHeight);
//leftPaddle.draw(ctx);

let rightPaddle = new right_paddle(gameWidth, gameHeight);
//rightPaddle.draw(ctx);

let bumper1 = new Bumper30(gameWidth/2 - 20, 150, 50);
//bumper1.draw(ctx);

let bumper2 = new Bumper20(100, 100, 50);

let spring = new Spring(gameWidth, gameHeight);

let ball = new Ball(gameWidth, gameHeight, leftPaddle, rightPaddle, gameArea);
//ball.draw(ctx);



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

    spring.draw(ctx);

    col.update();

  

    

    requestAnimationFrame(gameLoop);
}

gameLoop();