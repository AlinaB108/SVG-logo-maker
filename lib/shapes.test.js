const {Circle, Triangle, Square} = require("./shapes.js");

describe ('Shapes', () => {
  describe('Circle', () => {
    it('should render a lightskyblue color circle', () => {
      const shape = new Circle();
      shape.setColor("lightskyblue");
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="lightskyblue"/>`);
    })
  })

describe('Triangle', () => {
    it('should render lightpink color triangle', () => {
      const shape = new Triangle();
      shape.setColor("lightpink");
      expect(shape.render()).toEqual(`<polygon points = "150 0, 300 200, 0 200" fill="lightpink"/>`);
    })
  })

describe('Square', () => {
    it('should render palegreen color square', () => {
      const shape = new Square();
      shape.setColor("palegreen");
      expect(shape.render()).toEqual(`<rect x="50" y="20" width="200" height="200" fill="palegreen"/>`);
    })
  })
})
