
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
  * Usage [#usage]
  * Installation [#installation]
  * Authors [#authors]
  * License [#license]
  
  ### Usage
  ${data.usage}
  
  ### Installation
  ${data.installation}
  
  ### Authors
  ${data.authors}
  
  ### License
  ${data.license}
  "Please refer to the LICENSE in the repo."
  `;
}

module.exports = generateMarkdown;



