// useState: counter

import React, { useState } from 'react'


function Counter() {
  // 🐨 use React.useState here
  // 🐨 create an increment function that calls the state updater you get from
  //    React.useState to increment the count
  // 🐨 render the count you get from React.useState inside the button and use
  //    your increment function as the onClick handler.

  const [ count, setCount ] = useState(0)
  // `useState` returns [ state's current value, a function that updates `count`]
  // Takes initial value as arg
  // Called `useState` bc state is only initialized on the first call
  // Looks like to have multiple items they will all be distinct calls to `useState`?

  const increment = _ => setCount(count + 1)  // Why do I need to use `setCount`? Is it b/c `count` is primitive?

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
Usage.title = 'useState: counter'

export default Usage
