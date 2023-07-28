const inquirer = require('inquirer');
const fs = require('fs');

// Imported classes from shapes.js
const {Circle, Triangle, Square} = require('./lib/shapes.js');

let shapeString = '';

const generateSVG = ({ text, textcolor })=>
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeString}
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textcolor}">${text}</text>
</svg>
`;

inquirer
.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters (using uppercase).',
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      } else {
        return 'Please enter no more than 3 characters!';
      }
    },
  },
  {
    type: 'input',
    name: 'textcolor',
    message: 'Please enter a color keyword (OR a hexadecimal number) for the color of text.',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose one of the following shapes',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'color',
    message: 'Please enter a color keyword (OR a hexadecimal number) for the color of shape.',
  },
])

.then((answers) => {

// If statement to add shape properties based on user's input, it passes it to shapeString
if (answers.shape === "circle") {
  shapeChoice = new Circle();
  shapeString += `<circle cx="150" cy="100" r="80" fill="${answers.color}"/>`;
}else if (answers.shape === "triangle") {
  shapeChoice = new Triangle();
  shapeString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.color}"/>`;
}else {
  shapeChoice = new Square();
  shapeString += `<rect x="50" y="20" width="150" fill="${answers.color}"/>`;
}

// Passing text, textcolor, shape and color values directly
const svgLogo = generateSVG({
  text: answers.text,
  textcolor: answers.textcolor,
  shape: shapeString,
  color: answers.color,
});

  fs.writeFile('./lib/logo.svg', svgLogo, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG logo!')
  );
});

