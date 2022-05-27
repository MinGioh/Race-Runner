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
var fuels, powerCoins, fuelsImg, powerCoinsImg;
var obstacle1Image, obstacle2Image;
var obstaculos;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  pista = loadImage("./assets/track.jpg");
  fuelsImg = loadImage("assets/fuel.png");
  powerCoinsImg = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
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
