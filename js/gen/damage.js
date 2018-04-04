function receiveDamage(obj1, obj2) {
  debugger;
    if (obj1._strength < obj2._strength && obj1._life > 0 && obj1._receiveDamage == true) {
      obj1._life -= obj2._strength / 100;
      if (obj1._life <= MIN_SIZE_CELL) {
        return 1; //obj1 dead
      }
      return 0;
    } else if (obj1._strength > obj2._strength && obj2._life > 0 && obj2._receiveDamage == true) {
      obj2._life -= obj1._strength / 100;
      if (obj2._life <= MIN_SIZE_CELL) {
        return 2; //obj2 dead
      }
      return 0;
    }
  }