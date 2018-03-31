var SPACE_KEY = 32;
var LEFT_KEY = 37;
var TOP_KEY = 38;
var RIGHT_KEY = 39;
var BOTTOM_KEY = 40;
var W_KEY = 87;
var S_KEY = 83;
var A_KEY = 65;
var D_KEY = 68;
var Z_KEY = 90;

function Player(boardName, ctx) {
  this._board = boardName;
  this._ctx = ctx;

  this._life = 50; //Increases with amount of food eaten
  this._strength = 0; //More usefull against other players and protects from other player's attacks

  this._cellWidth = 50; //Changes with amount of Iron Snacks eaten
  this._cellHeight = 50; //Changes with amount of Iron Snacks eaten

  this._position_X = 0; //Random on final game
  this._position_Y = 0; //Random on final game

  this._skill = new Skills(this); //Stores one or more skills gained by eating Iron Snacks

  this.setListener();
}

Player.prototype.score = function() {};

Player.prototype.receiveDamage = function() {};

Player.prototype.setActiveSkill = function() {
  var skillIndex = Math.floor(this._score / 50);
  this._skill._skillSet[skillIndex].activeSkill = true;
};

Player.prototype.strength = function() {};

Player.prototype.setListener = function() {
  document.onkeydown = function(pressedKey) {
    switch (pressedKey.keyCode) {
      case LEFT_KEY:
        this.moveLeft(1);
        break;
      case TOP_KEY:
        this.moveUp(1);
        break;
      case RIGHT_KEY:
        this.moveRight(1);
        break;
      case BOTTOM_KEY:
        this.moveDown(1);
        break;
      case A_KEY:
        this.moveLeft(2);
        break;
      case W_KEY:
        this.moveUp(2);
        break;
      case D_KEY:
        this.moveRight(2);
        break;
      case S_KEY:
        this.moveDown(2);
        break;
    }
  }.bind(this);
};

Player.prototype.moveLeft = function(index) {
  console.log("Moving left player " + index);
};

Player.prototype.moveUp = function(index) {
  console.log("Moving up player " + index);
};

Player.prototype.moveRight = function(index) {
  console.log("Moving right player " + index);
};

Player.prototype.moveDown = function(index) {
  console.log("Moving down player " + index);
};
