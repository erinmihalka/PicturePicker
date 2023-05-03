//this code will display a different image when you press the arrow keys

var img;
var gma, slug, rain, ice;


function preload() {
  gma = loadImage("grandma gun.jpeg");
  slug = loadImage("slug.jpeg");
  snoopy = loadImage("snoop and wood.jpeg");
  ice = loadImage("icecream sundae.jpeg");
  
  img = snoopy;
}

function setup() {
  createCanvas(400, 400);
  background(193, 225, 150);
}

function draw() {
  image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN, LEFT);
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    img = gma;
  }
  if (keyCode === UP_ARROW) {
    img = slug;
  }
  if (keyCode === DOWN_ARROW) {
    img = snoopy;
  }
  if (keyCode === RIGHT_ARROW) {
    img = ice;
  }
}

