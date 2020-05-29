var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(32,50);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,30);
  wall = createSprite(1200,200,60,height/2);

  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = color(255,255,255);
}

function draw() {
  background(0,0,0);

  bullet.velocityX = speed;

  if(stopBullet(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function stopBullet(lbullet,lwall){

  if(lwall.x - lbullet.x < lbullet.width/2 + lwall.width/2){
    return true;
  }

  return false;
}