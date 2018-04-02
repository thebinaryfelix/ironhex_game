//ENGINE
FPS = 60;
TIME_DELTA = 1000 / FPS;

//Prevent default keyboard behavior
DEFAULT_KEY = [32, 37, 38, 39, 40, 65, 68, 81, 83, 87];

//DEFAULT VALUES FOR GAME
ENEMIES_QTY = 1;
ENEMY_LIFE = 50;

LIFE = 40;
MAX_SIZE = 150; //OF PLAYER AND ENEMIES

MAX_SIZE_FOOD = 20;
MIN_SIZE_FOOD = 5;
FOOD_QTY = 50;

V_UNITS = 90; //Change characters speed here

SPEED = V_UNITS / TIME_DELTA;

DIAGONAL_COS = Math.cos(Math.PI / 4); //Otherwise, speed will add up when pressing two keys at the same time.

//CONTROLS
PLAYER1_CONTROLS = {
  LEFT: 37,   // ARROW_LEFT
  UP: 38,     // ARROW_UP
  RIGHT: 39,  // ARROW_RIGHT
  DOWN: 40,   // ARROW_DOWN
  SKILL: 32   // SPACE_BAR
};

PLAYER2_CONTROLS = {
  UP: 87,     // W
  DOWN: 83,   // S
  LEFT: 65,   // A
  RIGHT: 68,  // D
  SKILL: 81   // Q
};

//INITIAL POSITIONS INCREMENTS
PLAYER1_SHIFT_X = 0;
PLAYER1_SHIFT_Y = 0;
PLAYER2_SHIFT_X = 0;
PLAYER2_SHIFT_Y = 80;