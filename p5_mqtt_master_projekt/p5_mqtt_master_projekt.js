var alpha;
let isMouseClicked = false;

let targetX, targetY;
let duckimage;
let crosshair;
let duck_x = 500;
let duck_y = 400;
let duckSize = 120;
let duck_shot = false;

function preload() {
  duckimage = loadImage("images/ducktrans-removebg-preview.png")
  dedDuckimage = loadImage("images/christmas_duck.png")
  crosshair = loadImage("images/crosshair.svg");
  
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  setNewTarget();
  background ("Black");
}

function draw() {
    background("black");
    if (duck_shot == false){
        shootChecker();
        moveDuck();
        image(duckimage, duck_x, duck_y, duckSize, duckSize);
    }
    else {
      fill(255, 255, 0);
      textSize(32);
      text("DUCK DEAD", width/2, height/2);
      moveDuck();
      image(dedDuckimage, duck_x, duck_y, duckSize, duckSize);
    }

    mouse_x_coord = floor(mouseX);
    mouse_y_coord = floor(mouseY);
    drawMouse(shootX, shootY);
    // console.log('Coords:' + shootX + ',' + shootY + " is shot ? " + shot);

}

function fallToGround(){
  targetY = windowHeight - duckSize;  
}

function setNewTarget() {
  targetX = duck_x + random(-200, 200);
  targetY = duck_y + random(-200, 200);

  targetX = constrain(targetX, 0, width - duckSize);
  targetY = constrain(targetY, 0, height - duckSize);
  console.log("new target set");
   if (dist(duck_x, duck_y, targetX, targetY) < 5) {
    setNewTarget();
   }
}

function moveDuck(){
  if (duck_shot == false){
    let easing = 0.05;
    if (duck_shot == false) {
      duck_x += (targetX - duck_x)*easing;
      duck_y += (targetY - duck_y) * easing;
      
    
      if (dist(duck_x, duck_y, targetX, targetY) < 5){
        setNewTarget();
      }
    }
  } else {
    easing = 0.03;
    console.log("Ded duck target " + targetY + " and current duck y " + duck_y);

    if (targetY !== windowHeight - duckSize){
      fallToGround();
    }
    duck_y += (targetY - duck_y) * easing;
  }

}

const threshold = 10;

function touchStarted() {
  setupOrientation(threshold);
}



function drawMouse(x, y) {
  if (isMouseClicked){
      image(crosshair,x,y, 30, 30)
  }
  else {
    image(crosshair,x,y, 30, 30)
  }
}
  

function shootChecker(){
  //let gyr = orientationSensor.get();
  //sender(gyr.alpha, gyr.beta, mouseY);
  if (shot) {
      setTimeout(() => {
      isMouseClicked = false;
    }, 100);
    
    let distance_checker = dist(shootX, shootY, duck_x + duckSize / 2, duck_y + duckSize / 2);
    if (distance_checker < duckSize / 2 ) {
    duck_shot = true
    }
  }
}
