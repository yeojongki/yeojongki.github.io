// import { autobind } from 'core-decorators'
import autobind from './autobind'
import memoize from './memoize'
import lazy from './lazy'

// // 1. memoize
// class Person {
//   @memoize("anotherMethod")
//   doBigCalcFn() {
//     return 123456789
//   }

//   anotherMethod() {
//     return 666
//   }
// }

// const { doBigCalcFn } = new Person()
// console.log(doBigCalcFn())
// console.log(doBigCalcFn())

/*******************************************************************/

// // 2. autobind (class / method)
// @autobind
// class Person {
//   // @autobind
//   getInstance() {
//     return this
//   }

//   anotherGetInstance() {
//     return this
//   }
// }

// const person = new Person()
// const { getInstance, anotherGetInstance } = person
// const p1 = getInstance()
// const p2 = anotherGetInstance()
// console.log(person === p1) // true
// console.log(person === p2) // true
// console.log(p1 === p2) // true
// console.log(person === p1 === p2) // false why?

/*******************************************************************/

// // 3. lazy initialize
// class Person {
//   @lazy
//   name = "jay"
// }

// const person = new Person()
// console.log(person.name)

export default Person
