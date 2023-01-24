var cooldrink1,cooldrinkimg
var forest
var kid
var zombie
var watermelon
var ground
var gameState
var energy 
var rand


function preload() {
 energy2img = loadImage ("assets/energy2.png")
 forest = loadAnimation ("assets/bg_landscape06.png","assets/pine_trees.png")
 kidimg = loadAnimation ("assets/kid_42_side.png","assets/kid_42.png")
 zombie = loadAnimation ("assets/monster_10.png", "assets/sprite_0.png")
 energy1img = loadImage("assets/energy1.png")
 groundimg = loadImage ("assets/ground2.png")
 firearmimg = loadAnimation ("assets/gun1.png", "assets/bullet1.png")





  
}

function setup () {
createCanvas(800,800);

ground=createSprite (300, 194, 600, 20) ;
ground.addImage ("ground",groundimg) ;
ground.velocityX = -7

kid = createSprite(250,180)
kid.addAnimation("kid", kidimg)
kid.scale = 0.2

energygroup = new Group();
playergroup = new Group();
}


function draw() {
  background(255,255,255);  


 if (ground.x<0) {
ground.x = ground.width/2
 }


spawnEnergy() 





if (keyDown("UP_ARROW")) {

  kid.velocityY=-10


}
kid.velocityY+=0.5;
kid.collide(ground)
 drawSprites();
}


function weapons () {





  
}
  
function spawnEnergy() {

if (frameCount %125 === 0) {

energy = createSprite (800,180);
energy.velocityX = -5
var rand = Math.round(random(1,2))
switch(rand) {

  case 1 : energy.addImage(energy1img) ; 
  break ; 
  case 2 : energy.addImage (energy2img) ; 
  break ; 
  default : break ; 
}
energy.scale = 0.1
energy.lifetime=170
energygroup.add(energy) ;


}
}
