var car,wall;
var speed, weight; 
var deformation=0;
var damage=0;
var thickness;
var bullet;

function setup() {
  createCanvas(800, 400);
	speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83);


	car=createSprite(50, 200, 50,50);   
	car.velocityX = speed;
	car.shapeColor="white";

  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor="black";
}


function draw() {
  background("lightblue");

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
	  car.velocityX=0;

	  //formula to calculate damage
	damage= 0.5* bulletWeight* bulletSpeed* bulletSpeed/ thicknessOfwall*thicknessOfwall*thicknessOfwall


	   if(damage > 10) {
     car.shapeColor="red";
     }
	  if( damage < 10){
      car.shapeColor="green"
    
     }
     if (damage=10) {
       car.shapeColor="yellow";
     }









  }  

  drawSprites();
  text("Deformation"+deformation,300,50);
}
