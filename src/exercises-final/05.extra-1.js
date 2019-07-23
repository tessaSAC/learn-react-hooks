// useRef and useEffect: DOM interaction
// 💯 Make a custom hook
// http://localhost:3000/isolated/exercises-final/05.extra-1

import React from 'react'
import VanillaTilt from 'vanilla-tilt'

function useTilt(ref, options) {
  React.useEffect(() => {
    const {current: tiltNode} = ref
    VanillaTilt.init(tiltNode, options)
    return () => tiltNode.vanillaTilt.destroy()
  }, [options, ref])  // KENT: Needs to pass the ref here bc ESLint plugin doesn't know the ref argument is a ref; this is to avoid a linter warning
}

const options = {
  max: 25,
  speed: 400,
  glare: true,
  'max-glare': 0.5,
}

function Tilt({children}) {
  const tiltRef = React.useRef()
  useTilt(tiltRef, options)

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function Usage() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
Usage.title = 'useRef and useEffect: DOM interaction'

export default Usage
