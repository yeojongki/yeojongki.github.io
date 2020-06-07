// const { autobind } = require('core-decorators')

function autobind(target, key, discriptor) {
  const { value: fn } = discriptor
  return {
    get() {
      const boundFn = fn.bind(this)
      Object.defineProperty(this, key, {
        value: boundFn,
      })
      return boundFn
    }
  }
}

class Person {
  @autobind
  getInstance() {
    return this
  }
}

const person = new Person()
const { getInstance } = person
console.log(person === getInstance())
