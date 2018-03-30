$(function() {
  
    $("#btn-start").click(function(){
        loadBoard();
    });
    $("#btn-show-score").click(function(){
        showScore();
    });

});

function loadBoard() {
    $(".landing-page").addClass("hidden");
    $(".board-game").removeClass("hidden");

    var iron_ballz = new Game("main-board");
    iron_ballz.startGame();
}

function showScore(){
}