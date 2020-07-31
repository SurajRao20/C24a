const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1530, 730);


	engine = Engine.create();
	world = engine.world;

	paperBall = new Ball(100,600,50)
	World.add(world,paperBall);

	ground = new Ground(1000,730,2000,40,{isStatic:true})
	World.add(world,ground);

	trash1 = new Box(1220, 615, 20,150,{isStatic:true},{friction:5})
	trash2 = new Box(1040, 615, 20,150,{isStatic:true},{friction:5})
	trash3 = new Box1(1130, 700, 400,20,{isStatic:true},{friction:5})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  drawSprites();

  paperBall.display();
  ground.display();

  trash1.display();
  trash2.display();
  trash3.display();

 
}

function keyPressed() {
		if (keyCode === UP_ARROW) {
			
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:15,y:-25});

		}
}



