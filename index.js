// Fucntion to include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer')

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'gitUser',
    message: 'What is your GitHub Username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license will your project use?',
    choices: ['MIT', 'Apache-2.0', 'GPL 3.0', 'BSD-3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'install',
    message: 'What command be should run to install dependencies?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to test the project?'
  },
  {
    type: 'input',
    name: 'useRepo',
    message: 'What instructions should a user know about using the repository.'
 },
 {
  type: 'input',
  name: 'contributeRepo',
  message: 'What instructions should a user know about contributing to the repository.'
}
];

// Function to write README file
function  writeToFile(fileName, data) {
  answers = generateMarkdown(data);
  // console.log(answers);
  fs.writeFile(fileName, answers, err => {
      if (err){
          console.log(err);
          return;
      }
      console.log(`
      Readme.md successfully created!
    `);
  });
}

// Function to initialize app
function init() {
  console.log(`
     Please answer the following question to generate yout README file
  `);
  return inquirer.prompt(questions)
      .then(answersData =>{
          writeToFile('./output/README.md', answersData);
      }).catch(err => {
          console.log(err);
      });
}

// Function call to initialize app
init();
