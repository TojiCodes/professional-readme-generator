// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'projectTitle',
    message: 'What is your Project Title?',
    },

    {
    type: 'input',
    name: 'description',
    message: 'Give a description of your project?',
    },

    {
    type: 'input',
    name: 'installation',
    message: 'Enter instructions for installation',
    },

    {
    type: 'input',
    name: 'usage',
    message: 'Describe application usage instructions',
    },
    
    {
    type: 'input',
    name: 'contributing',
    message: 'Describe contribution instructions for users',
    },

    {
    type: 'input',
    name: 'tests',
    message: 'Enter instructions for testing of the application',
    },

    {
    type: 'input',
    name: 'license',
    message: 'MIT',
    },
    
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter Username for Github',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.error(err);
        } else {
        console.log(`README file '${fileName}' created successfully!`);
        }
    });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
    }

// Function call to initialize app
init();
