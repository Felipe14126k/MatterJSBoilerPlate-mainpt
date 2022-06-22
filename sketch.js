const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground
var ball
var ground1
var ground2

function preload() {

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world; 

	var ground_options ={
		isStatic: true
	  };
	 
   
	 ground = Bodies.rectangle(299,711,1000,10,ground_options);
	 World.add(world,ground);
	
	var ball_options = {
		resititution :0.5,
		friction:0.05,
		frictionAir:0
	}
	
	var ground1_options = {
		resititution :0.7,
		friction:0.01,
		frictionAir:0.1
	}

	//var ground2_options = {
		//resititution :0.1,
		//friction:1,
		//frictionAir:0.3
	//}
	
	ball = Bodies.circle(220,10,10,ball_options);
	World.add(world,ball);

    ground1 = Bodies.rect(110,50,10,10);
	 World.add(world,ground1);

	// block3 = Bodies.rectangle(350,50,10,10);
	// World.add(world,block3);

	rectMode(CENTER)
	ellipseMode(RADIUS)
}


function draw() {
	rectMode(CENTER);
	background('LIGHTGREEN');

	drawSprites();

	Engine.update(engine)

	ellipse(ball.position.x,ball.position.y,20);
	rect(ground.position.x,ground.position.y,1000,20);	 
}



