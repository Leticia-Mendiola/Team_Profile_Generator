const Employee = require("./Employee.js")

class Intern extends Employee{
    constructor(school) {
      this.school = school;
    }

    getSchool(){
        console.log(`School: ${this.school}`)
    }

    getRole(){
        console.log(`Role: Intern`)
    }
  }
  
  module.exports = Intern;
  