var thickness,wall;
var speed, weigth, bullet;

function setup() {
  createCanvas(1200,400);
  speed= random(75,150)
  weigth=random(30,52)
  thickness= random(22,83)
  bullet= createSprite(50, 200, 50, 25);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255)
  wall=createSprite(1000, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background("black");  
  
 
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage = 0.5*weigth*speed*speed/(thickness*thickness*thickness)
    if (damage >10){
      bullet.shapeColor=color(255,0,0)
    }
    if(damage<10){
      bullet.shapeColor=color(230,230,0)
    }
    
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>= wallLeftEdge){
    return true
  }
  return false
}