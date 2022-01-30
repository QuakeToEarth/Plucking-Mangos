class Connection {
  constructor(body1, point2) {
    var options = {
      bodyA: body1,
      pointB: point2,
      length: 40,
      stiffness: 0.04,
    };
    //console.log(options);
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {
    if (this.rope.bodyA != null) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.pointB;

      strokeWeight(2);

      var Anchor1X = pointA.x;
      var Anchor1Y = pointA.y;

      var Anchor2X = pointB.x;
      var Anchor2Y = pointB.y;

      fill("white");
      line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
  }
  breakConnection() {
    this.rope.bodyA = null;
  }
}
