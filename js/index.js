var keys = {};

$(function() {
  $("#score")
    .hide()
    .removeClass("hidden");
  $(".board-game")
    .hide()
    .removeClass("hidden");

  //Call function to load game board
  $("#btn-start").click(function() {
    //Uncoment lines below when game ready to play
    if ($("#input-player-1").val() == "" || $("#input-player-2").val() == "") {
      alert("HOHOHO! You must have a name, dear youngling!");
    } else if($("#input-player-1").val() == $("#input-player-2").val()){
      alert("WOW! You shouldn't play with yourself :( It's so saaaad");
    }
    else
    {
      loadBoard();
    }
  });
});

function loadBoard() {
  $(".landing-page").fadeOut(300);
  setTimeout(function() {
    $(".board-game").fadeIn(1000);
    $("#score").fadeIn(1000);
  }, 400);

  //Creates var iron_ballz that will store Game object
  var ironhex = new Game("main-board");
  ironhex.startGame();

  //Alert user before refreshing or closing page
  //Uncoment lines below when game ready to play
  window.onbeforeunload = function() {
    if (ironhex._gameStarted) {
      return true;
    }
  };

  //Keyboard listeners
  document.addEventListener(
    "keydown",
    function(pressedKey) {
      keys[pressedKey.keyCode] = true;
      if (DEFAULT_KEY.indexOf(pressedKey.keyCode) != -1) {
        pressedKey.preventDefault();
      }
    },
    false
  );

  document.addEventListener(
    "keyup",
    function(releasedKey) {
      keys[releasedKey.keyCode] = false;
    },
    false
  );
}
