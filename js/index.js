var keys = {};

$(function() {
  //Call function to load game board
  $("#btn-start").click(function() {
    //Uncoment lines below when game ready to play
//    if($("#input-player-1").val() == "" || $("#input-player-2").val() == ""){
//      alert("HOHOHO! You must have a name, dear youngling!");
//    }
//    else{
      loadBoard();
//     }
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
  var ironhex = new Game("main-board");
  ironhex.startGame();

  //Alert user before refreshing or closing page
  //Uncoment lines below when game ready to play
  /* window.onbeforeunload = function() {
    if (iron_ballz._gameStarted) {
      return true;
    }
  }; */
}

function showScore() {
  //Show score of both players...
}

//Keyboard listeners
document.addEventListener("keydown", function(pressedKey) {
  keys[pressedKey.keyCode] = true;
  if(DEFAULT_KEY.indexOf(pressedKey.keyCode) != -1){
    pressedKey.preventDefault();
  }
}, false)

document.addEventListener("keyup", function(releasedKey) {
  keys[releasedKey.keyCode] = false;
}, false)
