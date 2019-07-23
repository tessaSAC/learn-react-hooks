// useEffect: persistent state
import React from 'react'

function Counter({ step = 1, initialCount = 0 }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 Number(window.localStorage.getItem('count') || initialCount)
  // initialCount = +window.localStorage.getItem('count') || initialCount


  // EC 1/4: Changing to a function will be more performant bc it will be lazy — only fetch on initialization
  initialCount = _ => +window.localStorage.getItem('count') || initialCount


  const [ count, setCount ] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `count` in localStorage.
  React.useEffect(
    _ => window.localStorage.setItem('count', count),  // Kent says updating localStorage is a side effect and therefore belongs in here
    [ count ],  // EC 2/4: Dep Array — Only rerender if a dep in here changes
  )


  return <button onClick={ increment }>{ count }</button>
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
Usage.title = 'useEffect: persistent state'

export default Usage
