var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var package_options ={
		restitution : 0.4
	}

	packageSprite=createSprite(width/2, 80, 10,10, package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//rect1 = new RectSide(175,635);
	rect2 = new RectSide(225,635);
	//rect3 = new RectFloor(200,630);

	/*if(ifTouch(packageBody, rect3)){
		body.restitution(packageBody, 0);
	}*/

	Engine.run(engine);
  
}

function draw() {
	Engine.update(engine);
  	rectMode(CENTER);
  	background(0);
  	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
  	drawSprites();
  	rect1.display();
  	rect2.display();
  	rect3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);
 }
}



