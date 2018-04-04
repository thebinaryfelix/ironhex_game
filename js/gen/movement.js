function getPosition(obj) {
  var currentPos = {
    pos_X: obj._position_X,
    pos_Y: obj._position_Y,
    side: obj._side,
    diagonal: obj._diagonal
  };
  currentPos.pos_X = currentPos.pos_X + currentPos.side;
  currentPos.pos_Y = currentPos.pos_Y + currentPos.diagonal;

  return currentPos;
}

function checkHexCollision(obj1, obj2) {
  if (
    Math.abs(obj1.pos_X - obj2.pos_X) <= obj1.side + obj2.side - 10 &&
    Math.abs(obj1.pos_Y - obj2.pos_Y) <= obj1.diagonal + obj2.diagonal - 20
  ) {
    return true;
  } else {
    return false;
  }
}
