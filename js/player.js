function Player(game) {
  this._game = game;

  /*   Positionable.call(this); */

  this._life = 30; //Increases with amount of food eaten
  this._strength = this._life * 2; //More usefull against other players and protects from other player's attacks

  this._diagonal = Math.floor(this._life / 2);
  this._side = Math.sqrt(
    Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2)
  );

  this._position_X = this._side;
  this._position_Y = this._diagonal;

  this._direction_X = 0;
  this._direction_Y = 0;

  this._skill = new Skills(this); //Stores one or more skills gained by eating Iron Snacks
}

Player.prototype.score = function() {};

Player.prototype.setActiveSkill = function() {
  var skillIndex = Math.floor(this._score / 50);
  this._skill._skillSet[skillIndex].activeSkill = true;
};

Player.prototype.setMove = function(value) {
  if (value.moving_X == -1) {
    if (value.moving_Y == -1) {
      this._direction_X = -DIAGONAL_COS;
      this._direction_Y = -DIAGONAL_COS;
    } else if (value.moving_Y == 1) {
      this._direction_X = -DIAGONAL_COS;
      this._direction_Y = DIAGONAL_COS;
    } else {
      this._direction_X = -1;
      this._direction_Y = 0;
    }
  } else if (value.moving_X == 1) {
    if (value.moving_Y == -1) {
      this._direction_X = DIAGONAL_COS;
      this._direction_Y = -DIAGONAL_COS;
    } else if (value.moving_Y == 1) {
      this._direction_X = DIAGONAL_COS;
      this._direction_Y = DIAGONAL_COS;
    } else {
      this._direction_X = 1;
      this._direction_Y = 0;
    }
  } else {
    if (value.moving_Y == -1) {
      this._direction_X = 0;
      this._direction_Y = -1;
    } else if (value.moving_Y == 1) {
      this._direction_X = 0;
      this._direction_Y = 1;
    } else {
      this._direction_X = 0;
      this._direction_Y = 0;
    }
  }
  
};

Player.prototype.updatePosition = function() {
  this._position_X += this._direction_X * SPEED;
  this._position_Y += this._direction_Y * SPEED;
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
