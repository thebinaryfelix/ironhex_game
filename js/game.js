//Constructor function of the Game
function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._ctx = this._board.getContext("2d");
  this._gameStarted = false;
  this._playerData = [];
  this._player = new Player(this);
  this._skill = new Skills(this);
  this._enemies = [];
  this._fps = 60;
}

//Draw board and game elements
Game.prototype.startGame = function() {
  this._gameStarted = true;

  this.addPlayers();

  this.interval = setInterval(
    function() {
      this.clear();
      this.move();
      this.draw();
      this.checkCollisions();
    }.bind(this),
    1000 / this._fps
  );

  this.interval = setInterval(
    function() {
      if(this._enemies.length <= 5){
        this.addEnemies();
      }
    }.bind(this), 1000);
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
Game.prototype.addEnemies = function() {
  var enemy = new Enemy(this)
  this._enemies.push(enemy);
};

//Randomly add Iron Snacks to the board to make player and NPC's grow
Game.prototype.addFood = function() {};

//Add new player when start button is pressed
Game.prototype.addPlayers = function() {
  var name = "Dev1";
  var initialScore = 0;

    this._player._name = name;
    this._player._score = initialScore;
    this._playerData.push(this._player);
    this._player.setActiveSkill();
};

//Calls methods that will move objects on the board (players and enemies)
Game.prototype.move = function() {
  this._enemies.forEach(function(enemy){
    enemy.move();
  }.bind(this)); //Enemies move randomly
};

//Check collision of player with enemies, other players and the Iron Snacks
Game.prototype.checkCollisions = function() {};

Game.prototype.savePlayerData = function() {};

Game.prototype.draw = function() {
  this._player.draw();
  if(this._enemies.length > 0){
    this._enemies.forEach(function(enemy){
      enemy.draw();
    }.bind(this));
  }
};
