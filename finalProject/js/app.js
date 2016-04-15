// Enemies our player must avoid
const Yshift = 85;
const Xshift = 101;
var enemySpeed = 100
var score = 0;

var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    var defaultX = x;
    var defaultY = y;

    this.x = x;
    this.y = y;
 
    this.sprite = 'images/enemy-bug.png';


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

//set all enemies to move
this.x = this.x + (enemySpeed * dt);

//set back to start once they are off screen
if (this.x >= 495) {
    this.x = -50;
};

    checkCollisions(this.x, this.y)

};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};






// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
     this.defaultX = x;
     this.defaultY = y;
};

//handle the player moving off screen
Player.prototype.update = function(dt) {
    if(this.y <= 0) {
       endReached();
    }
    else if(this.y > 411) {
        this.y = this.defaultY;
    }
    else if (this.x <= 0){
        this.x = 0;
    }
    else if (this.x >= 400) {
        this.x = 400;
    }

    //array of all points that can collide with an enemy
    // var corners = [];

    // corner1 = this.x;
    // corner2 = this.y;
    // corner3 = this.x + Xshift;
    // corner4 = this.y + Yshift;


    // corners.push(corner1, corner2, corner3, corner4);
     
    

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (allowedKey) {

    if(allowedKey == "left"){
        this.x = this.x - Xshift;
    }
    else if(allowedKey == "right"){
        this.x = this.x + Xshift;
    }
    else if(allowedKey == "up"){
        this.y -= Yshift;
    }else if(allowedKey == "down"){
        this.y += Yshift;
    }

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];


/*This is an loop solution I tried but couldnt get to work. 
*/
//create enemies from a 0 index and add them to the allEnemies array.
// for(var i = 0; i < 3; i++) {
//     var newY = (i* 100) + 60
//     eval("var enemy" + i + "=new Enemy(0, newY);");
// };


/* This is not a perfect solution I would rather use something
dynamic like the lines of code commented out above but I can't seem to 
figure out how to push dynamically generated named? 
*/
var enemy0 = new Enemy(0, 60);
var enemy1 = new Enemy(350, 145);
var enemy2 = new Enemy(100, 230);
var enemy3 = new Enemy(275, 60);

allEnemies.push(enemy0, enemy1, enemy2, enemy3);

//console.log(allEnemies);


var player = new Player(202,311);
// var player = new Player(202,411);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



var endReached = function () {
    player.x = player.defaultX;
    player.y = player.defaultY;
    enemySpeed += 20;
    score++;

    /*This is is super inefficent, but functional for now. 
    I need to figure out how to make them reset in a loop somehow
    but I still can't figure out how to access functions for each
    element in the array by iterating over the array. 
    */
    enemy0.x = 0;
    enemy0.y = 60;
    enemy1.x = 350;
    enemy1.y = 145;
    enemy2.x = 100;
    enemy2.y = 230;
    enemy3.x = 250;
    enemy3.y = 50;
    
};

var checkCollisions = function (x, y) {

//for some reason x is being assed in as a float, flooring that.    
x = Math.floor(x);

//used to measure the length of the box that should be around the sprites.
var xlength = 72;
var ylength = 70;

//check boxes from all sides. 
if (x < player.x + xlength     && 
    x + Xshift  > player.x    &&
    y < player.y + ylength     && 
    y + ylength > player.y  ) {

    /* If there is a collision, reset the units, score,
     and enemy speed
    */
    endReached();
    enemySpeed = 100;
    score = 0;
}

};


$(document).click(function(loc) {
  // your code goes here
  console.log(loc.pageX, loc.pageY);
});
