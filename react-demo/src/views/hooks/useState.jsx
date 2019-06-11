import React, { useState } from 'react'

export default function Counter() {
  // 每一次渲染都是独立的闭包
  // 都有自己的Props & state
  // logCount 会捕获点击 `logCount` 按钮时的状态
  // 组件每次渲染都会被调用
  const [count, setCount] = useState(0)
  function logCount() {
    setTimeout(() => {
      console.log(count)
    }, 2000)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
      <button onClick={logCount}>logCount</button>
    </div>
  )
}

// export default function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
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
//     </div>
//   )
// }
