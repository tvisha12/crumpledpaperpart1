class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
        
        }

        this.Dustbin1=Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.Dustbin1);
}
    display(){
    var pos =this.Dustbin1.position;
    push();
    //translate(pos.x, pos.y);
    //rotate(this.angle);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
}