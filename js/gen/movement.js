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
    Math.abs(obj1.pos_Y - obj2.pos_Y) <= obj1.diagonal + obj2.diagonal - 10
  ) {
    return true;
  } else {
    return false;
  }
}

function receiveDamage(obj1, obj2) {
  if (obj1._strength < obj2._strength && obj1._life > 0 && obj1._receiveDamage == true) {
    obj1._life -= obj2._strength / 100;
    if (obj1._life <= 6) {
      return 1;
    }
    return 0;
  } else if (obj1._strength > obj2._strength && obj2._life > 0 && obj2._receiveDamage == true) {
    obj2._life -= obj1._strength / 100;
    if (obj2._life <= 6) {
      return 2;
    }
    return 0;
  }
}
