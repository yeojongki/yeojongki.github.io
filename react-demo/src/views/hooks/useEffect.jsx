import React, { useState, useEffect } from 'react'
// useEffect(effect: Function, deps?:[]any)
// effect函数在componentDidMount/componentDidUpdate时有条件触发。
// 可以返回一个函数`returnFunction`, `returnFunction`将在

// 第二个参数deps的不同情况：
// - 如果不传，则每次componentDidMount/componentDidUpdate时都会先触发`returnFunction`(如果存在), 再触发effect
// - 如果为空数组[], componentDidMount时触发`returnFunction`和effect
// - 如果只需要在指定变量变更时触发`returnFunction`和effect, 将该变量放入数组

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // update
    document.title = `you clicked ${count} times`
    // componentWillUnMount
    return function cleanUp() {
      console.log('return func ', count)
      document.title = 'app'
    }
  }, [count])
  return (
    <>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

// useEffect 完整指南 https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/
// How to fetch data with React Hooks: https://www.robinwieruch.de/react-hooks-fetch-data/
