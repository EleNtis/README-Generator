
function licenseBadge(license){
  if(license !== "None"){
    return `![Github License](https://img.shields.io/badge/License-${license}-green.svg)`
  }
  return ""
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;



