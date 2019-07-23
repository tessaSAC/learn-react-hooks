// useEffect: persistent state
import React from 'react'

function Counter({ step = 1, initialCount = 0 }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 Number(window.localStorage.getItem('count') || initialCount)
  // initialCount = +window.localStorage.getItem('count') || initialCount
  // KENT: You can't synchronize across localStorage within the same tab, only across tabs; needs some kind of pubsub go-between


  // EC 1/4: Changing to a function will be more performant bc it will be lazy — only fetch on initialization
  // KENT: Because it will only fetch when the function is called
  initialCount = _ => +window.localStorage.getItem('count') || initialCount


  const [ count, setCount ] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `count` in localStorage.
  React.useEffect(
    _ => window.localStorage.setItem('count', count),  // Kent says updating localStorage is a side effect and therefore belongs in here
    [ count ],  // EC 2/4: Dep Array — Only rerender if a dep in here
    // KENT: Stop thinking in terms of lifecycle hooks; start thinking in terms of syncing changes with effects
    // KENT: If the array is empty the callback will only run the first time — or will run every time??? — fsr
      // bc nothing to trigger the callback again(???)
    // KENT: Re Veekas' Q, always do what the linter plugin (https://www.npmjs.com/package/eslint-plugin-react-hooks) says
      // e.g. you might think you don't need to put a dep in because you know you only need it to load initially
        // Then you'd still be fine with it in the deps Array though
    // KENT: Q — what if the dep is an object?
      // If possible initialize the object inside the effect because otherwise a `===` check will cause it to be recreated every time
      // Stick to primitives
      // Or use `useMemo` — will be covered tomorrow
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
