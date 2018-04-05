function receiveDamage(obj1, obj2) {
  if (
    obj1.strength < obj2.strength &&
    obj1.life > 0 &&
    (obj1.receiveDamage == true || obj2.overrideDefense == true)
  ) {
    obj1.life -= obj2.strength / 100;
    if (obj1.life <= MIN_SIZE_CELL) {
      return 1; //obj1 dead
    }
    return 0;
  } else if (
    obj1.strength > obj2.strength &&
    obj2.life > 0 &&
    (obj2.receiveDamage == true || obj1.overrideDefense == true)
  ) {
    obj2.life -= obj1.strength / 100;
    if (obj2.life <= MIN_SIZE_CELL) {
      return 2; //obj2 dead
    }
    return 0;
  }
}
