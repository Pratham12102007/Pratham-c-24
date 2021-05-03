const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(400,150,10,10);
    rubber2 = new Rubber(410,153,10,10)
    rubber3 = new Rubber(320,200,10,10)
    rubber4 = new Rubber(430,155,10,10)
  stone = new Stone(900,250,80,50)
    stone2 = new Stone(790,160,80,50)
    iron= new Iron(1000,300,90,40)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    iron.display();
 stone.display();
 stone2.display();
}