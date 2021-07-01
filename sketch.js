var bgImg;
var boy1;
var snow;



function preload(){

  bgImg = loadImage("snow1.jpg");
  boyImg = loadImage("boy.png");
  snow = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  bg1 = createSprite(0,0,1600,800);
  bg1.addImage(bgImg)
  bg1.scale = 4;

  bg1.x = bg1.width/2;
  bg1.velocityX = 6;


  boy1 = createSprite(700, 350, 50, 50);
  boy1.addImage(boyImg);
  boy1.scale = 0.4;

  ig = createSprite(400,380,600,10)
  ig.visible = false;
}

function draw() {

if(bg1.x>800) {

bg1.x = bg1.width/2

}
if(keyDown(" ")){
  boy1.velocityY = -8
}
 boy1.velocityY = boy1.velocityY + 0.6
 boy1.collide(ig);
 
 snowImg();
  drawSprites();
}

function snowImg(){
  if(frameCount % 20 === 0){
var snow1 = createSprite(random(20,700),0,20,20)
snow1.addImage(snow);
snow1.velocityY = 4;
snow1.scale = 0.1;
  }

}
