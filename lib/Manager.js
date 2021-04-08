const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(officeNumber) {
      super (name, id, email);
      this.officeNumber = officeNumber;
      this.role = "Manager"
    }

    getOfficeNumber(){
        console.log(`Office Number: ${this.officeNumber}`)
    }

    getRole(){
        console.log(`Role: ${this.role}`)
    }
  }
  
  module.exports = Manager;
  