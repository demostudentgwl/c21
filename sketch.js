var fixedRect, movingRect,movingRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect1=createSprite(1000,400,80,30);
  movingRect1.shapeColor = "green";
 // movingRect1.velocityX=-3;
  movingRect2=createSprite(100,100,80,30);
  movingRect2.shapeColor = "yellow";
  movingRect2.velocityX=3;
  movingRect3=createSprite(700,100,80,30);
  movingRect3.shapeColor = "yellow";
 // movingRect3.velocityX=-10;

}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect))
  {
movingRect.shapeColor="red";
fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
fixedRect.shapeColor="green";
  }
  bounceoff(movingRect1,fixedRect);
  //collide(movingRect2,movingRect3);
  drawSprites();
}
