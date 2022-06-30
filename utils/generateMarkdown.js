// If there is no license, return an empty string
function renderLicenseBadge(licenseConfirm, license, badgeColor) {
  if (licenseConfirm) {
    let badgeURL = 'https://img.shields.io/badge/License-'+license+'-'+badgeColor;
    return badgeURL;
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0-standalone.html';
  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = `Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  return licenseText;
}

// Generates README text.
function generateMarkdown(data) {
  // Generates GitHub link for collaborators (used in forEach below)
  function collabProfiles(item) {
    return '['+item+']{https://github.com/'+item+')  ';
  };

  // Generates tutorial links (used in forEach below)
  function tutorials(item) {
    return '['+item+']('+item+')  ';
  };

  function thirdPartyObject(string){
    let thirdParty={}, re = new RegExp('(.*?):(.*?)(?:,|$)','g');

    string.replace(re, (_, key, value) => thirdParty[key.trim()] = value.trim())

    return thirdParty;
  }

  // Splits separate collaborators into array based on comma delimiter
  if (data.collaboratorsConfirm) {
    const collabLinks = data.collaborators.split(',').trim();

    return collabLinks;
  }

  // Splits separate tutorials into array based on comma delimiter
  if (data.tutorialConfirm) {
    let tutorialLinks = data.tutorials.split(',').trim();

    return tutorialLinks;
  }

  // Converts thirdPartyAssets string to object. Keys and values used below.
  if(data.thirdPartyAssetsConfirm) {
    const answerString = data.thirdPartyAssets;

    thirdPartyObject(answerString);
  }

  // Main README text.
  return `# ${data.title}
    ![License badge](${renderLicenseBadge(data.licenseConfirm, data.license, data.badgeColor)})

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
    ${data.installations}

    ## Usage
    ${data.instructions}
    ${data.screenshotsConfirm ? data.screenshots : ''}

    ${data.collaboratorsConfirm ? '## Credits  ' : data.thirdPartyAssetsConfirm ? '## Credits  ' : data.tutorialConfirm ? '## Credits  ' : ''}
    ${data.collaboratorsConfirm ? 'This project was produced as a collaborative effort between myself and the following:  ' : ''}
    ${data.collaboratorsConfirm ? collablinks.forEach(collabProfiles) : ''}
    ${data.thirdPartyAssetsConfirm ? thirdParty.keys().forEach(key+' '+'['+thirdParty[key]+']('+thirdParty[key]+')  ') : ''}
    ${data.tutorialConfirm ? tutorialLinks.forEach(tutorials) : ''}

    ## License
    ${renderLicenseSection(data.license)}

    ${data.featureConfirm ? '## Features  ' : ''}
    ${data.featureConfirm ? data.features : ''}

    ## Contributing
    ${data.contributions}

    ## Tests
    ${data.testing}

    ## Questions
    If you have any questions on this application or wish to contribute, please contact me directly at ${data.email}.
    You can view more of my work on my [GitHub profile](https://github.com/${data.github}).
  `;
}

module.exports = generateMarkdown;
