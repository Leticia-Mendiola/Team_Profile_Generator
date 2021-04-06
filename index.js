const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Inter = require('./lib/Intern');

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Employee Name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee Email:',
    },
    {
      type: 'list',
      name: 'role',
      message: 'Employee Position/Role:',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
]);
const promptManager = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'office',
      message: 'Office Number:',
    },
]);
const promptEngineer = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'GitHub URL:',
    },
]);
const promptIntern = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'school',
      message: 'School:',
    },
]);

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <title>Team Roster</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const init = () => {
  promptUser().then((answers) => {
    if (answers.role === "Manager") {
      promptManager().then((answers) => {
        try {
          const html = generateHTML(answers);
          fs.writeFileSync('index.html', html);
          console.log('Successfully wrote to index.html');
        } catch (error) {
          console.log(error);
        }
      })
    } else if (answers.role === "Engineer") {
      promptEngineer().then((answers) => {
        try {
          const html = generateHTML(answers);
          fs.writeFileSync('index.html', html);
          console.log('Successfully wrote to index.html');
        } catch (error) {
          console.log(error);
        }
      })
    } else if (answers.role === "Intern") {
      promptIntern().then((answers) => {
        try {
          const html = generateHTML(answers);
          fs.writeFileSync('index.html', html);
          console.log('Successfully wrote to index.html');
        } catch (error) {
          console.log(error);
        }
      })
    }
    
  });
};

init();