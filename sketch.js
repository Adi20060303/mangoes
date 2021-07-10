
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	
	
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    
	
  
}


function draw() {
	background("white");
  rectMode(CENTER);
  Engine.update(engine);
 
  

  ground.display();
}



