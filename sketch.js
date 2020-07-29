var ball, box1, box2, box3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(200 , 500 , 20 , {restitution:.9, isStatic:false,friction:0.5,density:1.2});
	World.add(world, ball);
console.log(ball.body);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	World.add(world, ground);
	 
	box1 = new Box(1250,580,20,150);
	box2 = new Box(1355,650,200,20);
	box3 = new Box(1450,580,20,150);

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(220);
  drawSprites();
  rect(ground.position.x,ground.position.y,1800,10);
  ellipse(ball.position.x, ball.position.y,50);
  
  box1.display();
  box2.display();
  box3.display();  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,ball.position,{x:85, y:-85});
	}
}

