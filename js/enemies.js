function Enemy(boardName, ctx) {
  this._board = boardName;
  this._ctx = ctx;

  this._life = 200;
  this._strength = 150;

  this._cellWidth = 80;
  this._cellHeight = 80;

  this._position_X = 0;
  this._position_Y = 0;
}

Enemy.prototype.receiveDamage = function() {};

Enemy.prototype.strength = function() {};

Enemy.prototype.move = function() {};
