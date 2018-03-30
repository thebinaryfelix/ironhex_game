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

//Load game board
function loadBoard() {
  $(".landing-page").addClass("hidden");
  $(".board-game").removeClass("hidden");

  //Creates var iron_ballz that will store Game object
  var iron_ballz = new Game("main-board");

  //Calls Game method "startGame" to initialize game
  iron_ballz.startGame();

  //Alert user before refreshing or closing page
  window.onbeforeunload = function() {
    if (iron_ballz._gameStarted) {
      return true;
    }
  };
}

function showScore() {}
