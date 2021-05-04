class Ground {
    constructor(x,y,width,height) {

    var  options = {
      isStatic: false,
        "restitution":0,
        "friction":1,
        "density":0.1
    }   
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
   
        World.add(World, this.body)

       display()
       {
         rectMode(CENTER);
        
         fill (255);
        
         rect(this.body.position.x,this.body.position.y,this.width, this. height);
        }
    }
}