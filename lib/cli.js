const inquirer = require('inquirer');
const fs = require('fs');

// const { shapes } = require('./lib/shapes.js');

class CLI {
  constructor() {
    
  }

  generateSVG(answers) {
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapecolor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>
</svg>
`
  }

  run() {
    return inquirer
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
      // console.log(answers);
      //Add more about shapes?
  
      fs.writeFile('logo.svg', svgLogo, (err) =>
        err ? console.log(err) : console.log('Successfully created SVG logo!')
      );
    });
  }
}


  module.exports = CLI;