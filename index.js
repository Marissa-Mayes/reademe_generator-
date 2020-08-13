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
    //console.log(userPrompt),
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
])
}
const stubs={
    title: 'nick',
    description: 'great coding',
    install: 'no',
    usage: 'extensively',
    contribution: 'be nice',
    license: 'mit',
    github: 'nick',
    email: 'nick@nick.nick'
  }

//TODO: generate markdown

function generateMarkdown(data) {

    for (key in data){
        console.log(key, " is ",data[key])
    }

    return `# ${data.title}
### Description: ${data.description}

  `;
  }
  
  //console.log(generateMarkdown(stubs))

//TODO: wrtie to file

function writeToFile(fileName, data) {
    fs.writeFile(fileName,
         data,
          //{encoding: "utf-8"},
          ()=>{console.log("you tried to wrtie a file")})
}
//writeToFile("nick2", "this is a story about nick")
function init(){
    userPrompt().then(answers=>{
        console.log(answers)
        const formattedString= generateMarkdown(answers)
        writeToFile(answers.title, formattedString)
    })
}
init()
    
    

