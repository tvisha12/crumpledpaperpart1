class Paper{
    constructor(x,y,radius){
    var options={
        restitution:0.5,
        friction:0.5,
        density:0.8
      
      }
      this.body = Bodies.circle(x, y , radius/2, options);
      this.radius=radius
      World.add(world, this.body);
}
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
}
} 