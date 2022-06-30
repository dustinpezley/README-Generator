// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = 
  inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: nameInput => {
      if(nameInput) {
        return true;
      } else {
        console.log('Please enter your name.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Required)',
    validate: githubInput => {
      if(githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your project's title.");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project (your motivation, why you built it, the problem it solves, what you learned, and/or what makes it stand out): (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'featureConfirm',
    message: 'Would you like to list the features included in your project?',
    default: true
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are those features?',
    when: ({featureConfirm}) => {
      if (featureConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'installationConfirm',
    message: 'Does your application require any installation steps to get the development environment running?',
    default: true
  },
  {
    type: 'input',
    name: 'installations',
    message: 'What installation steps are required? (Please be as detailed as necessary)',
    when: ({installationConfirm}) => {
      if (installationConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'collaboratorsConfirm',
    message: 'Did you work with anyone else on this project?',
    default: true
  },
  {
    type: 'input',
    name: 'collaborators',
    message: 'What were their GitHub usernames (separate each with a comma)?',
    when: ({collaboratorsConfirm}) => {
      if (collaboratorsConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'thirdPartyAssetsConfirm',
    message: 'Did you use any third-party assets that require aattribution?',
    default: false
  },
  {
    type: 'input',
    name: 'thirdPartyAssets',
    message: 'Please provide the names of those creators and a link to the asset site formatted as "creator:link" and separated by a comma:',
    when: ({thirdPartyAssetsConfirm}) => {
      if (thirdPartyAssetsConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'tutorialConfirm',
    message: 'Did you use any tutorials while creating this project?',
    default: false
  },
  {
    type: 'input',
    name: 'tutorials',
    message: 'Please provide a link to each of those tutorials separated by a comma:',
    when: ({tutorialConfirm}) => {
      if (tutorialConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'licenseConfirm',
    message: 'Would you like to include a license with your project to let other developers know what they can and cannot do with it? The exclusion of a license can put you at risk if you worked with collaborators.',
    default: true
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license would you like to use (e.g. MIT, Apache, GPL, etc.)?',
    when: ({licenseConfirm}) => {
      if (licenseConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'badgeColor',
    message: 'Please choose a color for your license badge:',
    choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey', 'blueviolet'],
    when: ({licenseConfirm}) => {
      if (licenseConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Please provide instructions on how to use your project:'
  },
  {
    type: 'confirm',
    name: 'screenshotsConfirm',
    message: 'Would you like to include screenshots?',
    default: true
  },
  {
    type: 'input',
    name: 'screenshots',
    message: 'Please provide either the URL or the relative path in your root folder ("./...") for each screenshot separated by a comma:',
    when: ({screenshotsConfirm}) => {
      if (screenshotsConfirm) {
        return true;
      } else {
        return false;
      }
    }
  }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
