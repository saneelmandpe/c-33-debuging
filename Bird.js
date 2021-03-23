class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,75,50);
    this.image = loadImage("sprites/owl.png");

    this.trajectoryPath=[]//creating an empty array
    this.smokeImage= loadImage("sprites/smoke.png");
  }
  display() {
    push();//start
    super.display();
      if (this.body.position.x > 220 && this.body.speed > 10) {
          var positionArray = [this.body.position.x, this.body.position.y];
          this.trajectoryPath.push(positionArray);
      }
//if the bird is offsling , then the trajectory path will be created as per the x and y position of the bird.
      if(gameState===OFFSLING){
      for (var i = 0; i < this.trajectoryPath.length;  i++) {
         var item = this.trajectoryPath[i];
        image(this.smokeImage,item[0],item[1]);
      } 
      pop();//end
    }
  }
  //clearing the trajectory path
    clearTrajectoryPath(){
      this.trajectoryPath=[]
    }
  }