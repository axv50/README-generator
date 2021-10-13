// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'color',
        message: 'What is your favorite color?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is your lucky number?'
    },
    {
        type: 'input',
        name: 'movie',
        message: 'What is your favorite movie?'
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers);
            let content = `
            Favorite Color: **${answers.color}**
            Lucky Number: *${answers.number}*
            Favorite Movie: ${answers.movie}
            `

            fs.writeFile('./utils/README.md', content, err => {
                if (err) {
                  console.error(err)
                  return
                }
                //file written successfully
              })
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
 }

// Function call to initialize app
init();