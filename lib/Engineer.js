class Engineer {
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
  