const inquirer = require('inquirer');
const fs = require('fs');
// Need const shapes or not
const shapes = require('./lib/shapes.js');

const generateSVG = ({ text, textcolor, shapecolor })=>
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shapes} fill="${shapecolor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
  </svg>
`;

inquirer
.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters (using uppercase).',
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
    name: 'shapecolor',
    message: 'Please enter a color keyword (OR a hexadecimal number) for the color of shape.',
  },
])

.then((answers) => {
  const svgLogo = generateSVG(answers);

  fs.writeFile('./lib/logo.svg', svgLogo, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG logo!')
  );
});