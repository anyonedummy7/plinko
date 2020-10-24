class Plinko{
    constructor(x,y,radius){
        var options={
          isStatic:true
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
       
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}