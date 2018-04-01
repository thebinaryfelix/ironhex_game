function Enemy(game) {
  this._game = game;

  this._life = 70; //Increases with amount of food eaten
  this._strength = this._life*2; //More usefull against other players and protects from other player's attacks

  this._radius = Math.floor(this._life/4);

  this._position_X = Math.floor(Math.random()*(this._game._board.width - 2*this._radius) + this._radius);
  this._position_Y = Math.floor(Math.random()*(this._game._board.height - 2*this._radius) + this._radius);

  this._velocity_X = 1;
  this._velocity_Y = 1;
}

Enemy.prototype.receiveDamage = function() {};

Enemy.prototype.strength = function() {};

Enemy.prototype.move = function() {
  this._position_X += this._velocity_X;
  this._position_Y += this._velocity_Y;
    
    if(this._position_X - this._radius <= 0 || this._position_X + this._radius >= this._game._board.width){
      this._velocity_X *= -1;
    }
    if(this._position_Y - this._radius <= 0 || this._position_Y + this._radius >= this._game._board.height){
      this._velocity_Y *= -1;
    }
};

Enemy.prototype.draw = function(){
  drawEnemy(this._game, this._position_X, this._position_Y, this._radius);
}