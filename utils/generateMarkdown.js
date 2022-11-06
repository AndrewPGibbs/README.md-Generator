
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ### Project Description
  ${data.description}

  ### Table of Contents
  1. Installation (#installation)
  2. Usage (#usage)
  3.Contributing (#contributing)
  4. Testing (#test_instructions)
  5. License (#license)
  6. Questions (#questions)

  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### Contributing
  ${data.contributing}

  ### Testing
  ${data.test_instructions}

  ### License
  ${data.license}

  ### Questions
  If you have any questions please feel free to contact me at:
  1) Github: https://github.com/${data.username}

  ### License
  Licensed under the ${data.license} license. (https//choosealiscense.com/licenses/${data.license}/)
`;
}

module.exports = generateMarkdown;
