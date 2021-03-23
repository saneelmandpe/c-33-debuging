class Slingshot{
    constructor(constraint1,point){
        var options={
            bodyA:constraint1.body,
            pointB:point,
            stiffness:0.04,
            length:10
        }   
        this.sling1=loadImage("sprites/sling1.png");//adding image to create the  slingshot
        this.sling2=loadImage("sprites/sling2.png");//adding image to create the  slingshot
        this.sling3=loadImage("sprites/sling3.png");//adding image to create the  slingshot
        this.body=constraint1.body;
        this.point=point;
        this.slingshot=constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        push();
        if  (this.slingshot.bodyA  !=  null)  {
            var pointA  =  this.slingshot.bodyA.position;
            var pointB  =  this.point;
            strokeWeight(4);
            stroke(48,  22,  8);
            if  (pointA.x  <  220)  {
                line(pointA.x  -  20,  pointA.y,  pointB.x  -  10,  pointB.y);
                line(pointA.x  -  20,  pointA.y,  pointB.x  +  30,  pointB.y  -  3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }  else  {
                line(pointA.x  +  25,  pointA.y,  pointB.x  -  10,  pointB.y);
                line(pointA.x  +  25,  pointA.y,  pointB.x  +  30,  pointB.y  -  3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
        }
        
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //image(this.sling3,50,20);
        pop()
    }

     fly(){
        this.slingshot.bodyA=null;
    }
      attatched(body){   
            this.slingshot.bodyA=body;
            gameState=ONSLING;
}
    }
