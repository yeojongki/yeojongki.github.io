import React, { useState, useEffect } from 'react'
// useEffect 是用于处理各种状态变化造成的副作用
// 也就是说只有在特定的时刻，才会执行的逻辑。

export default function Counter() {
  const [count, setCount] = useState(0)

  // => componentDidMount/componentDidUpdate
  useEffect(() => {
    // update
    document.title = `you clicked ${count} times`
    // componentWillUnMount
    return function cleanUp() {
      document.title = 'app'
    }
  }, [count])
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
