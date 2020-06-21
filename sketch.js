


var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground;
var divisions=[];
var plinkos=[];
var particles=[];
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20,plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30,plinko31,plinko32,plinko33,plinko34,plinko35,plinko36,plinko37,plinko38,plinko39,plinko40;
var divisionHeight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
  world = engine.world;
  ground=new Ground(250,height,500,20)
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  plinko1=new Plinko(50,50,10)
  plinko2=new Plinko(100,50,10)
  plinko3=new Plinko(150,50,10)
  plinko4=new Plinko(200,50,10)
  plinko5=new Plinko(250,50,10)
  plinko6=new Plinko(300,50,10)
  plinko7=new Plinko(350,50,10)
  plinko8=new Plinko(400,50,10)
  plinko9=new Plinko(450,50,10)
  plinko10=new Plinko(500,50,10)
  plinko11=new Plinko(20,150,10)
  plinko12=new Plinko(70,150,10)
  plinko13=new Plinko(120,150,10)
  plinko14=new Plinko(170,150,10)
  plinko15=new Plinko(220,150,10)
  plinko16=new Plinko(270,150,10)
  plinko17=new Plinko(320,150,10)
  plinko18=new Plinko(370,150,10)
  plinko19=new Plinko(420,150,10)
  plinko20=new Plinko(470,150,10)
  plinko21=new Plinko(50,250,10)
  plinko22=new Plinko(100,250,10)
  plinko23=new Plinko(150,250,10)
  plinko24=new Plinko(200,250,10)
  plinko25=new Plinko(250,250,10)
  plinko26=new Plinko(300,250,10)
  plinko27=new Plinko(350,250,10)
  plinko28=new Plinko(400,250,10)
  plinko29=new Plinko(450,250,10)
  plinko30=new Plinko(500,250,10)
  plinko31=new Plinko(20,350,10)
  plinko32=new Plinko(70,350,10)
  plinko33=new Plinko(120,350,10)
  plinko34=new Plinko(170,350,10)
  plinko35=new Plinko(220,350,10)
  plinko36=new Plinko(270,350,10)
  plinko37=new Plinko(320,350,10)
  plinko38=new Plinko(370,350,10)
  plinko39=new Plinko(420,350,10)
  plinko40=new Plinko(470,350,10)
  
  
 
 // for(var j=40;j=width;j=j+50){
   // plinkos.push(new Plinko(j,75));
//  }
  Engine.run(engine)
}
function draw() {
  Engine.update(engine)
  background(0);  
  ground.display();
 for(var k=0;k<divisions.length;k++){
   divisions[k].display();
 }
 for(var j=0;j<particles.length;j++){
  particles[j].display();
}
 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
 plinko9.display();
 plinko10.display();
 plinko11.display();
 plinko13.display();
 plinko14.display();
 plinko15.display();
 plinko16.display();
 plinko17.display();
 plinko18.display();
 plinko19.display();
 plinko20.display();
 plinko12.display();
 plinko21.display();
 plinko22.display();
 plinko23.display();
 plinko24.display();
 plinko25.display();
 plinko26.display();
 plinko27.display();
 plinko28.display();
 plinko29.display();
 plinko30.display();
 plinko31.display();
 plinko32.display();
 plinko33.display();
 plinko34.display();
 plinko35.display();
 plinko36.display();
 plinko37.display();
 plinko38.display();
 plinko39.display();
 plinko40.display();
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
 

 
  drawSprites();
}
