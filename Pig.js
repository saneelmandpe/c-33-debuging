var score=0;
class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;// 1111111[1 bit]
  }
    display() {
        push();
        fill('whi')
        textSize(20);
          text('Score = ' + score,  750,  60);
        if(this.body.speed>3){
        Matter.World.remove(world,this.body);
        
        tint(255,this.visibility);
        this.visibility=this.visibility-1;
        image(this.image, this.body.position.x, this.body.position.y,50,50);
     
        }else{ 
        super.display();
        //console.log(this.body.speed);
        }
                pop();

}
    score(){
        if(this.visibility===0){
        score=score+1;//score=score++;
        }
    }
}
