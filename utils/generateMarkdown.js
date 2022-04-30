// Function that returns a license badge based on which license is passed in, if None selected, returns empty string
function renderLicenseBadge(license) { 
  if (license !== 'None') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license link, license selection is convertent to lower to allow URL to function
function renderLicenseLink(license) {
  let lowerLicense = license.toLowerCase();
  // console.log(lowerLicense);
  if (lowerLicense !== 'None') {
  return `
  [${license}](https://choosealicense.com/licenses/${lowerLicense})
    `;
  } else {
    return ' ';
  }
}


// Function that returns the license section of README, if no lisence is witht he selection of NONE it returns nothing
function renderLicenseSection(license) {
  if (license !== 'None') {
  return `
  ## License
  The poject is covered under the following license:

  ![badge](https://img.shields.io/badge/license-${license}-blue)

  For more information on ${license}, please go to ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

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
  ${data.install}

  ## Usage
  ${data.useRepo}
  
  ## Contributing
  ${data.contributeRepo}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions regarding this projects, please contact me:

  [GitHub: ${data.gitUser}](https://github.com/${data.gitUser})

  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
