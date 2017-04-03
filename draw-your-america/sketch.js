
  var colHeight;
  var colWidth;
  var circWidth;

  var coly;
 
  var redx;
  var redBool;
  var redCol;
  
  var bluex;
  var blueBool;
  var blueCol;
  var blueHover;
  
  var blackx;
  var blackBool;
  var blackCol;
  
  var yelx;
  var yelBool;
  var yelCol;
  
  var whitex;
  var whiteBol;
  var whiteCol;
  
  var canHeight;
  var canWidth;
  
  var paperHeight;
  var paperWidth;
  
  var currentCol;
  
  var selectGrey;
  var hoverGrey;
  var selectColorRing;
  var hoverColorRing;
  
  var backgroundGrey;
 
 function setup() {

    if (window.innerWidth < 600) {
    
    canWidth = window.innerWidth;
    canHeight=canWidth*1.33;
    createCanvas(canWidth, canHeight);
  } else if (window.innerWidth>600) {
    print("kasdkas");
    canWidth=600;
    canHeight=450;
    createCanvas(canWidth, canHeight);
  } 

  
 // colHeight = 50;
 // colWidth=650/4;
  
  circWidth=canWidth*0.08;
  
  coly=canHeight*0.92;
  
  backgroundGrey = color('#ededed');
  
  blackBool=true;
  currentCol = blackCol;
  blackx=canWidth*0.3;
 // blacky=canHeight-colHeight;
  blackCol = color(0,0,0);
   
  redBool = false;
  redCol = color(255,88,64);
  redx = canWidth*0.4;
//  redy = canHeight-colHeight;
  
  yelBool=false;
  yelCol = color(253,233,84);
  yelx = canWidth*0.5;
  //yely=canHeight-colHeight;;
  
  blueBool = false;
  blueCol = color('#5591D3');
  bluex=canWidth*0.6;
  blueHover = false;
  //bluey=canHeight-colHeight;;
  
  whiteBool = false;
  whiteCol = color('fff');
  whitex=canWidth*0.7;
  
  selectGrey = color('#898989');
 
//  hoverGrey = color('#D6D6D6');
  

  
 	//createCanvas(canWidth,canHeight);
 	background(backgroundGrey);
 	fill('#000');
 	noStroke();
 	textSize(18);
  text("Reset", canWidth*0.06, coly+3);
  text ("Done", canWidth*0.855, coly+3);

 	
 	frameRate(500);
 	
 	fill('#fff');
 	rect(15,15,canWidth-33,canHeight-100);
  
  
  fill(0);
  ellipse(blackx, coly, circWidth, circWidth); 
  
  fill(redCol);
  ellipse(redx, coly, circWidth, circWidth); 
  
  fill(yelCol);
  ellipse(yelx, coly, circWidth, circWidth);
  
  fill(blueCol);
  ellipse(bluex, coly, circWidth, circWidth);
  
  fill(whiteCol);
  ellipse(whitex, coly, circWidth, circWidth);
  
  noFill();
  stroke(blackCol);
  //hoverColorRing = new MakeHoverColorRing();
	selectColorRing = new MakeSelectColorRing();
	strokeWeight(10)
	
}


function draw(){
  
  
//  hoverColorRing.display();
//bugbug.display();
  selectColorRing.display();
  
  
  onHover();
  cursor(CROSS);
  if (redBool==true) {
    stroke(redCol);
    //print("redbool is true");
  } else if (blueBool==true) {
    stroke (blueCol);
   // print("bluebool is true");
  } else if (blackBool==true) {
    stroke (0);
    //print("blackbool is true");
  } else if (yelBool==true) {
    stroke(yelCol);
    currentCol=yelCol;
  } else if (whiteBool==true) {
    stroke(whiteCol);
    currentCol=whiteCol;
  } else if (mouseOver(15,15,canWidth-30, canHeight-80)==true) {
  stroke(currentColor);
}
}

// painting function
function touchMoved() {
  if (mouseOver(15,15,canWidth-33, canHeight-100)==true) {
    
    // stroke('#898989');
    // strokeWeight(2);
    // noFill();
    // ellipse(50, 50, circWidth+10, circWidth+10);
    
    
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
  } else {
    //do nothing
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


function onHover() {
  
  if (mouseOver(bluex-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth) == true) {
    blueHover=true;
    
  
   // print("blueHover true");
  } else{
    blueHover=false;
  
  //   print("blueHover false");
  }
}




function MakeSelectColorRing() {
  print("makingring");
  this.x=blackx;
  this.y=coly;
  this.color=(selectGrey);
  this.diameter = circWidth+10;
  this.previous_x = blackx;
  this.changeX = function(inputX) {
    strokeWeight(5);
    stroke(backgroundGrey);
    ellipse(this.previous_x, this.y, this.diameter, this.diameter);
    this.x = inputX;
    this.previous_x = inputX;
  }
   this.display = function() {
   	strokeWeight(3);
   	stroke(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  	strokeWeight(10);
  }
  
};



// function MakeHoverColorRing() {
  
//   this.x=-400;
//   this.y=-400;
//   this.color=(hoverGrey);
//       this.display = function() {
// 	strokeWeight(3);
// 	stroke(this.color);
//   ellipse(this.x, this.y, circWidth+10, circWidth+10);
// 	strokeWeight(10);

//   }
  
// };




function mousePressed() {
 
 // print("mouse pressed");
  if (mouseOver(bluex-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth) == true) {
    noStroke();
    blueBool=true;
    redBool = false;
    blackBool=false;
    yelBool=false;
    whiteBool=false;
    selectColorRing.changeX(bluex);
  } else if (mouseOver(redx-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth) == true) {
    noStroke();
    redBool=true;
    blueBool = false;
    blackBool=false;
    yelBool=false;
    whiteBool=false;
    selectColorRing.changeX(redx);
   // selectColorRing.y=300;
  } else if (mouseOver(blackx-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth)==true){
    noStroke();
    blackBool=true;
    blueBool = false;
    redBool=false;
    yelBool=false;
    whiteBool=false;
    selectColorRing.changeX(blackx);

  } else if (mouseOver(yelx-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth)==true){
    noStroke();
    yelBool=true;
    blueBool = false;
    redBool=false;
    blackBool = false;
    whiteBool=false;
    selectColorRing.changeX(yelx);
} else if (mouseOver(whitex-circWidth*0.5, coly-circWidth*0.5, circWidth, circWidth)==true){
    whiteBool=true;
    blueBool = false;
    redBool=false;
    blackBool = false;
    yelBool=false;
    selectColorRing.changeX(whitex);
    //selectColorRing.x=whitex;

} else if (mouseOver(0,canHeight*0.85,150,100)==true){
  print("undo");
  setup();
} else if (mouseOver(canWidth-150,canHeight*0.85,150,100)==true){
  print("done");
}
}


