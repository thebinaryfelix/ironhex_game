function playerInput(keyActive) {
    var playerMovement = {
      moving_X: 0,
      moving_Y: 0,
    };
    if (keys[keyActive.LEFT]) {
      playerMovement.moving_X = -1;
    } else if (keys[keyActive.RIGHT]) {
      playerMovement.moving_X = 1;
    }
    if (keys[keyActive.UP]) {
      playerMovement.moving_Y = -1;
    } else if (keys[keyActive.DOWN]) {
      playerMovement.moving_Y = 1;
    }
  
    return playerMovement;
  }