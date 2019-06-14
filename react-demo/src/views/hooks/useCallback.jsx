import React, { memo, useCallback, useState } from 'react'

function Child({ onClickCallback, count }) {
  console.log('child render')
  return (
    <>
      <h1>im child:{count}</h1>
      <button onClick={onClickCallback}>child btn</button>
    </>
  )
}
const Child1 = memo(Child)

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('test')
  const onClickCallback = useCallback(() => setCount(count + 1), [count])
  return (
    <>
      <h1>name:{name}</h1>
      <button onClick={() => setName(name + '1')}>+</button>
      <Child1 onClickCallback={onClickCallback} count={count} />
    </>
  )
}
