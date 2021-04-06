const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

const employee = new Employee (answers.name,answers.id,answers.email)
const manager = new Manager (answers.officenumber)
const engineer = new Engineer (answers.github)
const intern = new Intern (answers.school)
getName();
getId();
getEmail();
getRole();
getOfficeNumber();

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
<div class="row">
<div class="col s12 m6">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${answers.name}</span>
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>
</body>
</html>`;

const init = () => {
  promptUser().then((answers) => {
    
    if (answers.role === "Manager") {
      promptManager().then((answers) => {
        
      })
    } else if (answers.role === "Engineer") {
      promptEngineer().then((answers) => {
        
      })
    } else if (answers.role === "Intern") {
      promptIntern().then((answers) => {
        
      })
    }
  });
};
try {
  const html = generateHTML(answers);
  fs.writeFileSync('./dist/index.html', html);
  console.log('Successfully wrote to index.html');
} catch (error) {
  console.log(error);
}
init();