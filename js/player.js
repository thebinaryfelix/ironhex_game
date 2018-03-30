var SPACE_KEY = 32;
var LEFT_KEY = 37;
var TOP_KEY = 38;
var RIGHT_KEY = 39;
var BOTTOM_KEY = 40;

function Player(boardName, ctx, name, initialScore) {
  this._board = boardName;
  this._ctx = ctx;

  this._score = initialScore;
  this._name = name; //Name from input field on landing page
  this._life = 50; //Increases with amount of food eaten
  this._strength = 0; //More usefull against other players and protects from other player's attacks

  this._cellWidth = 50; //Changes with amount of Iron Snacks eaten
  this._cellHeight = 50; //Changes with amount of Iron Snacks eaten

  this._position_X = 0; //Random on final game
  this._position_Y = 0; //Random on final game

  this._skill = new Skills(this); //Stores one or more skills gained by eating Iron Snacks
}

Player.prototype.score = function() {};

Player.prototype.receiveDamage = function() {};

Player.prototype.skill = function() {
  var skillIndex = Math.floor(this._score / 50);
  this._skill._skillSet[skillIndex].activeSkill = true;
};

Player.prototype.strength = function() {};

Player.prototype.move = function() {

};
