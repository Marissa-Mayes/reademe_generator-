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
    name: "user"
    },
    {
    type: "input",
    message: "please enter email address",
    name: "email",
    },
    {
    type: "input",
    message: "Input test instructions",
    name: "tests",
        },
        {type: "input",
        message: "Please enter reposity name",
        name: "name",
        },
])
}


//TODO: generate markdown

function generateMarkdown(data) {
   console.log(data)
    // //for (let key of data){
    //     console.log(key, " is ",data[key])
    // }

    return `# ${data.title}
### Description: ${data.description}
## Table of Contetents
## Usage: ${data.usage}
## Install: ${data.install}
## Contribution: ${data.contribution}
## Tests: ${data.tests}
## Questions: Please contact me should you have additional questions. I can be reached via [GitHub](https://github.com/${data.user}) and or by email ${data.email}

  `;
  }
  


//TODO: wrtie to file

function writeToFile(data) {
    fs.writeFile("./README.md",data, function (err){
        if (err) throw err;
        console.log("YES");
    })};

         
          //{encoding: "utf-8"},
          //()=>{console.log("you tried to wrtie a file")})

function init(){
    userPrompt().then(answers=>{
        console.log(answers)
        const formattedString= generateMarkdown(answers)
        writeToFile(formattedString)
    })
}
init()
    
    

