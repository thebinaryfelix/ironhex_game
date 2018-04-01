function drawHex (game, x, y, side, diagonal, color) {
    this._game = game;
    this._game._ctx.beginPath();
    this._game._ctx.fillStyle = color;
    this._game._ctx.moveTo(x, y - diagonal);
    this._game._ctx.lineTo(
        x + side,
        y - diagonal / 2
    );
    this._game._ctx.lineTo(
        x + side,
        y + diagonal / 2
    );
    this._game._ctx.lineTo(x, y + diagonal);
    this._game._ctx.lineTo(
        x - side,
        y + diagonal / 2
    );
    this._game._ctx.lineTo(
        x - side,
        y - diagonal / 2
    );
    this._game._ctx.moveTo(x, y - diagonal);
    this._game._ctx.fill();
    this._game._ctx.closePath();
}

function drawEnemy (game, x, y, r){
    this._game = game;
    this._game._ctx.beginPath();
    this._game._ctx.fillStyle = '#C40500';
    this._game._ctx.arc(x, y, r-2, 0, 2 * Math.PI);
    this._game._ctx.fill();
    this._game._ctx.closePath();
}