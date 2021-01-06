var runner,runnerImage;
var backgrounds,backgroundsImage;
var point,pointImage;
var obstacle,obstacleImage;
var ground;
var obstacleGroup,pointGroup;


function preload(){
  runnerImage=loadImage("—Pngtree—yellow gradient lady running_4724708.png");
  backgroundsImage=loadImage("forest-road_1112-1868.jpg");
  pointImage=loadImage("water_bottle_PNG10169.png");
  obstacleImage=loadImage("stone_PNG13619.png");
}

function setup(){
  createCanvas(400,400);
  
  backgrounds=createSprite(200,200,1,1);
 backgrounds.addImage(backgroundsImage);
  backgrounds.scale=0.9
  
  runner=createSprite(50,100,1,1);
 runner.addImage(runnerImage);
  runner.scale=0.06
  
  point=createSprite(200,200,1,1);
   point.scale=0.02;
  
  obstacle=createSprite(100,100,1,1);
  obstacle.scale=0.02;
  
  obstacleGroup=new Group();
  pointGroup=new Group();
  
}

function draw(){
 background("black");
  if(keyDown("left")){
    runner.x=runner.x-3;
  }
  if(keyDown("right")){
    runner.x=runner.x+3;
  }
  if(keyDown("space")){
    runner.velocityY=-9;
  }
  
  backgrounds.velocityX=3;
  
  if(backgrounds.x>400){
    backgrounds.x=100;
  }
  
  runner.velocityY=runner.velocityY+0.6;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;

  runner.collide(ground);
  
  obstaclE();
  Point();
  
  if(pointGroup.isTouching(runner)){
    pointGroup.destroyEach();
    ground.velocityX=ground.velocityX+3
  }
  if(obstacleGroup.isTouching(runner)){
    obstacleGroup.destroyEach();
    ground.velocityX=ground.velocityX-3
  }
  
  drawSprites();
  
}
function Point(){
 var point=createSprite(400,0,1,0);
  point.scale=0.04;
  if(World.frameCount%80===0){
  
    r=Math.round(random(1,4));
    if(r==1){
      point.addImage(pointImage);
    }else if (r==2){
    point.addImage(pointImage); 
    }else if (r==3){
      point.addImage(pointImage);
    }else if (r==4){
      point.addImage(pointImage);
    }
    point.y=Math.round(random(250,100));
    
    point.velocityX=-7
    point.setLifetime=100;
    
    pointGroup.add(point);
  }
  
}
function obstaclE(){
 var obstacle=createSprite(400,0,1,0);
  obstacle.scale=0.04;
  if(World.frameCount%160===0){
  
    r=Math.round(random(1,4));
    if(r==1){
      obstacle.addImage(obstacleImage);
    }else if (r==2){
    obstacle.addImage(obstacleImage); 
    }else if (r==3){
      obstacle.addImage(obstacleImage);
    }else if (r==4){
      obstacle.addImage(obstacleImage);
    }
    obstacle.y=Math.round(random(300,100));
    
    obstacle.velocityX=-7
    obstacle.setLifetime=100;
    
    obstacleGroup.add(obstacle);
  }
}

