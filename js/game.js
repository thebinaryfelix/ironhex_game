function Game(boardName) {
  this.board = document.getElementById(boardName);
  this.board.width = window.innerWidth;
  this.board.height = window.innerHeight;
  this.ctx = this.board.getContext("2d");
  this.score = [0, 0];
  this.player = [new Player(this, 0, 0), new Player(this, this.board.width, 0)];
  this.food = [];
  this.enemies = [];
  this.currentPositions = [];
}

Game.prototype.startGame = function() {
  this.addPlayers();

  this.gameStarted = true;

  this.interval = setInterval(
    function() {
      this.clear();
      this.move();
      this.checkCollisions();
      this.addFood();
      this.addEnemies();
      this.update();
    }.bind(this),
    TIME_DELTA
  );

  this.stopGame();
};

Game.prototype.stopGame = function() {
  if (TIME_GAME_OVER == 0) {
    return;
  } else {
    this.timeOut = setTimeout(
      function() {
        clearInterval(this.interval);
        this.gameStarted = false;

        if (this.player[0].score > this.player[1].score) {
          this.gameOver(this.player[0].name);
          clearTimeout(this.timeOut);
        } else if (this.player[0].score < this.player[1].score) {
          this.gameOver(this.player[1].name);
          clearTimeout(this.timeOut);
        } else {
          this.gameOver(0);
          clearTimeout(this.timeOut);
        }
      }.bind(this),
      TIME_GAME_OVER * 1000
    );
  }
};

Game.prototype.gameOver = function(name) {
  clearInterval(this.interval);
  this.gameStarted = false;

  if (name === 0) {
    alert("Incredible! Both survived!");
  } else {
    alert(name + "  is the winner!");
  }

  $(".game-over")
    .fadeIn()
    .toggleClass("hidden");
  $("#btn-reload").click(function() {
    $(".game-over")
      .fadeOut()
      .toggleClass("hidden");
    location.reload();
  });
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.board.width, this.board.height);
};

Game.prototype.addEnemies = function() {
  if (this.enemies.length < ENEMIES_QTY) {
    var enemy = new Enemy(this);
    this.enemies.push(enemy);
    this.addEnemies();
  }
};

Game.prototype.addFood = function() {
  while (this.food.length < FOOD_QTY) {
    var food = new Ironsnack(this);
    food.index = this.food.length;
    this.food.push(food);
  }
};

Game.prototype.addPlayers = function() {
  this.player[0].skill[0] = SKILL_SET[0];
  this.player[0].name = $("#input-player-1").val();
  this.player[0].score = 0;
  $("#score-p1-name").text(this.player[0].name); //Show player name in DOM

  this.player[1].skill[0] = SKILL_SET[0];
  this.player[1].name = $("#input-player-2").val();
  this.player[1].score = 0;
  $("#score-p2-name").text(this.player[1].name); //Show player name in DOM
};

Game.prototype.move = function() {
  this.enemies.forEach(
    function(enemy) {
      enemy.move();
    }.bind(this)
  );
};

Game.prototype.update = function() {
  if (this.food.length > 0) {
    this.food.forEach(
      function(food) {
        food.draw();
      }.bind(this)
    );
  }

  if (this.enemies.length > 0) {
    this.enemies.forEach(
      function(enemy) {
        enemy.draw();
      }.bind(this)
    );
  }

  this.player[0].setMove(playerInput(PLAYER1_CONTROLS));
  this.player[0].updatePosition();
  this.player[0].draw();
  this.player[1].setMove(playerInput(PLAYER2_CONTROLS));
  this.player[1].updatePosition();
  this.player[1].draw();

  this.writePlayerInfo();
};

Game.prototype.checkCollisions = function() {
  var player1 = this.player[0];
  var player2 = this.player[1];
  var snack = this.food;
  var enemy = this.enemies;

  //Check collisions between players and snacks
  if (snack.length != 0) {
    for (var i = 0; i < snack.length; i++) {
      if (checkHexCollision(getPosition(player1), getPosition(snack[i]))) {
        this.player[0].eatSnack(snack[i], 0);
        this.food.splice(i, 1);
      }
      if (snack[i] !== undefined) {
        if (checkHexCollision(getPosition(player2), getPosition(snack[i]))) {
          this.player[1].eatSnack(snack[i], 1);
          this.food.splice(i, 1);
        }
      }
    }
  }

  var enemyAttack = 0;
  if (enemy.length != 0) {
    for (var i = 0; i < enemy.length; i++) {
      //Check collisions between player_1 and enemies
      if (checkHexCollision(getPosition(player1), getPosition(enemy[i]))) {
        //bounceBack(getPosition(player1), getPosition(enemy[i]));

        enemyAttack = receiveDamage(player1, enemy[i]);
        if (enemyAttack == 1) {
          this.gameOver(player2.name);
        } else if (enemyAttack == 2) {
          player1.score += Math.floor(enemy[i].life);
          enemy.splice(i, 1);
        }
      }

      if (enemy[i] !== undefined) {
        //Check collisions between player_2 and enemies
        if (checkHexCollision(getPosition(player2), getPosition(enemy[i]))) {
          // bounceBack(getPosition(player2), getPosition(enemy[i]));

          enemyAttack = receiveDamage(player2, enemy[i]);
          if (enemyAttack == 1) {
            this.gameOver(player1.name);
          } else if (enemyAttack == 2) {
            player2.score += Math.floor(enemy[i].life);
            enemy.splice(i, 1);
          }
        }
      }

      //Check collisions between enemies and snacks
      if (snack.length != 0 && enemy[i] !== undefined) {
        for (var j = 0; j < snack.length; j++) {
          if (checkHexCollision(getPosition(enemy[i]), getPosition(snack[j]))) {
            enemy[i].eatSnack(snack[j], 0);
            this.food.splice(j, 1);
          }
        }
      }
    }
  }

  //Check collisions between players
  var deadPlayer = 0;
  if (checkHexCollision(getPosition(player1), getPosition(player2))) {
    /* bounceBack(getPosition(player1), getPosition(player2)); */

    deadPlayer = receiveDamage(player1, player2);
    if (deadPlayer == 1) {
      player2.score += Math.floor(player1.life);
      this.gameOver(player2.name);
    } else if (deadPlayer == 2) {
      player1.score += Math.floor(player2.life);
      this.gameOver(player1.name);
    }
  }
};

Game.prototype.writePlayerInfo = function() {
  //Show player's score on screen
  $("#score-p1-text").text("Score: " + this.player[0].score);
  $("#score-p2-text").text("Score: " + this.player[1].score);

  $("#life-p2").text("Life: " + parseInt(this.player[1].life));

  //Show player's skill on screen
  $("#skill-p1 > span").text(this.player[0].showSkill());
  $("#skill-p2 > span").text(this.player[1].showSkill());

  //Update player's life bar
  var wLifeBar = this.player[0].life * 100 / MAX_LIFE;
  $("#health-bar-p1").width(wLifeBar + "%");

  if (wLifeBar < 30) {
    $("#health-bar-p1").addClass("bar-danger");
  }

  wLifeBar = this.player[1].life * 100 / MAX_LIFE;
  $("#health-bar-p2").width(wLifeBar + "%");

  var wManaBar = this.player[0].skillPoints * 100 / MAX_MANA;
  $("#mana-bar-p1").width(wManaBar + "%");
  wManaBar = this.player[1].skillPoints * 100 / MAX_MANA;
  $("#mana-bar-p2").width(wManaBar + "%");
};
