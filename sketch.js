var garden,rabbit;
var gardenImg,rabbitImg,appleimg,leafimg
var apple, leaves


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leafimg = loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityY = -5
garden.y = garden.width/2

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);



//creating apple
function createApples(){
  
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleimg)
}

function createOrange(){
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage(leafimg)
}  







function draw(){

  background(0);
  
  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites()

  var select_sprites = Math.round(random(1,3));
  if(frameCount%80===0){
    if(select_sprites ===1){
      createApples()
    }
    else if(select_sprites===2){
      createOrange()
    }
  }
}
}
