function Ironsnack(game) {
    this._game = game;

    this._energy = Math.floor(Math.random() * 20 + 5); //Random number between 10 and 15
  
    this._diagonal = this._energy;
    this._side = Math.sqrt(Math.pow(this._diagonal, 2) - Math.pow(this._diagonal / 2, 2));
  
    this._position_X = Math.floor((Math.random() * (this._game._board.width - 2*this._side)) + this._side);
    this._position_Y = Math.floor((Math.random() * (this._game._board.height - 2*this._diagonal)) + this._side);
  }
  
  Ironsnack.prototype.draw = function() {
    var color = '';
    if(this._energy <= 8){
      color = '#FF8506';
    }
    else if(this._energy <= 13){
      color = '#25E02F';
    }
    else{
      color = '#790D8C';
    }
    drawHex(this._game, this._position_X, this._position_Y, this._side, this._diagonal, color);
  };