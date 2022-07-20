//TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
let licenseBadge = '';

//TODO: Build writeFile with markdown text as part of file.
const generateReadMe = (answers) => {
    badge(answers);
    fs.writeFile('./outputs/README.md', 
`# ${answers.name}

${licenseBadge}

## Overview
${answers.overview}

## Description
${answers.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Licenses](#licenses)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
A link to the deployed site can be found [here](${answers.run}). A screenshot of the site is shown below: 
![screenshot of deployed site for ${answers.name}](${answers.url})

## Usage
${answers.usage}

## Licenses
This project uses the ${answers.license} license. More info about licenses can be found [here](https://choosealicense.com/).


## Contributing
This project is open for contribution but please initiate an issue for any significant changes. 

## Tests
${answers.tests}

## Questions
The developer can be reached through [email](${answers.email}) or contacted through [Github](https://github.com/${answers.github}) or [LinkedIn](https://linkedin.com/in/${answers.linkedin}).
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
        message: 'Provide an overview of the project here:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description explaining the what, why, and how of the project:',
      },
      {
        type: 'input',
        name: 'run',
        message: 'Please provide the link for your deployed site here:'
      },
      {
        type: 'input',
        name: 'url',
        message: 'Please provide the relative image location for the screenshot here:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please type usage instructions here:'
      },
    //   {
    //     type: 'input',
    //     name: 'credits',
    //     message: 'Please include credits here.'
    //   },
      {
        type: 'list',
        name: 'license',
        message: 'Please select the license (use arrows to navigate and <enter> to accept the choice)',
        choices: ['MIT', 'GPL', 'Apache'],
      },
    //   {
    //     type: 'input',
    //     name: 'badges',
    //     message: 'Please include badges here.'
    //   },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please provide your github username (do not include the full url):'
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Please provide your LinkedIn profile username (do not include the full url):'
      },
    //   {
    //     type: 'input',
    //     name: 'features',
    //     message: 'Please include features here.'
    //   },
      {
        type: 'input',
        name: 'tests',
        message: 'Please type testing instructions here:'
      }
    ])
.then((answers) => {
    // console.log(answers);
    generateReadMe(answers);

    // fs.writeFile(`./outputs/README.md`, content, (err) => err ? console.log(err) : console.log('nice'));
    // !answers.projectName
    //     ? console.log('Please provide a title for the project.')
    //     : generateReadMe(answers)
})

const badge = (answers) => {
    if (answers.license === 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      console.log(answers.license)
    } else if (answers.license === 'GPL'){
        licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      console.log(answers.license)
    } else if (answers.license === 'Apache'){
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      console.log(answers.license)
    } else {
        licenseBadge = "No license selected";
    }
}

