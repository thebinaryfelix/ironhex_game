function Player(game, INITIAL_X_INCREMENT, INITIAL_Y_INCREMENT) {
  this._game = game;
  this._life = LIFE;
  this._strength = 0;

  this._position_X = 0 + INITIAL_X_INCREMENT;
  this._position_Y = 0 + INITIAL_Y_INCREMENT;

  this._direction_X = 0;
  this._direction_Y = 0;

  this._skill = []; //Stores one or more skills gained by eating Iron Snacks

  this._receiveDamage = true;
}

Player.prototype.setBoardLimits = function() {
  var pos = {
    x: this._position_X,
    y: this._position_Y,
    w: this._game._board.width,
    h: this._game._board.height
  };

  if (pos.x - this._side < 0) {
    this._position_X = this._side;

    return false;
  } else if (pos.x + this._side > pos.w) {
    this._position_X = pos.w - this._side;

    return false;
  } else if (pos.y - this._diagonal < 0) {
    this._position_Y = this._diagonal;

    return false;
  } else if (pos.y + this._diagonal > pos.h) {
    this._position_Y = pos.h - this._diagonal;

    return false;
  } else {
    return true;
  }
};

Player.prototype.setMove = function(value) {
  if (value.skill == true) {
    this.activateSkill();
  }
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

Player.prototype.updatePosition = function() {;

  if (!this.setBoardLimits()) {
    this._position_X += 0;
    this._position_Y += 0;
  } else {
    this._position_X += this._direction_X * SPEED * (50/(this._life+10));
    this._position_Y += this._direction_Y * SPEED * (50/(this._life+10));
  }
  return true;
};

Player.prototype.draw = function() {
  this._diagonal = Math.floor(this._life / 2);
  this._side = Math.floor(
    Math.sqrt(Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2))
  );

  drawHex(
    this._game,
    this._position_X,
    this._position_Y,
    this._side,
    this._diagonal,
    "#000000",
    this._life
  );
};

Player.prototype.eatSnack = function(snack, playerIndex) {
  var doubled = 0;
  var skillIndex = Math.floor(this._life / 50);

  if (this._life <= MAX_LIFE) {
    this._life += snack._energy;
    this._strength = this._life * 1.5;
    for (var i = 0; i < this._skill.length; i++) {
      if (
        this._skill[i].skillName.indexOf(SKILL_SET[skillIndex].skillName) != -1
      ) {
        doubled++;
      }
    }

    if (this._life > 50 && doubled == 0) { 
      this._skill.push(SKILL_SET[skillIndex]);
    }
  }
  this._score += snack._energy;
};

Player.prototype.activateSkill = function() {
  console.log("Skill key active");
};
