// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

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
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function () {

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

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
var enemy1 = new Enemy(0, 150);
var enemy2 = new Enemy(0, 230);

allEnemies.push(enemy0, enemy1, enemy2);

//console.log(allEnemies);


var player = new Player(200,418);




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

$(document).click(function(loc) {
  // your code goes here
  console.log(loc.pageX, loc.pageY);
});
