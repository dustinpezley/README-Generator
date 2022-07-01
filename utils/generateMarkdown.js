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
  // set variables for later use.
  var thirdParty = {};
  var collabLinksTrim = [];
  var tutorialLinksTrim = [];

  // Generates GitHub link for collaborators
  function collabProfiles(array) {
    for(var i=0;i<array.length;i++) {
      array[i] = '['+array[i]+']{https://github.com/'+array[i]+')';
    }
    return array.join('  ');
  };


  // Generates tutorial links
  function tutorials(array) {
    for(var i=0;i<array.length;i++) {
      array[i] = '['+array[i]+']('+array[i]+')';
    }
    return array.join('  ');
  };

  function thirdPartyObject(string){
    let re = new RegExp('(.*?):(.*?)(?:,|$)','g');

    string.replace(re, (_, key, value) => thirdParty[key.trim()] = value.trim())
  }

  function thirdPartyJoin(obj) {
    for (var key in obj) {
      if(obj.hasOwnProperty(key)) {
        obj[key] = key+' '+'['+obj[key]+']('+obj[key]+')';
      }
    }
    thirdPartyArray = Object.values(obj);
    return thirdPartyArray.join('  ');
  }

  // Splits separate collaborators into array based on comma delimiter
  if (data.collaboratorsConfirm) {
    const collabLinks = data.collaborators.split(',');

    var collabLinksTrim = collabLinks.map(collabLinks => collabLinks.trim());
  }

  // Splits separate tutorials into array based on comma delimiter
  if (data.tutorialConfirm) {
    const tutorialLinks = data.tutorials.split(',');

    var tutorialLinksTrim = tutorialLinks.map(tutorialLinks => tutorialLinks.trim());
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
    ${data.collaboratorsConfirm ? collabProfiles(collabLinksTrim) : ''}
    ${data.thirdPartyAssetsConfirm ? thirdPartyJoin(thirdParty) : ''}
    ${data.tutorialConfirm ? tutorials(tutorialLinksTrim) : ''}

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
