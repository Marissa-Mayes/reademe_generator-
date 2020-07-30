const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//function for user input//

function userPrompt(){
return inquirer.prompt([
    {
    type: "input",
    message: " What is the title of the Project?",
    name: "title",
    },
    {
    type: "input",
    message: "What is the project description?",
    name: "description",
    },
    console.log(userPrompt),
    {
    // type: "input",
    // message: "Provide Table of Contents",
    // name: "table of contents",
    // },
    type: "input",
    message: "Are there needed packages?",
    name: "install",
    },
    {
    type: "input",
    message: "How is this project used?",
    name: "usage",
    },
    {
    type: "input",
    message: "Are there contribution guidlines?",
    name: "contribution",
    },
    {
    type: "input",
    message: "What is the name of the license?",
    name: "license",
    },
    {
    type: "input",
    message: "please enter github username",
    name: "github"
    },
    {
    type: "input",
    message: "please enter email address",
    name: "email",
    },
]);
    };
    

