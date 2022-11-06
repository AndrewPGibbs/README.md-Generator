const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


//array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of the project',
  },
  {
    type: 'checkbox',
    name: 'contents',
    message: 'What are the contents you would like to include in this README?',
    choices: ['installation', 'usage', 'license', 'contributors', 'test instructions', ]
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please describe the steps of installing the necessary files',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should this project be used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license should this project use?',
    choices: ['MIT', 'GNU', 'Apache']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'instructions on how to contribute?',
  },
  {
    type: 'input',
    name: 'test_instructions',
    message: 'Steps for testing this project',
  },
];

//a function to write README file
function writeToFile(data) {
  fs.writeFile('NewREADME.md', data, (err) =>
    err ? console.error(err) : console.log('README document saved as NewREADME.md')
    )
}

// a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateMarkdown(answers)));
}

// Function call to initialize app
init();
