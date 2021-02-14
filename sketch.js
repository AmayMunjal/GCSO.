var car,wall,speed,weight
function setup() {
  createCanvas(1600,400);
  console.log("hello")
  speed = random(500,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,100)
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  if (wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509
    if (deformation>180){
      car.shapeColor = "red"
    }
    if (deformation<180 && deformation > 100){
      car.shapeColor = color(230,230,0)
    }
    if (deformation<100 ){
      car.shapeColor = color(0,255,0)
    }
text("deformation: "+deformation, 500,100)
  }

  drawSprites();
}