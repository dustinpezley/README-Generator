// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (questions.licenseConfirm) {
    let badgeURL = 'https://img.shields.io/badge/License-'+license.value+'-'+questions.badgeColor.value;
    return badgeURL;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.value === 'MIT') {
    let licenseLink = 'https://opensource.org/licenses/MIT';
    return licenseLink;
  } else if (license.value === 'Apache') {
    let licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
    return licenseLink;
  } else if (license.value === 'GNU') {
    let licenseLink = 'https://www.gnu.org/licenses/gpl-3.0-standalone.html';
    return licenseLink;
  } else if (license.value === 'ISC') {
    let licenseLink = 'https://opensource.org/licenses/ISC';
    return licenseLink;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = `Licensed under the [${license.value}](${renderLicenseLink}) license.`;
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.collaboratorsConfirm) {
    let collabLinks = data.collaborators.split(',').trim();

    function collabProfiles(username) {
      return 'https://github.com/'+username;
    }

    return creditsText = `
      ## Credits
      ${collabLinks.forEach(collabProfiles)}
      `;
  }


  return `# ${data.title}
    ![License badge](${renderLicenseBadge()})

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    ## Installation
    ${data.installation}

    ## Usage
    ${data.instructions}
    ${data.screenshotsConfirm ? data.screenshots : ''}

    ## License
    ${renderLicenseSection()}

    ## Contributing
    ${data.contributions}

    ## Tests
    ${data.testing}

    ## Questions
    If you have any questions on this application or wish to contribute, please contact me directly at ${data.email}.
    You can view more of my work on my [GitHub profile](https://github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;
