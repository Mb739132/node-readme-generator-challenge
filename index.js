// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  // Add more questions for description, installation, usage, etc.
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },

  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
  },
  
  // ... other questions ...
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },

  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`${fileName} successfully generated!`);
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const generatedMarkdown = generateMarkdown(userResponses);

    // Call function to write the generated markdown to a README file
    console.log(generatedMarkdown);
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

// Function call to initialize app
init();
