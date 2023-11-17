# pinball

This game is made using vanilla JavaScript, HTML and CSS.

This game works but the collision detection with the play area is sloppy(we are figuring out). We used pixel detection method to implement the collison with the play area(excludes the paddles). This implementation is not rigorous and can be considered rudimentary as of now.

The controls are left and right arrow keys for the left and right paddles resp. The collision with the paddles works quite well(we used line to circle collision method). If you are not able to observe the paddle collision by sticking to the normal setup, you can change the initial position of the ball(this.posx, this.posy) in the constructor of 'Ball.js' (try setting the position to (150, 150)). We tried to keep the code neat so as to make it readable.

To start te game, just open 'index.html' with your browser. For VS Code, download the Live Server extension and then open 'index.html' with it. 

Rest is self explanatory.

