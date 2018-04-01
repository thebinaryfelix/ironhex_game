function Player(game) {
  this._game = game;

  this._life = 40; //Increases with amount of food eaten
  this._strength = this._life * 2; //More usefull against other players and protects from other player's attacks

  this._diagonal = Math.floor(this._life / 2);
  this._side = Math.sqrt(
    Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2)
  );

  this._position_X = this._side;
  this._position_Y = this._diagonal;

  this._direction_X = 0;
  this._direction_Y = 0;

  this._skill = []; //Stores one or more skills gained by eating Iron Snacks
}

Player.prototype.score = function() {};

Player.prototype.setActiveSkill = function() {
  var skillIndex = Math.floor(this._score / 50);
  for (var i = 0; i <= skillIndex; i++) {
    this._skill.push(SKILL_SET[skillIndex]);
  }
};

Player.prototype.getPosition = function() {
  var x = this._position_X;
  var y = this._position_Y;
  var w_limit = this._game._board.width;
  var y_limit = this._game._board.height;
  if (x - this._side < 0) {
    this._position_X = this._side;
    return false;
  } else if (x + this._side > w_limit) {
    this._position_X = w_limit - this._side;
    return false;
  } else if (y - this._diagonal < 0) {
    this._position_Y = this._diagonal;
    return false;
  } else if (y + this._diagonal > y_limit) {
    this._position_Y = y_limit - this._diagonal;
    return false;
  } else {
    return true;
  }
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
  if (!this.getPosition()) {
    this._position_X += 0;
    this._position_Y += 0;
  } else {
    this._position_X += this._direction_X * SPEED;
    this._position_Y += this._direction_Y * SPEED;
  }
};

Player.prototype.savePlayerData = function() {};

Player.prototype.draw = function() {
  drawHex(this._game, this._position_X, this._position_Y, this._side, this._diagonal, '#000000');
};

Player.prototype.rotatingAttack = function() {};
