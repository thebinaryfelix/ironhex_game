//Constructor function of the Game
function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._ctx = this._board.getContext("2d");
  this._gameStarted = false;
  this._playerData = [];
  this._enemies = new Enemy(this);
  this._player = new Player(this);
  this._skill = new Skills(this);
  this._fps = 30;
}

//Draw board and game elements
Game.prototype.startGame = function() {
  this._gameStarted = true;

  this.addPlayer("Dev1", 0);
  this.addPlayer("Dev2", 50);

  this.interval = setInterval(
    function() {
      this.clear();
      this.move();
      this.draw();
      this.checkCollisions();
    }.bind(this),
    1000 / this._fps
  );
};

//Game Over
Game.prototype.stopGame = function() {
  this._gameStarted = false;
  //this.savePlayerData();
};

//Clear board
Game.prototype.clear = function() {
  this._ctx.clearRect(0, 0, this._board.width, this._board.height);
};

//Add the NPC characters
Game.prototype.addEnemies = function() {};

//Randomly add Iron Snacks to the board to make player and NPC's grow
Game.prototype.addFood = function() {};

//Add new player when start button is pressed
Game.prototype.addPlayer = function(name, initialScore) {
  this._player._name = name;
  this._player._score = initialScore;
  this._playerData.push(this._player);
  this._player.setActiveSkill();
};

//Calls methods that will move objects on the board (players and enemies)
Game.prototype.move = function() {

};

//Check collision of player with enemies, other players and the Iron Snacks
Game.prototype.checkCollisions = function() {};

Game.prototype.savePlayerData = function() {};

Game.prototype.draw = function() {};
