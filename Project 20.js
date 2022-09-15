
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2,
	 }

	 groundObj = new Ground(width/2,627,width,20);
	 leftSide = new Ground(750,575,20,120);
	 rightSide = new Ground(1100,575,20,120)
	ball1=Bodies.circle(200,20,20,ball_options);
	World.add(world,ball1);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
 push()
 fill("orange") 
  ellipse(ball1.position.x,ball1.position.y,20,20);
  pop()

 

  
  drawSprites();
 
}


function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1,ball1.position,{x:57,y:-70})
	}

  }

  
