// useState: counter
// 💯 use the functional updater
// http://localhost:3000/isolated/exercises-final/01.extra-2

import React from 'react'

function Counter({step = 1, initialCount = 0}) {
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}
Usage.title = 'useState: counter'

export default Usage
