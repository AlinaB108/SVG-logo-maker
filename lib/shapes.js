class Shapes {
  constructor() {
    this.shapecolor = "";
  }
  setColor(shapecolor) {
    this.shapecolor = shapecolor
  }

}

class Circle extends Shapes {
  render() {
    return `
      <circle cx="150" cy="100" r="80" fill="${shapecolor}"/>
    `
  }
}

class Triangle extends Shapes {
  render() {
    return `
      <polygon points="150, 18 244, 182 56, 182" fill="${shapecolor}"/>
    `
  }
}

class Square extends Shapes {
  render() {
    return `
      <rect x="50" y="20" width="150" fill="${shapecolor}"/>
    `
  }
}

// module.exports = Shapes;
module.exports = {Circle, Triangle, Square};