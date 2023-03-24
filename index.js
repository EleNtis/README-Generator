const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: "input",
    name: "Github",
    message: "What is your Github username?"
},
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
    name: "Authors",
    message: "What are the authors of the project?"
},
{
    type: "list",
    name: "license",
    message: "What kind of license does the repo have?",
    choices: ["MIT", "APACHE 2.0", "GPL", "none"]
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
