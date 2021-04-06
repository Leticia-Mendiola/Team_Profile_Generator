class Engineer {
    constructor(github) {
      this.github = github;
      this.role = "Engineer"
    }

    getGithub(){
        console.log(`Github Account: ${this.github}`)
    }

    getRole(){
        console.log(`Role: ${this.role}`)
    }
  }
module.exports = Engineer;
  