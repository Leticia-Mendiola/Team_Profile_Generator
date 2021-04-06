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
<div class="col m4">
  <div class="card">
    <div class="card-content white-text">
      <span class="card-title">${employee.getName()}</span>
      <h5 class="row">${manager.getRole(),engineer.getRole(),inter.getRole()}<h5>
      <p class="row">${employee.getId()}</p>
      <p class="row">${employee.getEmail()}</p>
      <p class="row">${manager.getOfficeNumber(),engineer.getGithub(),intern.getSchool()}</p>
    </div>
  </div>
</div>
</div>
</body>
</html>`;

const init = () => {
  promptUser().then((answers) => {
    const employee = new Employee (answers.name,answers.id,answers.email)
    console.log("Employee Info Recorded Successfully:")
    if (answers.role === "Manager") {
      promptManager().then((answers) => {
        const manager = new Manager (answers.officenumber)
        manager.getOfficeNumber();
        manager.getRole();
      })
    } else if (answers.role === "Engineer") {
      promptEngineer().then((answers) => {
        const engineer = new Engineer (answers.github)
        engineer.getGithub();
        engineer.getRole();
      })
    } else if (answers.role === "Intern") {
      promptIntern().then((answers) => {
        const intern = new Intern (answers.school)
        intern.getSchool();
        intern.getRole();
      })
    }
  });
};
// try {
//   const html = generateHTML(answers);
//   fs.writeFileSync('./dist/index.html', html);
//   console.log('Successfully wrote to index.html');
// } catch (error) {
//   console.log(error);
// }
init();