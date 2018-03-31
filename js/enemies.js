function Enemy(game) {
  this._game = game;

  this._life = 100; //Increases with amount of food eaten
  this._strength = 200; //More usefull against other players and protects from other player's attacks

  this._cellWidth = 50; //Changes with amount of Iron Snacks eaten
  this._cellHeight = 50; //Changes with amount of Iron Snacks eaten

  this._position_X = Math.floor(Math.random()*(this._game._board.width - this._cellWidth) - this._cellWidth);
  this._position_Y = Math.floor(Math.random()*(this._game._board.height - this._cellHeight) - this._cellHeight);

  this._velocity_X = 1;
  this._velocity_Y = 2;
}

Enemy.prototype.receiveDamage = function() {};

Enemy.prototype.strength = function() {};

Enemy.prototype.move = function() {
  this._position_X += this._velocity_X;
  if(this._position_X <= 0 || this._position_X >= this._game._board.width){
    this._velocity_X *= -1;
  }
  this._position_Y += this._velocity_Y;
  if(this._position_Y <= 0 || this._position_Y >= this._game._board.height){
    this._velocity_Y *= -1;
  }
};
