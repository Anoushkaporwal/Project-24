class Paper  {
    constructor(x,y){
        var options={
            isStatic:true,
            resitution:0.8,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
    }
    
    display(){
        var pos =this.body.position;
        fill("pink");
        ellipse(pos.x, pos.y, 40,40);
      }
}

