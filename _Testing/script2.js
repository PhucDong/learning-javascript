// Arrow functions
class Person {
    constructor(name) {
      this.name = name
    }
  
    printNameArrow() {
      setTimeout(() => {
        console.log(`Arrow: ${this.name}`)
      }, 100)
    }
  
    printNameFunction() {
      setTimeout(function() {
        console.log(`Function: ${this.name}`)
      }, 100)
    }
}

// Promise
// console.log(fetch("https://reqres.in/api/users"));