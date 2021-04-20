
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;



function setup() {
	createCanvas(1200,1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(300,500);
    bob2 = new Bob(360,500);
  bob3 = new Bob(420,500);
  bob4 = new Bob(480,500);
  bob5 = new Bob(540,500);
  
  roof = new Roof(420,200,400,100);
  
  rope1 = new Rope(bob1.body,roof.body,-120,0);
  rope2 = new Rope(bob2.body,roof.body,-60,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,60,0);
  rope5 = new Rope(bob5.body,roof.body,120,0);  
  Engine.run(engine);



}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed() {
 if(  keyCode === UP_ARROW) {
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
  }
}

