// useEffect: persistent state
// 💯 advanced custom hooks
// http://localhost:3000/isolated/exercises-final/03.extra-2
import React from 'react'

// KENT: EC 3/4
  // Lets you reuse hooks across the app
function useLocalStorageCounter({step = 1, initialCount = 0, key = 'count'}) {  // KENT: NB key, lets two use different `count`s(?)
  const [count, setCount] = React.useState(() =>
    Number(window.localStorage.getItem('count') || initialCount),
  )

  React.useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

  const increment = () => setCount(c => c + step)

  return [count, increment]
}

function Counter({step, initialCount}) {
  const [count, increment] = useLocalStorageCounter({
    step,
    initialCount,
  })
  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: advanced custom hooks'

export default Usage
