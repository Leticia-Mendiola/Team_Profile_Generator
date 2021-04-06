class Intern {
    constructor(school) {
      this.school = school;
      this.role = "Intern"
    }

    getSchool(){
        console.log(`School: ${this.school}`)
    }

    getRole(){
        console.log(`Role: ${this.role}`)
    }
  }
  
  module.exports = Intern;
  