function Enemy(game) {
  this.game = game;

  this.life = ENEMY_LIFE;
  this.strength = 0;

  this.radius = Math.floor(this.life / 2);
  this.side = Math.sqrt(
    Math.pow(this.radius, 2) - Math.pow(this.radius / 2, 2)
  );

  this.positionX = randomPosition(this.game, this.radius).posX;
  this.positionY = randomPosition(this.game, this.radius).posY;

  this.velocityX = 1;
  this.velocityY = 1;

  this.receiveDamage = true;
  this.overrideDefense = false;
}

Enemy.prototype.move = function() {
  this.positionX += this.velocityX * (V_UNITS / (this.radius + 10));
  this.positionY += this.velocityY * (V_UNITS / (this.radius + 10));

  if (
    this.positionX - this.side <= 0 ||
    this.positionX + this.side >= this.game.board.width
  ) {
    this.velocityX *= -1;
  }
  if (
    this.positionY - this.radius <= 0 ||
    this.positionY + this.radius >= this.game.board.height
  ) {
    this.velocityY *= -1;
  }
};

Enemy.prototype.draw = function() {
  var newSize = this.life;

  if (newSize > MAX_SIZE_CELL) {
    newSize = MAX_SIZE_CELL;
  }

  this.radius = Math.floor(newSize / 2);
  this.side = Math.sqrt(
    Math.pow(this.radius, 2) - Math.pow(this.radius / 2, 2)
  );

  drawHex(
    this.game.ctx,
    this.positionX,
    this.positionY,
    this.side,
    this.radius,
    "#C40500"
  );
};

Enemy.prototype.eatSnack = function(snack) {
  if (this.life + snack.energy <= MAX_LIFE + 1) {
    this.life += snack.energy;
  } else {
    this.life = MAX_LIFE + 1;
  }

  this.strength = this.life * 1.5;
};
