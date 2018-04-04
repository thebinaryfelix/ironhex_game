/* Global variables used in game. Game functions don't change these. */

//======================VIDEO
FPS = 50;
TIME_DELTA = 1000 / FPS;

MULTIPLAYER = true; //TRUE => two players | FALSE => game ends when all players die

TIME_GAME_OVER = 0; //In seconds. 0 for unlimited.

ENEMY_TIME_SPAN = 5; //Time in seconds.
FOOD_TIME_SPAN = 5; //Time in seconds.

//PEVENT DEFAULT KEYBOARD BEHAVIOR FROM KEYS USED ON GAME
DEFAULT_KEY = [32, 37, 38, 39, 40, 65, 68, 81, 83, 87];

//DEFAULT VALUES
ENEMIES_QTY = 5;
FOOD_QTY = 40;

ENEMY_LIFE = 45;
LIFE = 40;

MAX_SIZE_CELL = 100;
MIN_SIZE_CELL = 20;

MAX_SIZE_FOOD = 25;
MIN_SIZE_FOOD = 10;

//=====================PLAYERS SPEED
V_UNITS = 40;
SPEED = V_UNITS / TIME_DELTA;
DIAGONAL_COS = Math.cos(Math.PI / 4); // ==> Otherwise, speed adds up when on diagonal movement.

//====================CONTROLS
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
PLAYER1_SHIFT_X = 0; //---Change
PLAYER1_SHIFT_Y = 0; //----Player
PLAYER2_SHIFT_X = 0; //-----Initial
PLAYER2_SHIFT_Y = 550; //------Position
