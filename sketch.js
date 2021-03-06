var canvas, backgroundImage;
var wizard
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var form, player, game;

var rect1, rect2, rect3, rect4, rect5;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  //canvas = createCanvas(displayWidth - 20, displayHeight-30);
  canvas = createCanvas(600,600);
  database = firebase.database();
  game = new Game();
  gameState = 0;
  game.start();
}


function draw(){
 
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
