// useCounter: custom hooks
import React from 'react'

// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions

function useCounter(initialCount = 0, step = 1) {
  const [ count, setCount ] = React.useState(initialCount)
  const increment = _ => setCount(count + step)

  return [ count, increment]
}



function Counter({step = 1, initialCount = 0}) {
  // 💣 remove this (or move it to your custom hook)
  // const [count, setCount] = React.useState(initialCount)
  // const increment = () => setCount(c => c + step)



  // 🐨 Use your custom useCounter hook to get `count` and `increment`
  const [ count, increment ] = useCounter(initialCount, step)

  return <button onClick={increment}>{count}</button>
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />
}
Usage.title = 'useCounter: custom hooks'

export default Usage
