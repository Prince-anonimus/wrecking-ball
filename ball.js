class Ball {
    constructor(x,y,radius) {
        var options ={
            frictionAir: 0.007,
            density: 1
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius

        World.add(world,this.body)
    }
    display() {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS) 
        fill("red")
      
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}