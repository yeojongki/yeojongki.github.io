import React, { useState, useRef, useEffect } from 'react'

// 在effect的回调函数里读取最新的值而不是捕获的值
export default function Counter() {
  const [count, setCount] = useState(0)
  const latestCount = useRef(count)

  useEffect(() => {
    // setTimeout(() => {
    //   console.log(`You clicked ${count} times`)
    // }, 3000)
    // Set the mutable latest value
    latestCount.current = count
    setTimeout(() => {
      // Read the mutable latest value
      console.log(`You clicked ${latestCount.current} times`)
    }, 3000)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
