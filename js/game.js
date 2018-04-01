function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._ctx = this._board.getContext("2d");
  this._gameStarted = false;
  this._score = 0;
  this._player = [new Player(this), new Player(this)];
  this._food = [];
  this._enemies = [];
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
    TIME_DELTA
  );
};

Game.prototype.stopGame = function() {
  this._gameStarted = false;
};

Game.prototype.clear = function() {
  this._ctx.clearRect(0, 0, this._board.width, this._board.height);
};

Game.prototype.addEnemies = function() {
  
  if (this._enemies.length < 5){
    this.interval = setInterval(
      function() {
        if(this._enemies.length < 5){
          var enemy = new Enemy(this);
          this._enemies.push(enemy);
          this.addEnemies();
        }
  }.bind(this),
  100);
}
};

Game.prototype.addFood = function() {
  var food = new Ironsnack(this);
  this._food.push(food);
  
  if (this._food.length < 15) {
    this.addFood();
  }
};

Game.prototype.addPlayers = function() {
  var name1 = "Dev1";
  var initialScore = 0;
  this._player[0]._id = 1;

  this._player[0]._name = name;
  this._player[0]._score = initialScore;
  this._player[0].setActiveSkill();

  var name2 = "Dev2";
  this._player[1]._id = 2;

  this._player[1]._name = name2;
  this._player[1]._score = initialScore;
  this._player[1].setActiveSkill();
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

  this._player[0].setMove(playerInput(PLAYER1_CONTROLS));
  this._player[1].setMove(playerInput(PLAYER2_CONTROLS));
    this._player[0].updatePosition();
    this._player[1].updatePosition();
  this._player[0].draw();
  this._player[1].draw();

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
