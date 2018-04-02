function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._ctx = this._board.getContext("2d");
  this._score = [0, 0];
  this._player = [
    new Player(this, PLAYER1_SHIFT_X, PLAYER1_SHIFT_Y),
    new Player(this, PLAYER2_SHIFT_X, PLAYER2_SHIFT_Y)
  ];
  this._food = [];
  this._enemies = [];
  this._currentPositions = [];
}

Game.prototype.startGame = function() {
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
  this.stopGame();
};

Game.prototype.stopGame = function() {
  setTimeout(
    function() {
      clearInterval(this.interval);
      this._gameStarted = false;
    }.bind(this),
    120000
  );
};

Game.prototype.clear = function() {
  this._ctx.clearRect(0, 0, this._board.width, this._board.height);
};

Game.prototype.addEnemies = function() {
  if (this._enemies.length < ENEMIES_QTY) {
    var enemy = new Enemy(this);
    this._enemies.push(enemy);
    this.addEnemies();
  }
};

Game.prototype.addFood = function() {
  if (this._food.length < FOOD_QTY) {
    var food = new Ironsnack(this);
    this._food.push(food);
    this.addFood();
  }
};

Game.prototype.addPlayers = function() {
  var initialScore = 0;

  this._player[0]._id = 1;
  this._player[0]._name = $("#input-player-1").val();
  this._player[0]._score = initialScore;
  
  this._player[1]._id = 2;
  this._player[1]._name = $("#input-player-2").val();
  this._player[1]._score = initialScore;

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
  this._player[0].updatePosition();
  this._player[0].draw();

  this._player[1].setMove(playerInput(PLAYER2_CONTROLS));
  this._player[1].updatePosition();
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
  var enemy = this._enemies;

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

  if (enemy.length != 0) {
    for (var i = 0; i < enemy.length; i++) {
      checkHexCollision(player1, getPosition(enemy[i]));
      checkHexCollision(player2, getPosition(enemy[i]));
      if (snack.length != 0) {
        for (var j = 0; j < snack.length; j++) {
          if (checkHexCollision(getPosition(enemy[i]), getPosition(snack[j]))) {
            enemy[i].eatSnack(snack[j], 0);
            this._food.splice(j, 1);
          }
        }
      }
    }
  }
};
