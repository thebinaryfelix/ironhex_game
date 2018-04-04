function Game(boardName) {
  this._board = document.getElementById(boardName);
  this._board.width = window.innerWidth;
  this._board.height = window.innerHeight;
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
      this.update();
      this.checkCollisions();
    }.bind(this),
    TIME_DELTA
  );

  this.stopGame();
};

Game.prototype.stopGame = function() {
  if (TIME_GAME_OVER == 0) {
    return;
  } else {
    setTimeout(
      function() {
        clearInterval(this.interval);
        this._gameStarted = false;

        if (this._player[0]._score > this._player[1]._score) {
          this.gameOver(this._player[0]._name);
        } else if (this._player[0]._score < this._player[1]._score) {
          this.gameOver(this._player[1]._name);
        } else {
          this.gameOver(0);
        }
      }.bind(this),
      TIME_GAME_OVER * 1000
    );
  }
};

Game.prototype.gameOver = function(name) {
  clearInterval(this.interval);
  this._gameStarted = false;
  
  if(name === 0){
    alert("Incredible! Both survived!");
  }
  else{
    alert(name + "  is the winner!");
  }

  $("#btn-reload").toggleClass("hidden").click(function() {
    $("#btn-reload").toggleClass("hidden");
    location.reload();
  });

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

  this._player[0]._name = $("#input-player-1").val();
  this._player[0]._score = initialScore;
  $("#score-p1-name").text("Score " + this._player[0]._name);

  this._player[1]._name = $("#input-player-2").val();
  this._player[1]._score = initialScore;
  $("#score-p2-name").text("Score " + this._player[1]._name);
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

  if (this._enemies.length > 0) {
    this._enemies.forEach(
      function(enemy) {
        enemy.draw();
      }.bind(this)
    );
  }

  this._player[0].setMove(playerInput(PLAYER1_CONTROLS));
  this._player[0].updatePosition();
  this._player[0].draw();
  this._player[1].setMove(playerInput(PLAYER2_CONTROLS));
  this._player[1].updatePosition();
  this._player[1].draw();

  var scoreP1 = "" + this._player[0]._score;
  var scoreP2 = "" + this._player[1]._score;
  $("#score-p1-text").text(scoreP1);
  $("#score-p2-text").text(scoreP2);
};

Game.prototype.checkCollisions = function() {
  var player1 = this._player[0];
  var player2 = this._player[1];
  var snack = this._food;
  var enemy = this._enemies;

  //Check collisions between players and snacks
  if (snack.length != 0) {
    for (var i = 0; i < snack.length; i++) {
      if (checkHexCollision(getPosition(player1), getPosition(snack[i]))) {
        this._player[0].eatSnack(snack[i], 0);
        this._food.splice(i, 1);
      }
      if (checkHexCollision(getPosition(player2), getPosition(snack[i]))) {
        this._player[1].eatSnack(snack[i], 1);
        this._food.splice(i, 1);
      }
    }
  }

  //Check collisions between players and enemies
  var enemyAttack = 0;
  if (enemy.length != 0) {
    for (var i = 0; i < enemy.length; i++) {
      if (checkHexCollision(getPosition(player1), getPosition(enemy[i]))) {
        enemyAttack = receiveDamage(player1, enemy[i]);
        if (enemyAttack == 1) {
          this.gameOver(player2._name);
        } else if (enemyAttack == 2) {
          enemy.splice(i, 1);
        }
      }
      if (checkHexCollision(getPosition(player2), getPosition(enemy[i]))) {
        enemyAttack = receiveDamage(player2, enemy[i]);
        if (enemyAttack == 1) {
          this.gameOver(player1._name);
        } else if (enemyAttack == 2) {
          enemy.splice(i, 1);
        }
      }

      //Check collisions between enemies and snacks
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

  //Check collisions between players
  var playerAttack = 0;
  if (checkHexCollision(getPosition(player1), getPosition(player2))) {
    playerAttack = receiveDamage(player1, player2);
    if (playerAttack == 1) {
      this.gameOver(player2._name);
    } else if (playerAttack == 2) {
      this.gameOver(player1._name);
    }
  }
};
