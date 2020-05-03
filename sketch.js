
let xR, yR, angR = 0;
let xG, yG, angG = 0;
let xB, yB, angB = 0;
let scalar = 100;
let CANVAS_X = 500, CANVAS_Y = 500;
let TAM = 150;

function setup() {
  
  createCanvas(CANVAS_X, CANVAS_Y);
  xR = 150, yR = 200;
  xG = 150, yG = 200;
  xB = 150, yB = 200;
  
  background(0);
    
}

function draw() {
  clear(); // Borra el buffer
  blendMode(LIGHTEST);
  
  background(0);
  /************************************/
  //Rojo
  /************************************/
  let anguloR = radians(angR);
  xR = 200 - scalar * cos(anguloR);
  yR = 250 + scalar * cos(anguloR);
  
  noStroke();
  fill(255, 0, 0);
  circle(xR, yR, TAM);
       
  /************************************/
  //Verde
  /************************************/
  let anguloG = radians(angG);
  xG = 250;// - scalar * cos(anguloG);
  yG = 210 + scalar * cos(anguloG);
  
  noStroke();
  fill(0, 255, 0);
  circle(xG, yG, TAM);
  
  /************************************/
  //Azul
  /************************************/
  let anguloB= radians(angB);
  xB = 300 + scalar * cos(anguloB);
  yB = 250 + scalar * cos(anguloB);
  
  noStroke();
  fill(0, 0, 255);
  circle(xB, yB, TAM);
  
  
  angR += 2;
  angG += 2;
  angB += 2;
 
}