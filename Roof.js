class Roof{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
         push();
         strokeWeight(3);
         stroke("silver");
         fill("lightyellow");
         ellipseMode(RADIUS);
         ellipse(this.body.position.x,this.body.position.y,50,50);
         pop();
     }
 }