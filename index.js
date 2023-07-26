const fs = require('fs');
const inquirer = require('inquirer');

// const generateHTML = ({}) =>
//Decide if index.html needed
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="150" cy="100" r="80" fill="green" />
//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
//   </svg>
// </body>
// </html>
// `;

const generateSVG = ({}) =>


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
  // .then((answers) => {
  //   const htmlPageContent = generateHTML(answers);

  //   fs.writeFile('index.html', htmlPageContent, (err) =>
  //     err ? console.log(err) : console.log('Successfully created HTML with a SVG logo!')
  //   );
  // });

  .then((answers) => {
    const svgLogo = generateLogo(answers);

    fs.writeFile('logo.svg', svgLogo, (err) =>
      err ? console.log(err) : console.log('Successfully created SVG logo!')
    );
  });