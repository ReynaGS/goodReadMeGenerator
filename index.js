// dependencies
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'What is your project title? \n',
  },

  {
    name: 'description',
    type: 'input',
    message: 'What is your project about? \n',
  },
  {
    name: 'instalation',
    type: 'input',
    message: 'How can your program be installed?',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'How can your program be used?',
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'What are your contributions?',
  },
  {
    name: 'instructions',
    type: 'input',
    message: 'Please input your instructions',
  },
  {
    name: 'license',
    type: 'list',
    message: 'Please specify your license?',
    choices: ['public domain', 'bcd', 'gpl', 'apache', 'N/A'],
  },
  {
    name: 'gitHubUser',
    type: 'input',
    message: 'What is your gitHub Username?',
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is your email address?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) throw err;
    console.log('Success');
  });
}

// function to initialize program
function init() {
  // inquirer to prompt user for answers.This is a promise function,waiting
  // for an action to be done by the user in a given time in the future.
  inquirer.prompt(questions).then(function (answer) {
    console.log(answer);
    var finalReadMe = generateMarkdown(answer);
    console.log(finalReadMe);
    writeToFile('myNewReadMe.md', finalReadMe);
  });
}

// function call to initialize program
init();
