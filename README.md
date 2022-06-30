# README Generator
    ![License badge](function renderLicenseBadge(license) {
  if (questions.licenseConfirm) {
    let badgeURL = 'https://img.shields.io/badge/License-'+license.value+'-'+questions.badgeColor.value;
    return badgeURL;
  } else {
    return '';
  }
})

    ## Description
    roducing a README is a vital part of development work as it is the front door to your initiatives. This tool streamlines that process using best practices for README format.

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    ## Installation
    undefined

    ## Usage
    Initialize the prompt by typing "node index" in your terminal. Answer the questions and this should generate your README.
    

    ## License
    function renderLicenseSection(license) {
  let licenseText = `Licensed under the [${license.value}](${renderLicenseLink}) license.`;
  return licenseText;
}

    ## Contributing
    Any additional guidance on code-cleaning and best practices is always appreciated. Additional tools or implementations are welcome, as well.

    ## Tests
    The produced file can either be deleted or overwritten with this program. Running it using any values is welcome. There are, however, question dependencies, so incorrect formatting in specific answers (i.e. third-party assets, etc.) will cause issues and my not populate in the README correctly.

    ## Questions
    If you have any questions on this application or wish to contribute, please contact me directly at dustinpezley@gmail.com.
    You can view more of my work on my [GitHub profile](https://github.com/undefined).
  