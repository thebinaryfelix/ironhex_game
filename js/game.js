//Constructor function of the Game
function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._ctx = this._board.getContext("2d");
  this._gameStarted = false;
  this._players = [];
}

//Draw board and game elements
Game.prototype.startGame = function() {
  this._gameStarted = true;

  var player = new Player(this._board, this._ctx, "Dev", 0);
  this._players.push(player);
};

//Game Over
Game.prototype.stopGame = function() {
  this._gameStarted = false;
};

//Clear board
Game.prototype.clear = function() {};

//Add the NPC characters
Game.prototype.addEnemies = function() {};

//Randomly add food to the board to make player and NPC's grow
Game.prototype.addFood = function() {};

//Add new player each time start button is pressed
Game.prototype.addPlayer = function() {};

//Calls methods that will move objects on the board (players and enemies)
Game.prototype.move = function() {};

//Check collision of player with enemies and other players
Game.prototype.checkCollisions = function() {};
