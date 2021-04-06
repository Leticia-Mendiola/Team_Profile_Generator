class Manager{
    constructor(officeNumber) {
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
  