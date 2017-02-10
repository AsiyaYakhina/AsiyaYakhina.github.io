
  var colHeight;
  var colWidth;
  var circWidth;

  var coly;
 
  var redx;
  var redBool;
  var redCol;
  
  var greenx;
  var greenBool;
  var greenCol;
  
  var blackx;
  var blackBool;
  var blackCol;
  
  var yelx;
  var yelBool;
  var yelCol;
  
  var canHeight;
  var canWidth;
  
  var paperHeight;
  var paperWidth;
  
  var currentCol;
  
 
 function setup() {
  
  canHeight = 450;
  canWidth = 650;
 // colHeight = 50;
 // colWidth=650/4;
  
  circWidth=canWidth*0.08;
  
  coly=canHeight*0.92;
  
  blackBool=true;
  currentCol = blackCol;
  blackx=canWidth*0.35;
 // blacky=canHeight-colHeight;
  blackCol = color(0,0,0);
   
  redBool = false;
  redCol = color(255,88,64);
 redx = canWidth*0.45;
//  redy = canHeight-colHeight;
  
  yelBool=false;
  yelCol = color(253,233,84);
  yelx = canWidth*0.55;
  //yely=canHeight-colHeight;;
  
  greenBool = false;
  greenCol = color('#5591D3');
  greenx=canWidth*0.65;
  //greeny=canHeight-colHeight;;
  

 	createCanvas(canWidth,canHeight);
 	background('#fff');
 	fill('#000');
 	noStroke();
 	textSize(22);
  text("Undo", canWidth*0.07, coly+3);
  text ("Done", canWidth*0.86, coly+3);
 	
 	stroke('#333');
 	line(canWidth*0.02,canHeight-canHeight*0.17,canWidth-canWidth*0.02, canHeight-canHeight*0.17);
 //	rect(15,15,canWidth-30,canHeight-80);
 noStroke();
 	
 	frameRate(200);
  
  fill(0);
  //rect(0,canHeight*0.85,150,100);
  //rect(canWidth-150,canHeight*0.85,150,100);
  ellipse(blackx, coly, circWidth, circWidth); 
  
  fill(redCol);
  ellipse(redx, coly, circWidth, circWidth); 
  
  fill(yelCol);
  ellipse(yelx, coly, circWidth, circWidth);
  
  fill(greenCol);
  ellipse(greenx, coly, circWidth, circWidth);
  
	strokeWeight(10)
	stroke(0);
}

function draw(){
  
  if (redBool==true) {
    stroke(redCol);
    //print("redbool is true");
  } else if (greenBool==true) {
    stroke (greenCol);
   // print("greenbool is true");
  } else if (blackBool==true) {
    stroke (0);
    //print("blackbool is true");
  } else if (yelBool==true) {
    stroke(yelCol);
    currentCol=yelCol;
  } else if (mouseOver(15,15,canWidth-30,canHeight-80)==true) {
  stroke(currentColor);
}
}

// painting function
function touchMoved() {
  if (mouseOver(15,15,canWidth-33,canHeight-100)==true) {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
  } else {
    //do nothing
  }
}



function mousePressed() {
  print("mouse pressed");
  if (mouseOver(greenx-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth) == true) {
    noStroke();
    greenBool=true;
    redBool = false;
    blackBool=false;
    yelBool=false;
  } else if (mouseOver(redx-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth) == true) {
    noStroke();
    redBool=true;
    greenBool = false;
    blackBool=false;
    yelBool=false;
  } else if (mouseOver(blackx-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth)==true){
    noStroke();
    blackBool=true;
    greenBool = false;
    redBool=false;
    yelBool=false;
  } else if (mouseOver(yelx-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth)==true){
    noStroke();
    yelBool=true;
    greenBool = false;
    redBool=false;
    blackBool = false;
} else if (mouseOver(0,canHeight*0.85,150,100)==true){
  print("undo");
  setup();
} else if (mouseOver(canWidth-150,canHeight*0.85,150,100)==true){
  print("done");
}
}

function mouseOver(xloc, yloc, width, height) {
  if (mouseX >= xloc && mouseX <= xloc+width && 
      mouseY >= yloc && mouseY <= yloc+height) {
    return true;
  } else {
    return false;
  }
}







