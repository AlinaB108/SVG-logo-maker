const {Circle, Square, Triangle} = require("./lib/shapes");

class SVG {
  constructor () {
    // this.shape = shape;
    // this.shapecolor = shapecolor;
    this.textElement = ''
    this.shapeElement = ''
  }

  render() {
    //Write an error
    throw new Error ('');
  }

  renderSVG() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
    </svg>
    `
  }
}

module.exports = SVG;