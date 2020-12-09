const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,object,ball;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }

ball=Bodies.circle(200,370,80);
World.add(world,ball);

  object=Bodies.rectangle(10,390,790,30,options);
  World.add(world,object);
  console.log(object);
}

function draw() {
  background("cyan");
  Engine.update(engine);  
  rect(object.position.x,object.position.y,790,30);
  circle(ball.position.x,ball.position.y,60,60);
}