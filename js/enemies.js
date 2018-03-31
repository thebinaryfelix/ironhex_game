function Enemy(game) {
  this._game = game;

  this._life = 100; //Increases with amount of food eaten
  this._strength = 200; //More usefull against other players and protects from other player's attacks

  this._cellWidth = 50; //Changes with amount of Iron Snacks eaten
  this._cellHeight = 50; //Changes with amount of Iron Snacks eaten

  this._position_X = 0; //Random on final game
  this._position_Y = 0; //Random on final game
}

Enemy.prototype.receiveDamage = function() {};

Enemy.prototype.strength = function() {};

Enemy.prototype.move = function() {};
