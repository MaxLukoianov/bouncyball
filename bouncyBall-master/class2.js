class Box{
    constructor(x,y,width,height){
        var option = {
            restitution: 1
        }
        this.body = Bodies.rectangle(200,390,200,20,options);
        World.add(world,this.body,option);
    }
    display(){
        var Pos = this.body.position
        fill("black");
        stroke("black");
        rect(Pos.x,Pos.y, 10, 20);
    }
}