function drawHex(game, x, y, side, diagonal, color, life) {
  this._game = game;
  this._game._ctx.beginPath();
  this._game._ctx.fillStyle = color;
  this._game._ctx.moveTo(x, y - diagonal);
  this._game._ctx.lineTo(x + side, y - diagonal / 2);
  this._game._ctx.lineTo(x + side, y + diagonal / 2);
  this._game._ctx.lineTo(x, y + diagonal);
  this._game._ctx.lineTo(x - side, y + diagonal / 2);
  this._game._ctx.lineTo(x - side, y - diagonal / 2);
  this._game._ctx.moveTo(x, y - diagonal);
  this._game._ctx.fill();
  this._game._ctx.closePath();
}
