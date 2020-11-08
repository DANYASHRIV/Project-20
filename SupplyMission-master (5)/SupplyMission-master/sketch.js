var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,lr,rr,br;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	lrSprite=createSprite(300, 610, 20,100);
	lrSprite.shapeColor=color("red")

	rrSprite=createSprite(500 , 610, 20,100);
	rrSprite.shapeColor=color("red")

	brSprite=createSprite(400, 650, 200,20);
	brSprite.shapeColor=color("red")
    
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   
	lr = Bodies.rectangle(300,610, 20, 200 , {isStatic:true} );
 	World.add(world, lr);

	 rr = Bodies.rectangle(400,650,200,20 , {isStatic:true} );
 	World.add(world, rr);

	 br = Bodies.rectangle(width/20, 100, width, 200 , {isStatic:true} );
 	World.add(world, br);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



