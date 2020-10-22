// dependencies
const inquirer = require('inquirer');

// array of questions for user
const questions = [
  'What is your project title?',
  'What is your project about?',
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  for (var i = 0; i < questions.length; i++) {
    inquirer.prompt({
      message: questions[i],
      name: 'answer',
    });
  }
}

// function call to initialize program
init();
