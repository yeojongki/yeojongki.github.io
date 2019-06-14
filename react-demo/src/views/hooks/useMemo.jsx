import React, { useState, useMemo } from 'react'

// function Child({ count }) {
//   const changeCount = count => {
//     console.log('child changeCount function')
//     return '子组件改变Count的方法' + count
//   }
//   const childCount = changeCount(count)
//   return <>child count: {childCount}</>
// }

function Child2({ count }) {
  const changeCount = count => {
    console.log('child2 changeCount function')
    return '子组件2改变Count的方法' + count
  }
  const childCount = useMemo(() => changeCount(count), [count])
  return <>child count: {childCount}</>
}

export default function Counter() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(+new Date())
  return (
    <>
      <h1>time:{time}</h1>
      {/* 这里每点击一次 虽然 `count` 没变化 但是 `time` 变化引起父组件变化 然后子组件 `Child` 也会重新render */}
      <button onClick={() => setTime(+new Date())}>setTime</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* <Child count={count} /> */}
      <Child2 count={count} />
    </>
  )
}

// memoization的用法以及它如何帮助优化应用的性能: https://blog.csdn.net/hesongGG/article/details/84347484
