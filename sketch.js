var track
var track_1
var man
var man_1
var invisibleground
var invisibleground_2
function preload(){
  //pre-load images
  track_1 = loadImage("path.png")
  man_1 = loadImage("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200)
  track.addImage(track_1)
  track.velocityY = 4
  track.scale = 1
   
  edges = createEdgeSprites();

   
  man = createSprite(200,200,25,25)
  man.addAnimation("running",man_1)
  man.velocityX = 2
  man.scale = 0.05

  invisibleground = createSprite(25,200,50,400)
  invisibleground.visible = false

  invisibleground_2 = createSprite(375,200,50,400)
  invisibleground_2.visible = false

  
}

function draw() {
 background(0)  
 if (track.y > 400) {
   track.y = height/2
 }
 edges = createEdgeSprites();



 if (man.x > 350){
   man.x = 350
 }

 if (man.x > 45) {

  man.x = 45
 }

man.x = World.mouseX 
 
 man.collide(invisibleground)
 man.collide(invisibleground_2)
 
  drawSprites()
}
