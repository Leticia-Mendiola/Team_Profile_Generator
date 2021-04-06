class Intern {
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
  