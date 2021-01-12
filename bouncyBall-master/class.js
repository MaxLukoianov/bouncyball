class Apple{
    constructor(x,y,width,height){
        var options = {
            restitution: 1
        }
        this.body = Bodies.rectangle(200,390,200,20,options);
        World.add(world,this.body);
    }
    display(){
        var Pos = this.body.position
        fill("black");
        stroke("black");
        rect(Pos.x,Pos.y, 20, 10);
    }
}