function setup() {
    createCanvas(600, 400 );
    background("black");
  }
  
  function draw() {
    stroke ("purple")
    fill ("pink");
    
    // console.log(mouseIsPressed);
   
    if (mouseIsPressed) {
    rect (mouseX,mouseY,20,35);
  }
  } 