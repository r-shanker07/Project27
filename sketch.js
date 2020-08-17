
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(150,500,100)
	bob2 = new Bob(250,500,100)
	bob3 = new Bob(350,500,100)
	bob4 = new Bob(450,500,100)
	bob5 = new Bob(550,500,100)

	roof1 = new roof(350,100,500,50)

	rope1=new Rope(bob1.body,roof1.body,-200,0)
	rope2=new Rope(bob2.body,roof1.body,-100,0)
	rope3=new Rope(bob3.body,roof1.body,0,0)
	rope4=new Rope(bob4.body,roof1.body,100,0)
	rope5=new Rope(bob5.body,roof1.body,200,0)


	Engine.run(engine);
  
}
function  keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-150})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof1.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}



