class Paper{
    constructor(x,y){
        var body = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,50 , body);
        this.radius = 50;
        World.add(world , this.body);
    }
    display(){
        rectMode(CENTER);
        fill("red");
        ellipse(this.body.position.x , this.body.position.y , 50,50);
        noFill();

    }
}