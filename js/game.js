function Game(boardName){
    this._board = document.getElementById(boardName);
    this.ctx = this._board.getContext("2d");
}

Game.prototype.startGame = function(){
    console.log(this._board);
}