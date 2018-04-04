function Ironsnack(game) {
  this._game = game;

  this._energy = Math.floor(Math.random() * MAX_SIZE_FOOD + MIN_SIZE_FOOD); //Random number between 10 and 15

  this._diagonal = this._energy;
  this._side = Math.sqrt(
    Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2)
  );

  this._position_X = Math.floor(
    Math.random() * (this._game._board.width - 2 * this._side) + this._side
  );
  this._position_Y = Math.floor(
    Math.random() * (this._game._board.height - 2 * this._diagonal) + this._side
  );
}

Ironsnack.prototype.draw = function() {
  var color = "";
  var med = MAX_SIZE_FOOD - 3;
  var min = MAX_SIZE_FOOD - 8;

  if (this._energy <= min) {
    color = "#FF8506";
  } else if (this._energy <= med) {
    color = "#25E02F";
  } else {
    color = "#790D8C";
  }
  drawHex(
    this._game,
    this._position_X,
    this._position_Y,
    this._side,
    this._diagonal,
    color,
    this._energy
  );
};
