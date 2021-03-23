var score=0;
class Rat extends BaseClass {
  constructor(x, y){
    super(x,y,100,50);
    this.image = loadImage("sprites/rat.png");
    this.visibility=255;
  }
    display() {
        push()
        fill("white");
        textSize(20);
        text('Score = ' + score,  1000,100);
        if(this.body.speed>3){
        Matter.World.remove(world,this.body);
        
        tint(255,this.visibility);//adding visibility effect to the pig.
        this.visibility=this.visibility-5;
        image(this.image, this.body.position.x, this.body.position.y,50,50);
     
        }else{ 
        super.display();
        }
                pop()
}
    score(){//adding score to the game.
        if(this.visibility===0){
        score=score+100;
        }
    }
  }
  
    
