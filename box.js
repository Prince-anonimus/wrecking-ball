class Box {
    constructor(x,y,width,height) {
        var options ={
            restitution: 0.4,
            friction: 2.5,
            density: 0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display() {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER) 
        fill("white")
        strokeWeight(4)
        stroke("green")
        rect(0,0,this.width,this.height)
        pop()
    }
}