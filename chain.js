class Chain{
constructor(constraint1,constraint2){
    var options={
        bodyA:constraint1.body,
        bodyB:constraint2.body,
        stiffness:0.04,
        length:10
    }   
    var chain=constraint.create(options);
    World.add(world,chain);
}
}