const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(officeNumber) {
      this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        console.log(`Office Number: ${this.officeNumber}`)
    }

    getRole(){
        console.log(`Role: Manager`)
    }
  }
  
  module.exports = Manager;
  