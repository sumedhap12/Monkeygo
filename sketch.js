
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var Survivaltime=0;
var Stone
var Banana

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600,400)
  
  monkey=createSprite(100,309,20,20)
  monkey.addAnimation('run', monkey_running)
  monkey.scale=0.15
  
  
  ground=createSprite(300,350,1000,11)
  ground.velocityX=-3;
  ground.x = ground.width /2;
  
  FoodGroup=new Group();
  obstacleGroup= new Group();
  
}

function draw() {
  background(225)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time :" + survivaltime,220,80)
  
  
  
  if(keyDown("space")&& monkey.y>210){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  if(ground.x<0){
     ground.x = ground.width /2;
 }
  
  monkey.collide(ground)
  
  fruit();
  
  obstacle();
  
  drawSprites();

  
}

function fruit(){
  if (frameCount % 80 === 0){
  Banana=createSprite(300,180,10,10)
  Banana.addImage(bananaImage)
  Banana.scale=0.12
  Banana.velocityX=-7
  Banana.y = Math.round(random(120,200))
  Banana.setLifetime=170;
  
  FoodGroup.add(Banana);}
}

function obstacle(){
  if (frameCount % 300 === 0){
    Stone=createSprite(250,320,15,15)
    Stone.addImage(obstaceImage)
    Stone.scale=0.15 
    Stone.velocityX=-5;
    Stone.setLifetime=150; 
  
  obstacleGroup.add(Stone)}
  
}

  
  
  
  


