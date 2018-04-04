//======================VIDEO
FPS = 60;
TIME_DELTA = 1000 / FPS;

TIME_GAME_OVER = 3; //In seconds. 0 for unlimited.

ENEMY_TIME_SPAN = 5;  //Time in seconds.
FOOD_TIME_SPAN = 5;   //Time in seconds.

//PEVENT DEFAULT KEYBOARD BEHAVIOR FROM KEYS USED ON GAME
DEFAULT_KEY = [32, 37, 38, 39, 40, 65, 68, 81, 83, 87];

//DEFAULT VALUES
ENEMIES_QTY = 1;
FOOD_QTY = 25;

ENEMY_LIFE = 55;
LIFE = 30;

MAX_SIZE = 100; //For the player cell
MAX_SIZE_FOOD = 20;
MIN_SIZE_FOOD = 5;

//=====================PLAYERS SPEED
V_UNITS = 40;
SPEED = V_UNITS / TIME_DELTA;
DIAGONAL_COS = Math.cos(Math.PI / 4); // ==> Otherwise, speed adds up when on diagonal movement.

//==================== CONTROLS
PLAYER1_CONTROLS = {
  LEFT: 37, // ARROW_LEFT
  UP: 38, // ARROW_UP
  RIGHT: 39, // ARROW_RIGHT
  DOWN: 40, // ARROW_DOWN
  SKILL: 32 // SPACE_BAR
};

PLAYER2_CONTROLS = {
  UP: 87, // W
  DOWN: 83, // S
  LEFT: 65, // A
  RIGHT: 68, // D
  SKILL: 81 // Q
};

//====================INITIAL POSITIONS INCREMENTS
PLAYER1_SHIFT_X = 0;    //---Change
PLAYER1_SHIFT_Y = 0;    //----Player
PLAYER2_SHIFT_X = 0;    //-----Initial
PLAYER2_SHIFT_Y = 550;  //------Position
