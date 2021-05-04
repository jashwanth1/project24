
class Paper {
       constructor(x,y,width,height) {
          var options = {
            isStatic: false,
            "restitution":0.5,
            "friction":1,
            "density":0.6
            
        }   
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width;
            this.height = height;
       
            World.add(world, this.body)
      }
           display()
           {
             rectMode(CENTER);
             push()
             translate(this.body.position.x,this.body.position.y)
             rotate(this.body.angle);
             fill ("red");
            
             rect(0,0,this.width,this.height);
            pop()
            }
        
    }