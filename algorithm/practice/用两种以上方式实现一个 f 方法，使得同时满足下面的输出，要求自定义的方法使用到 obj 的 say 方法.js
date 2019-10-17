// 用两种以上方式实现一个 f 方法，使得同时满足下面的输出，要求自定义的方法使用到 obj 的 say 方法
const obj = {
  str: 'hello',
  say() {
    Array.from(arguments).forEach(item => {
      console.log(`${this.str} ${item}`)
    })
  }
}

// 方法一：
function f(...args) {
  obj.say.apply(obj, args)
}
f()

// 方法二：
function f2(...args) {
  obj.say.call(obj, ...args)
}
f2()

// 每种方法需要满足以下输入
f('foo') // hello foo
f('foo', 'bar') // hello foo hello bar
