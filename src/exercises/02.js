// useCounter: custom hooks
import React from 'react'

// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions

function useCounter(initialCount = 0, step = 1) {
// KENT: Accepts an object instead and also gives that a default value: { initialCount = 0, step = 1 } = {}
  // Asked why: Because passing in two numbers, it's not obvious which is which
// Makes it more reusable because people can use it however they like(?)

  const [ count, setCount ] = React.useState(initialCount)
  const increment = _ => setCount(count + step)

  return [ count, increment]
  // KENT: In response to a Q on why he returned an Array instead of an Object
    // Why does useState return an Array?
      // TIL: Twix is Kent's favorite candy bar
      // Because otherwise the names could not be determined by the user e.g. on line 11
      // To have multiple values would need to alias to avoid name collision
  // Will only return an Array if it's a limited number of items, e.g. the state, and 1-2 updater functions
  // NB: Use the linter plugin (subject of tonight's useReact talk)
}



function Counter({ step = 1, initialCount = 0 }) {
  // 💣 remove this (or move it to your custom hook)
  // const [count, setCount] = React.useState(initialCount)
  // const increment = () => setCount(c => c + step)



  // 🐨 Use your custom useCounter hook to get `count` and `increment`
  const [ count, increment ] = useCounter(initialCount, step)

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
Usage.title = 'useCounter: custom hooks'

export default Usage
