
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
 (https://img.shields.io/badge/license-${data.license}-success?style=plastic)
  # ${data.title}

  ## Project Description
  ${data.description}

  ## Table of Contents
  1. Installation 
  2. Usage
  3.Contributing 
  4. Testing
  5. License
  6. Questions 

  ## Installation

  ${data.installation}

  ---------------------------------------------
  ## Usage

  ${data.usage}

  ---------------------------------------------
  ## Contributing

  ${data.contributing}

  ---------------------------------------------
  ## Testing

  ${data.test_instructions}

  ---------------------------------------------

  ## License

  ${data.license}

  ---------------------------------------------

  ## Questions

  If you have any questions please feel free to contact me at:
  1) Github: https://github.com/${data.username}

  ---------------------------------------------

  ### License

  Licensed under the ${data.license} license. (https//choosealiscense.com/licenses/${data.license}/)
`;
}

module.exports = generateMarkdown;
