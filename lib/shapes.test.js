const {Circle, Triangle, Square} = require("./shapes.js");

describe ('Shapes', () => {
  describe('Circle', () => {
    test('should render a lightskyblue color circle', () => {
      const shape = new Circle();
      shape.setColor("lightskyblue");
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="lightskyblue"/>`);
    })
  })

describe('Triangle', () => {
    test('should render lightpink color triangle', () => {
      const shape = new Triangle();
      shape.setColor("lightpink");
      expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="lightpink"/>`);
    })
  })

describe('Square', () => {
    test('should render palegreen color square', () => {
      const shape = new Square();
      shape.setColor("palegreen");
      expect(shape.render()).toEqual(`<rect x="50" y="20" width="150" fill="palegreen"/>`);
    })
  })
})
