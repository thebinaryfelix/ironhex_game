function Iron(boardName, ctx) {
    this._board = boardName;
    this._ctx = ctx;

    this._energy = Math.floor(Math.random() * 50 + 10); //Random number between 10 and 50
  
    //Bigger food gives more energy
    this._cellWidth = this._energy * 2;
    this._cellHeight = this._energy * 2;
  
    this._position_X = 0;
    this._position_Y = 0;
  }
  