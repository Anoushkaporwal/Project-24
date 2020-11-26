let goundSprite, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world,engine;

let bottom, right, left;
let paperBall; 

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	bottom = createSprite(810,345,200,20); 
	bottom.shapeColor = "lightblue"; 

	right = createSprite(900,285,20,100);
	right.shapeColor = "lightblue"; 
	
	left = createSprite(720,285,20,100); 
	left.shapeColor = "lightblue";
	

	groundSprite = createSprite(500,355,1000,10)
	groundSprite.shapeColor = "tan";
	
	engine = Engine.create();
	world = engine.world;
	paperBall = new Paper(130,330);
	

	//Create the Bodies Here.
	ground = Bodies.rectangle(800, 500, 200, 355 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();

  drawSprites();
  
  
  
}

function keyPressed() {
	
	if(keyCode === UP_ARROW) {0
		
		Matter.Body.setStatic(paperBall.body, false);
		
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:4,y:-4});
	}
}

