
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin1,dustbin2,dustbin3,ground;
var paperObject;


function setup() {
	createCanvas(900, 700);
    rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	
	paperObject = new Paper(150,670,25);

	groundobject = new Ground(450,680,900,10);

	dustbin1=new Dustbin(750,670,110,20);
	dustbin2=new Dustbin(702,625,20,100);
	dustbin3=new Dustbin(800,625,20,100);

	groundSprite=createSprite(width/2, height=660, width,10);
	groundSprite.shapeColor=color(255);
    
	
	
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  //Ground=Bodies.rectangle();
  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  groundobject.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:17,y:-17});
		
	}
}