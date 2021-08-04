class CannonBall {
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
            isStatic: true
        }
        this.r = 40
        this.body = Bodies.circle(x,y,this.r,options)
        this.image = loadImage("assets/canonball.png")
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
        
    }
}
