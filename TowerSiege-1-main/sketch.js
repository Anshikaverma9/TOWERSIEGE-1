const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var polygon1,polygon1Img;
var box1;
var slingshot;

function preload() {
    polygon1Img = loadImage("polygon.png") ;
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   // create bodies here
    ground = new Ground(600,height,1200,20);
    polygon1 = new Polygon(50,50);
    //polygon1.addImage(polygon1Img);
    stand = new Ground(650,350,300,10);
    // layer1
    box1 = new Box(750,300);
    box2 = new Box(710,300);
    box3 = new Box(670,300);
    box4 = new Box(630,300);
    box5 = new Box(590,300);
    box6 = new Box(550,300); 
    // layer2
    box7 = new Box2(570,250);
    box8 = new Box2(610,250);
    box9 = new Box2(650,250);
    box10 = new Box2(690,250);
    box11 = new Box2(730,250);
    // layer3
    box12 = new Box3(590,200);
    box13 = new Box3(630,200);
    box14 = new Box3(670,200);
    box15 = new Box3(710,200);
    // layer4
    box16 = new Box4(610,150);
    box17 = new Box4(650,150);
    box18 = new Box4(690,150);
    // layer5
    box19 = new Box5(630,100);
    box20 = new Box5(670,100);
    // layer6
    box21 = new Box6(650,50);
}
function draw(){
    background("lightblue");
    Engine.update(engine);
  
   ground.display();
   polygon1.display();
   stand.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


