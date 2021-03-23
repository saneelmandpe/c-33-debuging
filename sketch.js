const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var pig1,pig2,pig3;

var backgroundImg1,backgroundImg2,platform;

var constraint= Matter.Constraint;

var slingshot;

var  ONSLING=0;
var OFFSLING=1;
var gameState=ONSLING;

var URL="http://worldtimeapi.org/api/timezone/Asia/Kolkata";


function preload() {
    backgroundImg1 = loadImage("sprites/bg2.jpg");//adding Image to the background
    backgroundImg2 = loadImage("sprites/bg.jpg");//adding Image to the background

}

function setup(){

 var canvas = createCanvas(1200,400);//creating the canvas
    engine = Engine.create();
    world = engine.world;

//creating the ground
    ground = new Ground(600,height,1200,20);
//creating the platform
    platform = new Ground(150, 305, 300, 170);
//creating the boxes
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(700,160,70,70);
    box6 = new Box(920,160,70,70);
//creating the logs
    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    //creating the rats
    rat2 = new Rat(810, 220);
    rat1 = new Rat(810, 350);
//creating the bird
    bird = new Bird(100,100);
    var point={
        x:200,
        y:100
    }
//creating the slingshot
    slingshot = new Slingshot(bird,point);
//creating the moon
    roof=new Roof(1150,50,100,50);

}
function draw(){
    background(backgroundImg1);
    Engine.update(engine);

 //displaying the boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
//displaying the ground
    ground.display();
//displaying the logs
    log1.display();
    log2.display();
//displaying the bird
    bird.display();
//displaying the platform
    platform.display();
 //displaying the slingshot
    slingshot.display();
//displaying the cherries and their score
   rat1.display();
   rat1.score();
   rat2.display();
   rat2.score();
//displaying the moon
   roof.display();
}
//added function to drag the bird
function mouseDragged(){
if(gameState===ONSLING){
    var mousePosition={
        x:mouseX,
        y:mouseY,
   }
   Matter.Body.setPosition(bird.body,mousePosition);
}
}
//added function to release the bird
function mouseReleased(){
    slingshot.fly();
gameState=OFFSLING;
}
function keyPressed(){
    if(keyCode===32){//keycode[ascii] value of space is 32;
         slingshot.attatched(bird.body);
         bird.clearTrajectoryPath();//clearing the trajectory path.
         Matter.Body.setAngle(bird.body,0);
         Matter.Body.setPosition
         (bird.body,//setting the birds position on the slingshot once the space bar is pressed;
            {
             x:200,
             y:50  
         } 
         )
    }
}

