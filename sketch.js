const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

var constraint= Matter.Constraint;

var slingshot;

var  ONSLING=0;
var OFFSLING=1;
var gameState=ONSLING;

var bgNight

var URL="http://worldtimeapi.org/api/timezone/Asia/Kolkata";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    bgNight = loadImage("sprites/bg2.jpg");
}

function setup(){
    var simpleArray=[1,2,3,4]
    var complicatedArray=[[1,2],[3,4],[5,6]]
    var item=complicatedArray[0]//[1,2]
    console.log(item[0]);
 var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
     
    var point={
        x:200,
        y:100
    }
    slingshot = new Slingshot(bird,point);
    
    getTime();

}

function draw(){
    //background(backgroundImg);
    Engine.update(engine);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();

    
 
    slingshot.display();   
}
function mouseDragged(){
console.log("I am being Dragged");
if(gameState===ONSLING){
    var mousePosition={
        x:mouseX,
        y:mouseY,
   }
   Matter.Body.setPosition(bird.body,mousePosition);
}
}
function mouseReleased(){
    console.log("I am released");
    slingshot.fly();
gameState=OFFSLING;
}
function keyPressed(){
    if(keyCode===32){
        console.log("pressed space");//ascii value of space is 32;
         slingshot.attatched(bird.body);
    }
}
async function getTime(){
    var response=await fetch(URL)
    //console.log(response);
    var responseJSON=await response.json()
    //console.log(responseJSON);
    var datetime = responseJSON.datetime;
    //console.log(datetime);
    var hour = datetime.slice(11, 13);
    console.log('hour is ' +hour);
    if(hour>18){
        background(bgNight);
    }else{
        background(backgroundImg);
    }
}