var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var PlayerCount;
var GameState;
var allPlayers;
var car1, car2, car1Img, car2Img;
var pista;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  pista = loadImage("./assets/PISTA.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if(PlayerCount==2){
    game.update(1);
  }

  if(GameState==1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
