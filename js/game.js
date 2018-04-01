function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._ctx = this._board.getContext("2d");
  this._gameStarted = false;
  this._playerData = [];
  this._player = new Player(this);
  this._skill = new Skills(this);
  this._food = [];
  this._enemies = [];
  this._fps = 60;
}

Game.prototype.startGame = function() {
  this._gameStarted = true;

  this.addPlayers();
  this.addFood();
  

  this.interval = setInterval(
    function() {
      this.clear();
      this.addEnemies();
      this.move();
      this.update();
      this.checkCollisions();
    }.bind(this),
    1000 / this._fps
  );
};

Game.prototype.stopGame = function() {
  this._gameStarted = false;
};

Game.prototype.clear = function() {
  this._ctx.clearRect(0, 0, this._board.width, this._board.height);
};

Game.prototype.addEnemies = function() {
  
  this.interval = setInterval(
    function() {
      if (this._enemies.length < 5) {
        var enemy = new Enemy(this);
        this._enemies.push(enemy);
        this.addEnemies();
      }
    }.bind(this),
    100
  );
};

Game.prototype.addFood = function() {
  var food = new Ironsnack(this);
  this._food.push(food);
  
  if (this._food.length < 15) {
    this.addFood();
  }
};

Game.prototype.addPlayers = function() {
  var name = "Dev1";
  var initialScore = 0;

  this._player._name = name;
  this._player._score = initialScore;
  this._playerData.push(this._player);
  this._player.setActiveSkill();
};

Game.prototype.move = function() {
  
  this._enemies.forEach(
    function(enemy) {
      enemy.move();
    }.bind(this)
  );
};

Game.prototype.checkCollisions = function() {};

Game.prototype.savePlayerData = function() {};

Game.prototype.update = function() {
  console.log("1");
  this._player.draw();

  if (this._enemies.length > 0) {
    this._enemies.forEach(
      function(enemy) {
        enemy.draw();
      }.bind(this)
    );
  }

  if (this._food.length > 0) {
    this._food.forEach(
      function(food) {
        food.draw();
      }.bind(this)
    );
  }

};
