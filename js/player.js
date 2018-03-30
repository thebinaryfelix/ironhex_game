var SPACE_KEY = 32;
var LEFT_KEY = 37;
var TOP_KEY = 38;
var RIGHT_KEY = 39;
var BOTTOM_KEY = 40;

var abillities = [
  {
    name: "none",
    receiveDamage: true
  },
  {
    name: "Helix",
    receiveDamage: true
  },
  {
    name: "Iron Immunity",
    receiveDamage: false
  }
];

function Player(boardName, ctx, name, initialScore) {
  this._board = boardName;
  this._ctx = ctx;

  this._score = initialScore;
  this._name = name; //Name from input field on landing page
  this._life = 50; //Increases with amount of food eaten

  this._cellWidth = 50; //Changes with amount of Iron Snacks eaten
  this._cellHeight = 50; //Changes with amount of Iron Snacks eaten

  this._position_X = 0; //Random on final game
  this._position_Y = 0; //Random on final game

  this._abillity = []; //Stores one or more abillity gained by eating Iron Snacks
}

Player.prototype.score = function() {};

Player.prototype.abillity = function(){};

Player.prototype.move = function(){};