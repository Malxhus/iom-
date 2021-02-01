const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var mole;
var hole;
var fun1;
var moleIma;
var holeIma;
var funIma;
var backgroundImg;
var deadIma
function preload(){
   
  backgroundImg = loadImage("ima/no.jpg");
    moleIma = loadImage("ima/molu.png");
    holeIma = loadImage("ima/ole.png");
    funIma = loadImage("ima/fun.png");
    deadIma = loadImage("ima/dead.png");
} 

function setup(){
 createCanvas(700,700);
 engine = Engine.create();
 world = engine.world;

  fun1 = new fun(40,40);

  mole = createSprite(350,350,10,10)
  mole.addImage(moleIma);
  mole.scale = 0.1;

  hole = createSprite(100,50,50,50);
  hole.addImage(holeIma);
  hole.scale = 0.1;

}
function draw(){
   background(backgroundImg);
   Engine.update(engine);

   fun1.display();

     drawSprites();
}   


