class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectoryPath=[]
    this.smokeImage= loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    push();
    super.display();
      
     
      if (this.body.position.x > 220 && this.body.speed > 10) {
          var positionArray = [this.body.position.x, this.body.position.y];//[xPosition of bird, yPosition of bird]; = 2 items
          this.trajectoryPath.push(positionArray);//list of arrays = 2D array
      }
      //console.log(this.trajectoryPath);
      for (var i = 0; i < this.trajectoryPath.length;  i++) {
         var item = this.trajectoryPath[i];
        image(this.smokeImage,item[0],item[1]);
      } 
      pop();
    }
    clearTrajectoryPath(){
      this.trajectoryPath=[]
    }
}