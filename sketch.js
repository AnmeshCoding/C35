var balloon,database,position;;
var backgroundImg,ballon1,ballon2,ballon3;

function preload() {

backgroundImg = loadImage("pro-C35 images/background.png");
ballon1 = loadImage("pro-C35 images/ballon1.png");
ballon2 = loadImage("pro-C35 images/ballon2.png");
ballon3 = loadImage("pro-C35 images/ballon3.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

  createCanvas(1000,500);
  balloon = createSprite(250,250,10,10);
  
  var balloonPosition = database.ref('balloon/position');
  balloonPosition.on("value",readPosition,showError);
  
  
}

function draw() {
  background(backgroundImg); 
  
  push();
  stroke("wide");
  strokeWeight(4);
  textSize(30);
  text("Use The Arrow keys To Move The Hot Air Balloon", 1, 50);
  pop();


  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y -10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y +10;
}

  drawSprites();
}
function readPosition(data){

  position = data.val();
  console.log(position);
  balloon.x = position.x
  balloon.y = position.y
}



function writePosition(x,y){
  database.ref('balloon/position').set({

  'x':position.x + x,
  'y':position.y + y

  })
}

function showError(){

  console.log("Error");
}
