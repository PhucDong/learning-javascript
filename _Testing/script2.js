// Arrow functions
// class Person {
//     constructor(name) {
//       this.name = name
//     }
  
//     printNameArrow() {
//       setTimeout(() => {
//         console.log(`Arrow: ${this.name}`)
//       }, 100)
//     }
  
//     printNameFunction() {
//       setTimeout(function() {
//         console.log(`Function: ${this.name}`)
//       }, 100)
//     }
// }

// PROMISES
// console.log(fetch("https://reqres.in/api/users"));
// Example 1
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a === 4) {
//         resolve("Succeed!");
//     } else {
//         reject("Failed!");
//     }
// })

// p.then((message) => {
//     console.log("This is in the then " +  message);
// }).catch((message) => {
//     console.log("This is in the catch " + message);
// })

const userLeft = true;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback(message => {
//     console.log(message)
//   }, error => {
//     console.log(error.name + ' ' + error.message)
// })

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
              name: 'User Left', 
              message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
              name: 'User Watching Cat Meme',
              message: 'WebDevSimplified < Cat' 
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then(message => {
    console.log(message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})