class Ball{
    constructor(x, y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius =radius;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        strokeWeight(4);
        stroke(192,192,192);
        fill(192,192,192);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}