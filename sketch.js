const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;
var bars=[];
var barsHeight=300; 
var plinko=[];
//var plinko2=[];
var particles=[];




function setup() {
  createCanvas(800,480);
  engine = Engine.create();
    world = engine.world;

    ground=new Ground(width/2,height-10,width,10);
    ground2= new Ground(width,height/2,10,height)
    ground3= new Ground(0,height/2,10,height)
    ground4=new Ground(width/2,0,width,10);
    for(var k=0;k<=width;k=k+80){
      bars.push(new Bars(k,(height-barsHeight/2)+40,10,barsHeight-100))
    }
    
    for(var p=40;p<=width;p=p+50){
      plinko.push(new Plinko(p,50,10));
    }
    
    for(var j=15;j<=width;j=j+50){
      plinko.push(new Plinko(j,110,10));
    }
    for(var i = 30;i<=width;i=i+50){
    plinko.push(new Plinko(i,175,10));
    }
}

function draw() {
  background(0);  
  Engine.update(engine)

  for(var p=0;p<plinko.length;p=p+1){
    plinko[p].display();
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-60,width/2+60),10,10));
  }

  for(var k=0;k<bars.length;k=k+1){
    bars[k].display();
  }
 

  for(var j=0;j<particles.length;j=j+1){
    particles[j].display();
  }
  ground.display();
  ground2.display();
  ground3.display()
  ground4.display()
}