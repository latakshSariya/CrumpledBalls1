class Ground{
    constructor(){
        var body = {
            isStatic:true
       }
       this.body = Bodies.rectangle(width/2 , 590 , 800 , 50 , body);
       this.width = 800;
       this.height = 50;
       World.add(world , this.body);
    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x , this.body.position.y , this.width , this.height)
    }
}