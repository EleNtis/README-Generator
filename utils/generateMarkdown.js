
function licenseBadge(license){
  if(license !== "None"){
    return `![Github License](https://img.shields.io/badge/License-${license}-green.svg)`
  }
  return " "
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ### Description 
  ${data.description}
  
  ### Deployed Website
  ${data.link}
  
  ### Table of Contents
  * [Usage](#usage)
  * [Installation](#installation)
  * [Authors](#authors)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ### Usage
  The user will need node version above 16.
  The application will be invoked in the command line by using the following command:
  \`\`\`
  ${data.usage}
  \`\`\`
  
  ### Installation
  To install the dependencies run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`

  ### Authors
  ${data.authors}
  
  ### License
  This project is licensed under the ${data.license} license.
  For more information please refer to the LICENSE in the repo.

  ### Contributing
  ${data.contributing}
  
  ### Tests
  To run tests please run the following command:
  
  \`\`\`
  ${data.tests}
  \`\`\`

  ### Questions

  If you have questions feel free to open an issue.

  `;
}

module.exports = generateMarkdown;



