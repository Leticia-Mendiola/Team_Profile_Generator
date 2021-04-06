const Employee = require("./Employee.js")

class Engineer extends Employee{
    constructor(github) {
      this.github = github;
    }

    getGithub(){
        console.log(`Github Account: ${this.github}`)
    }

    getRole(){
        console.log(`Role: Engineer`)
    }
  }
module.exports = Engineer;
  