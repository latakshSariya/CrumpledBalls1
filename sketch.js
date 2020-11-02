
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1 , ground;
var rect1 , rect2 , rect3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper(100 , height/2);
	ground = new Ground;
	rect1 = new Dust(600,555 , 200,20)
	rect2 = new Dust(500 , 515 , 20,100 );
	rect3 = new Dust(700 , 515 ,20 ,100)
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  ground.display()
  drawSprites();
  rect1.display();
  rect2.display();
  rect3.display();


  }

  function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:-320});

	}
	if(keyCode===LEFT_ARROW)	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-320,y:0});

	}
	if(keyCode===RIGHT_ARROW)	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:320,y:0});

	}
	if(keyCode===DOWN_ARROW)	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:320});

	}
}

