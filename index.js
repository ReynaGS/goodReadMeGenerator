// dependencies
const inquirer = require('inquirer');

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
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  // for loop to iterate through var question.
  //   for (var i = 0; i < questions.length; i++) {
  //     //inquirer to prompt user for answers.This is a promise function,
  //     //waiting for an action to be done by the user in a given time in the future.
  inquirer.prompt(questions).then(function (answer) {
    console.log(answer);
  });
}

// function call to initialize program
init();
