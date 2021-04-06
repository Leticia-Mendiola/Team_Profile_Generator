const inquirer = require('inquirer');
const fs = require('fs');

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



const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
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
    try {
      const html = generateHTML(answers);
      fs.writeFileSync('index.html', html);
      console.log('Successfully wrote to index.html');
    } catch (error) {
      console.log(error);
    }
  });
};

init();