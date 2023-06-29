// Function to return a license badge based on license
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

// Function to return the license
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

// Function to return the license of the README
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.`;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.projectTitle}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or inquiries, please reach out to me via email at ${data.email}. You can also find more of my work on my GitHub profile: [${data.githubUsername}](https://github.com/${data.githubUsername}).

`;
}

module.exports = generateMarkdown;
