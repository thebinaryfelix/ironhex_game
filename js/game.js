function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._ctx = this._board.getContext("2d");
  this._gameStarted = false;
  this._score = [0, 0];
  this._player = [new Player(this), new Player(this)];
  this._food = [];
  this._enemies = [];
  this._currentPositions = [];
}

Game.prototype.startGame = function() {
  this._gameStarted = true;

  this.addPlayers();

  this.interval = setInterval(
    function() {
      this.clear();
      this.addFood();
      this.addEnemies();
      this.move();
      this.checkCollisions();
      this.update();
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
  if (this._enemies.length < ENEMIES_QTY) {
    this.interval = setInterval(
      function() {
        if (this._enemies.length < ENEMIES_QTY) {
          var enemy = new Enemy(this);
          this._enemies.push(enemy);
          this.addEnemies();
        }
      }.bind(this),
      100
    );
  }
};

Game.prototype.addFood = function() {
  if (this._food.length < FOOD_QTY) {
    this.interval = setInterval(
      function() {
        if (this._food.length < FOOD_QTY) {
          var food = new Ironsnack(this);
          this._food.push(food);
          this.addFood();
        }
      }.bind(this),
      100
    );
  }
};

Game.prototype.addPlayers = function() {
  var initialScore = 0;

  this._player[0]._id = 1;
  this._player[0]._name = $("#input-player-1").val();
  this._player[0]._score = initialScore;
  this._player[0].setActiveSkill();
  this._player[1]._id = 2;
  this._player[1]._name = $("#input-player-2").val();
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

Game.prototype.update = function() {
  if (this._food.length > 0) {
    this._food.forEach(
      function(food) {
        food.draw();
      }.bind(this)
    );
  }

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
};

Game.prototype.checkCollisions = function() {
  var player1 = getPosition(this._player[0]);
  var player2 = getPosition(this._player[1]);
  //Check collision between players
  checkHexCollision(player1, player2);

  var snack = this._food;
  //Check collision between player and snack
  if (snack.length != 0) {
    for (var i = 0; i < snack.length; i++) {
      if (checkHexCollision(player1, getPosition(snack[i]))) {
        this._player[0].eatSnack(snack[i], 0);
        this._food.splice(i, 1);
      }
      if (checkHexCollision(player2, getPosition(snack[i]))) {
        this._player[1].eatSnack(snack[i], 1);
        this._food.splice(i, 1);
      }
    }
  }

  //Check collision between player and enemies
  var enemy = this._enemies;
  if (enemy.length != 0) {
    for (var i = 0; i < enemy.length; i++) {
      checkHexCollision(player1, getPosition(enemy[i]));
      checkHexCollision(player2, getPosition(enemy[i]));
    }
  }
};
Game.prototype.savePlayerData = function() {};
