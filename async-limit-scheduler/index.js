// JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多 x 个
class Scheduler {
  constructor(limit = 2) {
    this.list = []
    this.curTaskLen = 0
    this.limit = limit
  }

  add(promiseCreator) {
    return new Promise(resolve => {
      this.list.push(() => promiseCreator().then(val => resolve(val)))
      this.curTaskLen < this.limit && this.runTask()
    })
  }

  runTask() {
    this.curTaskLen++
    this.list
      .shift()()
      .then(() => {
        this.curTaskLen--
        while (this.list.length && this.curTaskLen < this.limit) {
          this.runTask()
        }
      })
  }
}

const timeout = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(res => console.log(res, order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output:
// 500 '2'
// 300 '3'
// 1000 '1'
// 400 '4'

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
