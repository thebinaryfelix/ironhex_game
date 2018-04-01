function Ironsnack(game) {
    this._game = game;

    this._energy = Math.floor(Math.random() * 15 + 5); //Random number between 10 and 50
  
    this._diagonal = this._energy;
    this._side = Math.sqrt(
      Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2)
    );
  
    this._position_X = Math.floor((Math.random() * (this._game._board.width - 2*this._side)) + this._side);
    this._position_Y = Math.floor((Math.random() * (this._game._board.height - 2*this._diagonal)) + this._side);
  }
  
  Ironsnack.prototype.draw = function() {
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