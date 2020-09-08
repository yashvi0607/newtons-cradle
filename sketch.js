const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:0.2
	}
ls = createSprite(250,620,10,80);
ls.shapeColor = "red";
rs = createSprite(450,620,10,80);
rs.shapeColor = "red";
bs= createSprite(350,655,190,10);
bs.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball=	Matter.Bodies.circle(50,655,10);
World.add(world,ball);
 
 ground = Matter.Bodies.rectangle(200,500,20);
 world.add(world,ground);
	Engine.run(engine);
  
}
paper object = new Object;
radius = 70;


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10,10);
  drawSprites();
   
display()
{
	var pointA=this.rope.bodyA.position;
	var pointB= this.rope.bodyB.position;
	strokeweight(2);
	var Anchor1X = pointA.x;
	var Anchor1Y = pointA.y;
	
	var Anchor2X =pointB.x+this.offsetX;
    var Anchor2X =pointB.x+this.offsetY;

	line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}
   

 
}
function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-10});
}
}
constructor(body1,body2,offsetX,offsetY)
{
	var options ={
		bodyA : body1,
		bodyB : body2 
		pointB : {x:this.offsetX,y:this.offsetY}
		
	}
}
this.rope = Constraint.create(options)
World.add(world,this.rope)
}