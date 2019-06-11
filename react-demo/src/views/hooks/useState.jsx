import React, { useState } from 'react'

export default function Counter2() {
  // 每一次渲染都是独立的闭包
  // 都有自己的Props & state
  // logCount 会捕获点击 `logCount` 按钮时的状态
  // 组件每次渲染都会被调用

  // useState返回值：[当前状态, 更新该状态的函数]，这个函数类似class组件的setState
  // 但是它不会把新的state和旧的state合并
  // 如果数据结构复杂 最好使用useReducer管理状态

  // useState可以传入一个function来返回初始值
  // const [count, setCount] = useState(()=> doSomething())
  const [count, setCount] = useState(0)
  function logCount() {
    setTimeout(() => {
      console.log(count)
    }, 2000)
  }

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
      <button onClick={logCount}>logCount</button>
    </>
  )
}

// export default function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1)
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1)
//         }}
//       >
//         -
//       </button>
//     </>
//   )
// }
