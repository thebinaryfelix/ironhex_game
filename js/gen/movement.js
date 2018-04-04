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

function getObjectDiagonal(obj){
  var pointsOfContact = [
    //p1
    {
      x: obj.pos_X - obj.side,
      y: obj.pos_Y - obj._diagonal/2
    },
    //p2
    {
      x: obj.pos_X + obj.side,
      y: obj.pos_Y - obj._diagonal/2
    },
    //p3
    {
      x: obj.pos_X + obj.side,
      y: obj.pos_Y + obj._diagonal/2
    },
    //p4
    {
      x: obj.pos_X - obj.side,
      y: obj.pos_Y + obj._diagonal/2
    },
  ];

  return pointsOfContact;
}

function checkHexCollision(obj1, obj2) {

  //For hexagonal collisions, we have to monitor all 6 points of contact, of both objects
  var dObj1 = getObjectDiagonal(obj1);
  var dObj2 = getObjectDiagonal(obj2);

  if (
    ((Math.abs(obj1.pos_X - obj2.pos_X) < obj1.side + obj2.side) && (Math.abs(obj1.pos_Y - obj2.pos_Y) < obj1.diagonal + obj2.diagonal)) || ((dObj1[0].x < dObj1[0].x) && (dObj1[0].y < dObj1[0].y)) || ((dObj1[1].x < dObj1[1].x) && (dObj1[1].y < dObj1[1].y)) || ((dObj1[2].x < dObj1[2].x) && (dObj1[2].y < dObj1[2].y)) || ((dObj1[3].x < dObj1[3].x) && (dObj1[3].y < dObj1[3].y))
  ) {
    return true;
  } else {
    return false;
  }
}
