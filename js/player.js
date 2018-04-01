var SPACE_KEY = 32;
var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var keys = [];
/* var W_KEY = 87;
var S_KEY = 83;
var A_KEY = 65;
var D_KEY = 68;
var Z_KEY = 90; */

function Player(game) {
  this._game = game;

  this._life = 30; //Increases with amount of food eaten
  this._strength = this._life * 2; //More usefull against other players and protects from other player's attacks

  this._diagonal = Math.floor(this._life / 2);
  this._side = Math.sqrt(
    Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2)
  );

  this._position_X = this._side;
  this._position_Y = this._diagonal;

  this._velocity_X = 5;
  this._velocity_Y = 5;

  this._skill = new Skills(this); //Stores one or more skills gained by eating Iron Snacks

  this.setListener();
}

Player.prototype.score = function() {};

Player.prototype.setActiveSkill = function() {
  var skillIndex = Math.floor(this._score / 50);
  this._skill._skillSet[skillIndex].activeSkill = true;
};

Player.prototype.setListener = function() {
  document.onkeydown = function(pressedKey) {
    keys[pressedKey.keyCode] = true;
    if (keys[LEFT_KEY]) {
      this.moveLeft();
    } else if (keys[RIGHT_KEY]) {
      this.moveRight();
    }
    if (keys[UP_KEY]) {
      this.moveUp();
    } else if (keys[DOWN_KEY]) {
      this.moveDown();
    }
  }.bind(this);
  document.onkeyup = function keysReleased(releasedKey) {
    keys[releasedKey.keyCode] = false;
  };
};

Player.prototype.moveLeft = function() {
  if (this._position_X - this._side <= 0) {
    return;
  } else {
    this._position_X -= this._velocity_X;
  }
};

Player.prototype.moveUp = function() {
  if (this._position_Y - this._diagonal <= 0) {
    return;
  } else {
    this._position_Y -= this._velocity_Y;
  }
};

Player.prototype.moveRight = function() {
  if (this._position_X + this._side >= this._game._board.width) {
    return;
  } else {
    this._position_X += this._velocity_X;
  }
};

Player.prototype.moveDown = function() {
  if (this._position_Y + this._diagonal >= this._game._board.height) {
    return;
  } else {
    this._position_Y += this._velocity_Y;
  }
};

Player.prototype.savePlayerData = function() {};

Player.prototype.draw = function() {
  this._game._ctx.beginPath();
  this._game._ctx.moveTo(this._position_X, this._position_Y - this._diagonal);
  this._game._ctx.lineTo(
    this._position_X + this._side,
    this._position_Y - this._diagonal / 2
  );
  this._game._ctx.lineTo(
    this._position_X + this._side,
    this._position_Y + this._diagonal / 2
  );
  this._game._ctx.lineTo(this._position_X, this._position_Y + this._diagonal);
  this._game._ctx.lineTo(
    this._position_X - this._side,
    this._position_Y + this._diagonal / 2
  );
  this._game._ctx.lineTo(
    this._position_X - this._side,
    this._position_Y - this._diagonal / 2
  );
  this._game._ctx.moveTo(this._position_X, this._position_Y - this._diagonal);
  this._game._ctx.fill();
  this._game._ctx.closePath();
};

Player.prototype.rotatingAttack = function() {};
