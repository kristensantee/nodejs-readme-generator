//TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
let answers = "";

const generateReadMe = (answers) => {
    fs.writeFile('./outputs/${answers.name}README.md', 
    
`# ${answers.name}

## Overview
${answers.overview}

## Description
${answers.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [Licenses](#licenses)
5. [Badges](#badges)
6. [Features](#features)
7. [Contribute](#contribute)
8. [Tests](#tests)

## Run and Installation
A link to the deployed site can be found [here](${answers.run}). A screenshot of the site is shown below: 
![screenshot of deployed site for ${answers.name}](${answers.url}).

## How to Use the Project
${answers.usage}

## Credits
${answers.credits}

## How to Contribute
This project is open for contribution but please initiate an issue for any large changes. 
The developer can be reached through [email](${answers.email}) or contacted through [Github](${answers.github}) or [LinkedIn](${answers.linkedin}).
`,

    (err) => err ? console.log(err) : console.log('nice'))}


//TODO: Create an array of questions for user input
inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of the project?'
      },
      {
        type: 'input',
        name: 'overview',
        message: 'Provide an overview of the project here.'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description explaining the what, why, and how of the project.',
      },
      {
        type: 'input',
        name: 'run',
        message: 'Please provide the link for your deployed site here.'
      },
      {
        type: 'input',
        name: 'url',
        message: 'Please provide the relative image location for the screenshot here.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please type usage instructions here.'
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please include credits here.'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the license. (Use <space> to select, arrows to move up and down, and <enter> to accept the choice.)',
        choices: ['MIT', 'GitHub', 'Apache License 2.0', 'GNU GPLv3'],
      },
    //   {
    //     type: 'input',
    //     name: 'badges',
    //     message: 'Please include badges here.'
    //   },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please provide your github profile link.'
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Please provide your LinkedIn profile link.'
      },
    //   {
    //     type: 'input',
    //     name: 'features',
    //     message: 'Please include features here.'
    //   },
    //   {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'Please type testing instructions here.'
    //   },
])
.then((answers) => {
    // console.log(answers);
    generateReadMe(answers);

    // fs.writeFile(`./outputs/README.md`, content, (err) => err ? console.log(err) : console.log('nice'));
    // !answers.projectName
    //     ? console.log('Please provide a title for the project.')
    //     : generateReadMe(answers)
})

//TODO: Create a function to write README file
// function generateReadMe(answers) {
//     fs.writeFile(`./outputs/README.md`, JSON.stringify(answers, (err, answers))) => {
//         if(err){
//             throw err
//         }
//         console.log("yay")
//     }
    
    
// }

//TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();