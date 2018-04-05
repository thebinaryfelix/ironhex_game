function Ironsnack(game) {
  this.game = game;

  this.energy = Math.floor(
    Math.random() * (MAX_SIZE_FOOD - MIN_SIZE_FOOD) + MIN_SIZE_FOOD
  );

  this.radius = this.energy;
  this.side = Math.floor(
    Math.sqrt(Math.pow(this.radius, 2) - Math.pow(this.radius / 2, 2))
  );

  this.positionX = Math.floor(
    Math.random() * (this.game.board.width - 2 * this.side) + this.side
  );
  this.positionY = Math.floor(
    Math.random() * (this.game.board.height - 2 * this.radius) + this.side
  );
}

Ironsnack.prototype.draw = function() {
  var color = "";
  var med = MAX_SIZE_FOOD - 3;
  var min = MAX_SIZE_FOOD - 8;

  if (this.energy <= min) {
    color = "#FF8506";
  } else if (this.energy <= med) {
    color = "#25E02F";
  } else {
    color = "#790D8C";
  }
  drawHex(
    this.game.ctx,
    this.positionX,
    this.positionY,
    this.side,
    this.radius,
    color
  );
};
