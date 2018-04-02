function Enemy(game) {
  this._game = game;

  this._life = ENEMY_LIFE; //Increases with amount of food eaten
  this._strength = this._life * 2; //More usefull against other players and protects from other player's attacks

  /*   this._radius = Math.floor(this._life/4); */

  this._diagonal = Math.floor(this._life / 2);
  this._side = Math.sqrt(
    Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2)
  );

  this._position_X = Math.floor(
    Math.random() * (this._game._board.width - 2 * this._side) + this._side
  );
  this._position_Y = Math.floor(
    Math.random() * (this._game._board.height - 2 * this._diagonal) +
      this._diagonal
  );

  this._velocity_X = 1;
  this._velocity_Y = 1;
}

Enemy.prototype.receiveDamage = function() {};

Enemy.prototype.move = function() {
  this._position_X += this._velocity_X;
  this._position_Y += this._velocity_Y;

  if (
    this._position_X - this._side <= 0 ||
    this._position_X + this._side >= this._game._board.width
  ) {
    this._velocity_X *= -1;
  }
  if (
    this._position_Y - this._diagonal <= 0 ||
    this._position_Y + this._diagonal >= this._game._board.height
  ) {
    this._velocity_Y *= -1;
  }
};

Enemy.prototype.draw = function() {
  drawHex(
    this._game,
    this._position_X,
    this._position_Y,
    this._side,
    this._diagonal,
    "#C40500",
    this._life
  );
};

Enemy.prototype.eatSnack = function(snack) {
  if (this._life <= MAX_LIFE) {
    this._life += snack._energy;
  }
};
