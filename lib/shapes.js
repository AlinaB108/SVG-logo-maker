class Shapes {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points = "150 0, 300 200, 0 200" fill="${this.color}"/>`
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="50" y="20" width="200" height="200" fill="${this.color}"/>`
  }
}

module.exports = {Circle, Triangle, Square};


