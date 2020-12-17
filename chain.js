class chain {
    constructor(bodyA,bodyB)
    {
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1.4,
        }
           
    
     this.Chain=Constraint.create(options);
     World.add(world,Chain);
    }
    display(){

    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    line(pointA.x,pointA.y, pointB.x,pointB.y);
}
}