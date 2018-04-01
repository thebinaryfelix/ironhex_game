var keys = {};

$(function() {
  //Call function to load game board
  $("#btn-start").click(function() {
    loadBoard();
  });

  //Show players name and score on landing page
  $("#btn-show-score").click(function() {
    showScore();
  });
});

function loadBoard() {
  $(".landing-page").addClass("hidden");
  $(".board-game").removeClass("hidden");

  //Creates var iron_ballz that will store Game object
  var iron_ballz = new Game("main-board");

  iron_ballz.startGame();

  //Alert user before refreshing or closing page
  window.onbeforeunload = function() {
    if (iron_ballz._gameStarted) {
      return true;
    }
  };
}

function showScore() {}

//Keyboard listeners
document.addEventListener("keydown", function(pressedKey) {
  keys[pressedKey.keyCode] = true;
}, false)

document.addEventListener("keyup", function(releasedKey) {
  keys[releasedKey.keyCode] = false;
}, false)
