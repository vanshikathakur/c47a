var bird, tube1, tube2, bg;
var t;
var tGroup;
var PLAY = 1
var END = 0
var gs = PLAY;

function preload(){
bird = loadImage("images/bird.png");
bg = loadImage("images/bg.png");
tube1 = loadImage("images/tubes.png");
tube2 = loadImage("images/tubes2.png");
}

function setup(){
  createCanvas(900,900);
  bgimg = createSprite(1000, 200, 1200, 400);
  bgimg.addImage(bg);
  birdimg = createSprite(70,300,30,30);
  birdimg.addImage(bird);
  birdimg.scale = 0.5
  //t = createSprite(400,265,30,30);  
  //t.addImage(tube2);
  //t.scale = 0.7;

  tGroup = new Group();
}

function draw() {
  background(255,255,255);  
  bgimg.velocityX = -2;

  if(gs === PLAY){
  if(bgimg.x < 450){
    bgimg.x = 1100/2;
    console.log("hi");
  }

  if(keyDown('space')){
    birdimg.velocityY = -7 ;
  }

  /*/if(tGroup.isTouching(bird)){
    gs = END;
  }/*/

  birdimg.velocityY = birdimg.velocityY + 0.5;
  tube();
}
else if(gs === END){
  bgimg.velocityX = 0;
}

  drawSprites();
}
 
function tube(){
  if(frameCount%137 === 0){
    var t = createSprite(Math.round(random(800,900)),Math.round(random(100,300)),30,30);  
    t.addImage(tube2);
    t.scale = 0.7;
    t.velocityX = -2;
    t.lifetime = 300
    tGroup.add(t);
  }
}  