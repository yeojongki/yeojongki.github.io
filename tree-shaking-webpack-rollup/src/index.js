// import Math from "./math"

// let foo = () => {
//   let x = 1
//   if (false) {
//     console.log('never reached')
//   }
//   let a = 3
//   return a
// }

// let bar = () => {
//   var x = 1
//   console.log(x)
//   function unused() {
//     return 2
//   }
//   return x
//   let c = x + 3
//   return c
// }

// bar()

import * as module from "./module";
console.log(module.math.cube);
