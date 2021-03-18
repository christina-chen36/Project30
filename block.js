class Block {
  constructor(x, y, width, height, color) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: false,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    this.visibility = 255;

    World.add(world, this.body);
  }

  display() {
    if (this.body.speed < 3) {
      var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      this.fillColor(this.visibility);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      translate(this.body.position.x, this.body.position.y);
      this.visibility = this.visibility - 5;
      this.fillColor(this.visibility);
      if (this.visibility > 0) {
        rect(0, 0, this.width, this.height);
      }

      pop();
    }
  }

  fillColor(visibility) {
    switch (this.color) {
      case "yellow":
        fill(255, 204, 0, visibility);
        break;
      case "blue":
        fill(255, 204, 100, visibility);
        break;
      case "pink":
        fill(255, 192, 203, visibility);
        break;
      case "green":
        fill(50, 205, 50, visibility);
        break;
    }
  }
}
