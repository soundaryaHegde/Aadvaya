var ninja,Ninja,Ninja2,leftWall,Wall,RightWall,rightWall
var obstaclesGroup
var speedPower
var shieldPower

function preload(){
  Ninja=loadImage("ninja.png")
  Ninja2=loadImage("ninja2.png")
Wall=loadImage("image_1.png")
}



function setup() {
  createCanvas(400,1000);
  ninja=createSprite(200,900,20,20)
  ninja.scale = 2.2;
  leftWall=createSprite(24,300,40,1000)
  leftWall.setCollider("rectangle",-30,0,10,300)
  leftWall.debug = true;
  rightWall=createSprite(378,600,40,1000)
  ninja.addImage(Ninja)
  leftWall.addImage(Wall)
  rightWall.addImage(Wall)
  leftWall.velocityY = 2;
  }
  



function draw() {
  background(201,239,253);  

 
  if(keyDown("left")){
    
    ninja.addImage(Ninja2);
    
    ninja.velocityY = -2;
    ninja.velocityX = -2;
  }

  if(ninja.isTouching(leftWall)){
    ninja.x = leftWall.x + 60;
    //ninja.y = ninja.y;
    ninja.velocityY = 0;
    //ninja.collide(leftWall);
  }

  if(leftWall.y > 1000 ){

   leftWall.y = 300;

  }
  
  drawSprites();
}