function Player(game, INITIAL_X_INCREMENT, INITIAL_Y_INCREMENT) {
  this.game = game;
  this.life = LIFE;
  this.strength = 0;

  this.radius = Math.floor(this.life / 2);
  this.side = Math.sqrt(
    Math.pow(this.radius, 2) - Math.pow(this.radius / 2, 2)
  );

  this.positionX = 0 + INITIAL_X_INCREMENT;
  this.positionY = 0 + INITIAL_Y_INCREMENT;

  this.directionX = 0;
  this.directionY = 0;

  this.speed = SPEED;

  this.skill = []; //Stores one or more skills gained by eating Iron Snacks
  this.skillPoints = 0; //Spent by using skills

  this.receiveDamage = true;
  this.overrideDefense = false;
}

Player.prototype.setBoardLimits = function() {
  var pos = {
    x: this.positionX,
    y: this.positionY,
    w: this.game.board.width,
    h: this.game.board.height
  };

  if (pos.x - this.radius < 0) {
    this.positionX = this.radius;

    return false;
  } else if (pos.x + this.radius > pos.w) {
    this.positionX = pos.w - this.radius;

    return false;
  } else if (pos.y - this.radius < 0) {
    this.positionY = this.radius;

    return false;
  } else if (pos.y + this.radius > pos.h) {
    this.positionY = pos.h - this.radius;

    return false;
  } else {
    return true;
  }
};

Player.prototype.setMove = function(value) {
  if (value.skill == true) {
    this.activateSkill();
    keys[PLAYER1_CONTROLS.SKILL] = false;
  }
  if (value.movingX == -1) {
    if (value.movingY == -1) {
      this.directionX = -DIAGONAL_COS;
      this.directionY = -DIAGONAL_COS;
    } else if (value.movingY == 1) {
      this.directionX = -DIAGONAL_COS;
      this.directionY = DIAGONAL_COS;
    } else {
      this.directionX = -1;
      this.directionY = 0;
    }
  } else if (value.movingX == 1) {
    if (value.movingY == -1) {
      this.directionX = DIAGONAL_COS;
      this.directionY = -DIAGONAL_COS;
    } else if (value.movingY == 1) {
      this.directionX = DIAGONAL_COS;
      this.directionY = DIAGONAL_COS;
    } else {
      this.directionX = 1;
      this.directionY = 0;
    }
  } else {
    if (value.movingY == -1) {
      this.directionX = 0;
      this.directionY = -1;
    } else if (value.movingY == 1) {
      this.directionX = 0;
      this.directionY = 1;
    } else {
      this.directionX = 0;
      this.directionY = 0;
    }
  }
};

Player.prototype.updatePosition = function() {
  if (!this.setBoardLimits()) {
    this.positionX += 0;
    this.positionY += 0;
  } else {
    this.positionX +=
      this.directionX * this.speed * (V_UNITS / (this.radius + MIN_SIZE_CELL));
    this.positionY +=
      this.directionY * this.speed * (V_UNITS / (this.radius + MIN_SIZE_CELL));
  }
  return true;
};

Player.prototype.draw = function() {
  this.radius = Math.floor(this.life / 2);
  this.side = Math.floor(
    Math.sqrt(Math.pow(this.radius, 2) - Math.pow(this.radius / 2, 2))
  );

  drawHex(
    this.game.ctx,
    this.positionX,
    this.positionY,
    this.side,
    this.radius,
    "#ffffff"
  );
};

Player.prototype.eatSnack = function(snack) {
  //Adds snack energy to player's life and score
  this.score += snack.energy;

  if (this.life + snack.energy <= MAX_LIFE) {
    this.life += snack.energy;
  } else {
    this.life = MAX_LIFE;
  }

  this.strength = this.life * 1.5;

  //Adds points to spend with skills
  if (this.skillPoints + snack.energy <= MAX_MANA) {
    this.skillPoints += snack.energy;
  } else {
    this.skillPoints = MAX_MANA;
  }

  //Calculates which skill the player can receive
  var doubled = 0;
  var skillIndex = Math.floor(this.skillPoints / MIN_SKILL_POINT);

  if (skillIndex < SKILL_SET.length) {
    for (var i = 0; i < this.skill.length; i++) {
      if (
        this.skill[i].skillName.indexOf(SKILL_SET[skillIndex].skillName) != -1
      ) {
        doubled++;
      }
    }

    if (this.skillPoints >= MIN_SKILL_POINT && doubled == 0) {
      this.skill.push(SKILL_SET[skillIndex]);
    }
  }
};

Player.prototype.showSkill = function(index) {
  skillArray = this.skill.length - 1;
  return this.skill[skillArray].skillName;
};

Player.prototype.activateSkill = function() {
  setTimeout(
    function() {
      var skillLength = this.skill.length - 1;
      if (this.skillPoints >= this.skill[skillLength].credit) {
        this.skill[skillLength].action(this);
        for (i = skillLength; i > 0; i--) {
          if (this.skillPoints < this.skill[i].credit) {
            this.skill.splice(i, 1);
          }
        }
      }
    }.bind(this),
    100
  );
};
