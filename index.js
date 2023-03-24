const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
type: "input",
name: "title",
message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Please describe your project"
},
{
    type: "input",
    name: "link",
    message: "What is the link of the deployed website?"
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about using your application?"
},
{
    type: "input",
    name: "installation",
    message: "What does the user need to know about installing the dependencies"
    },
{
    type: "input",
    name: "authors",
    message: "What are the authors of the project?"
},
{
    type: "list",
    name: "license",
    message: "What kind of license does the repo have?",
    choices: ["MIT", "APACHE 2.0", "GPL", "none"]
},
{
        type: "input",
        name: "contributing",
        message: "How can the user contribute to the repo?",        
},
{
    type: "input",
    name: "tests",
    message: "How can the user test the application?", 
 },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init(){
    inquirer.prompt(questions).then((response) =>{
        console.log(`README loading...`);
        writeToFile('README.md', generateMarkdown({...response}))
    })
}


// function call to initialize program
init();