class Slingshot{
    constructor(constraint1,point){
        var options={
            bodyA:constraint1.body,
            pointB:point,
            stiffness:0.04,
            length:10
        }   
        this.body=constraint1.body;
        this.point=point;
        this.slingshot=constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        
        if(this.slingshot.bodyA!=null){
            var pointA=this.slingshot.bodyA.position;
            var  pointB=this.point;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

     fly(){
        this.slingshot.bodyA=null;
    }

    }
    