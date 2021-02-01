class fun{
    constructor(x,y){
      var options ={
          'density' : 2,
         'restitution' : 3
      }

      this.image = loadImage("ima/fun.png");
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world,this.body);

    }
    
  //😣😣😣

  display(){
    var angle = this.body.angle;
    
    this.body.position.x = mouseX
    this.body.position.y = mouseY
    push();
    translate(this.body.position.x, this.body.position.y);
   
    rotate(angle);

    imageMode(CENTER);
    image(this.image, mouseY, mouseX, this.width, this.height);
    pop();
  }
}



