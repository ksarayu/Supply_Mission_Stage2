class RectFloor{
    constructor(x, y){
        var options ={
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, 5, 1, options);
        World.add(world, this.body);
        
        this.width = width;
        this.height = height;
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}