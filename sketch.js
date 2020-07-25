var ball;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground;
var box;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
	
	ground = new Ground(600,700,1200,20);
	box = new Box(300,500,100,100);
	
	ball = new Ball(25,500,20,20);
	var render = Render.create({ 
	element: document.body, 
	engine: engine, 
	options: { width: 1200, height: 700, wireframes: false } 
	}
	); 
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ball.display();	
  box.display();
  drawSprites();
 
}
function keyPressed()	{
	if	(keyCode === UP_ARROW)	{
		Matter.Body.applyForce(ball.Body,ball.Body.position,{x:320,y:400});
	  }
	 
}


