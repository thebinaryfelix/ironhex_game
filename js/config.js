//ENGINE
FPS = 60;
TIME_DELTA = 1000/FPS;

//PLAYERS
V_UNITS = 20; //Change characters speed here
SPEED = V_UNITS / TIME_DELTA;

DIAGONAL_COS = Math.cos(Math.PI / 4); //Setting as speed multiplier the cosine of 45 degrees

//CONTROLS
PLAYER1_CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SKILL: 32
}

PLAYER2_CONTROLS = {
    UP: 87,
    DOWN: 83,
    LEFT: 65,
    RIGHT: 68,
    SKILL: 90
}