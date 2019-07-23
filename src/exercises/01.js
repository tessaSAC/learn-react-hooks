// useState: counter

import React, { useState } from 'react'  // KENT: doesn't import useState; dots off React instead


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
  // KENT: React won't detect the change even if not an object
  // KENT: In React (unlike Vue) "Mutation is not an API" — can't trigger change by mutating state instead of calling function
  // KENT: Batches and queues state changes; i.e. if you call setCount 4x it will constantly update from the same count



  // KENT: EXTRA CREDIT 2/2: STATE UPDATER FUNCTION — Note to self: EC was in the md file smh
  // const increment = _ => setCount(currentCount => currentCount +1)  // Can pass function to hook
  // Allows you to update count multiple times in one batch

  // KENT: STATE UPDATER FUNCTIONS — Useful for async work:
  // Imagine if increment has a 1000ms timeout: const increment = _ => { setTimeout(_ => setCount(count + 1), 1000) }
  // Have to wait a second for each update and b/c of closures it will only update by 1 rather than visually "skipping ahead"
  // Solution: Use a State Updater Function:
  // const increment = _ => { setTimeout(_ => setCount(currentCount => currentCount + 1)) }  // `currentCount` is passed by React somehow but I missed it
  // Use SUF if value needs to update previous value
  // Or if you don't want to remember the above guideline

  return <button onClick={ increment }>{ count }</button>
}



// KENT: EXTRA CREDIT 1/2: ACCEPT CURRENT COUNT AND STEP
// functionCounter({ initialCount = 0, step = 1 }) {
//   const [ count, setCount ] = React.useState(props.initialCount)
//   const increment = _ => setCount(currentCount => currentCount + step)

//   return <button onClick={ increment }>{ count }</button>
// }




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
