class Bob{
    constructor(x,y) {
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0,
            density : 0.8,
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 30;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        strokeWeight(3);
        stroke(5);
        ellipseMode(CENTER);
        fill(193,27,102);
        ellipse(pos.x,pos.y,60,60);
    }
}