function getPosition(obj) {
  var currentPos = {
    posX: obj.positionX,
    posY: obj.positionY,
    side: obj.side,
    radius: obj.radius
  };

  return currentPos;
}

function checkHexCollision(obj1, obj2) {
  var distanceBetweenCenters = Math.sqrt(
    Math.pow(obj1.posX - obj2.posX, 2) + Math.pow(obj1.posY - obj2.posY, 2)
  );

  if (distanceBetweenCenters <= obj1.radius + obj2.radius) {
    return true;
  } else {
    return false;
  }
}

function randomPosition(game, radius) {
  var position = {
    posX: Math.floor(
      Math.random() * Math.random() * (game.board.width - 2 * radius) + radius
    ),
    posY: Math.floor(Math.random() * (game.board.height - 2 * radius) + radius)
  };

  return position;
}
