function preload(){
  pinkIMG = loadImage("pinkB.png");
  orangeIMG = loadImage("orangeB.png");
  yellowIMG = loadImage("yellowB.png");
  backgroundIMG = loadImage("background.jpg");
}

function setup() {
  createCanvas(1360,790);

  P1=new Group();
  for(var i=25;i<400;i=i+50){
    pinkB = createSprite(i,30, 10, 10);
    pinkB.addImage(pinkIMG);
    pinkB.scale = 0.1;
    P1.add(pinkB)
    P1.visible=true;
  }
  O1=new Group();
  for(var i=958;i<1360;i=i+53){
    orangeB = createSprite(i,30, 10, 10);
    orangeB.addImage(orangeIMG);
    orangeB.scale = 0.1;
    O1.add(orangeB)
    O1.visible=true;
  }
  Y1=new Group();
  for(var i=430;i<920;i=i+53){
    yellowB = createSprite(i,30, 10, 10);
    yellowB.addImage(yellowIMG);
    yellowB.scale = 0.05;
    Y1.add(yellowB)
    Y1.visible=true;
  }
  P2=new Group();
  for(var i=958;i<1360;i=i+53){
    pinkB = createSprite(i,85, 10, 10);
    pinkB.addImage(pinkIMG);
    pinkB.scale = 0.1;
    P2.add(pinkB)
    P2.visible=true;
  }
  O2=new Group();
  for(var i=430;i<920;i=i+53){
    orangeB = createSprite(i,85, 10, 10);
    orangeB.addImage(orangeIMG);
    orangeB.scale = 0.1;
    O2.add(yellowB)
    O2.visible=true;
  }
  Y2=new Group();
  for(var i=25;i<400;i=i+50){
    yellowB = createSprite(i,85, 10, 10);
    yellowB.addImage(yellowIMG);
    yellowB.scale = 0.05;
    Y2.add(pinkB)
    Y2.visible=true;
  }
  P3=new Group();
  for(var i=430;i<920;i=i+53){
    pinkB = createSprite(i,140, 10, 10);
    pinkB.addImage(pinkIMG);
    pinkB.scale = 0.1;
    P3.add(pinkB)
    P3.visible=true;
  }
  Y3=new Group();
  for(var i=958;i<1360;i=i+53){
    yellowB = createSprite(i,140, 10, 10);
    yellowB.addImage(yellowIMG);
    yellowB.scale = 0.05;
    Y3.add(yellowB)
    Y3.visible=true;
  }
  O3=new Group();
  for(var i=25;i<400;i=i+50){
    orangeB = createSprite(i,140, 10, 10);
    orangeB.addImage(orangeIMG);
    orangeB.scale = 0.1;
    O3.add(pinkB)
    O3.visible=true;
  }
  rend=Math.round(random(1,3)) ;
    if (rend==1){
      pink = createSprite(680,740, 10, 10);
      pink.scale = 0.1
      pink.addImage(pinkIMG);
    }
    if (rend==2){
      orange = createSprite(680,740, 10, 10);
      orange.scale = 0.1
      orange.addImage(orangeIMG);
    }
    if (rend==3){
      yellow = createSprite(680,740, 10, 10);
      yellow.scale = 0.05
      yellow.addImage(yellowIMG);
    }
}

function draw() {

  
background(backgroundIMG);
if(rend ==1){

  if(keyDown("left")){
    pink.x = pink.x - 5
  }
  if(keyDown("right")){
    pink.x = pink.x + 5
  }
  if(keyDown("up")){
    pink.velocityY = -10
  }
}
if(rend ==2){

  if(keyDown("left")){
    orange.x = orange.x - 5
  }
  if(keyDown("right")){
    orange.x = orange.x + 5
  }
  if(keyDown("up")){
    orange.velocityY = -10
  }
}
if(rend ==3){

  if(keyDown("left")){
    yellow.x = yellow.x - 5
  }
  if(keyDown("right")){
    yellow.x = yellow.x + 5
  }
  if(keyDown("up")){
    yellow.velocityY = -10
  }
}
if(rend ==1){
if(pink.isTouching(P3)){
  P3.destroyEach();
  pink.destroy();
  pink.velocityY=0;
}
if(pink.isTouching(P2)){
  P2.destroyEach();
  pink.destroy();
  pink.velocityY=0;
}
if(pink.isTouching(P1)){
  P1.destroyEach();
  pink.destroy();
  pink.velocityY=0;
}
}
drawSprites();

}

function keyPressed(){
  if(keyCode==32){
    setup();
  }
}



  
