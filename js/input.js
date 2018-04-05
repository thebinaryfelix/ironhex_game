function playerInput(keyActive) {
  var playerMovement = {
    movingX: 0,
    movingY: 0,
    skill: false
  };
  if (keys[keyActive.LEFT]) {
    playerMovement.movingX = -1;
  } else if (keys[keyActive.RIGHT]) {
    playerMovement.movingX = 1;
  }
  if (keys[keyActive.UP]) {
    playerMovement.movingY = -1;
  } else if (keys[keyActive.DOWN]) {
    playerMovement.movingY = 1;
  }
  if (keys[keyActive.SKILL]) {
    playerMovement.skill = true;
  }

  return playerMovement;
}
