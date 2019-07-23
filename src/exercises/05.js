// KENT: Purpose of refs ~ I want to track something overtime and don't want React to rerender when it changes



// useRef and useEffect: DOM interaction

import React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
  const tiltRef = React.useRef()  // KENT: Argument is initial value
  // KENT: vs createRef — same ref if already extant
  // KENT: The returned ref object will never change (the `current` may change but not the ref)
    // Therefore passing the ref in as a dep to `useEffect` is redundant
    // Passing in `current` will result in a warning because the ref's changing won't trigger a rerender



  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  React.useEffect(_ => {
    const tiltNode = tiltRef.current  // KENT: This is how you get the current value

    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })



    // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
    // object to your DOM node to cleanup:
    // `return () => tiltNode.vanillaTilt.destroy()`
    return () => tiltNode.vanillaTilt.destroy()  // KENT: Without this there is a memory link as the listeners persist
  }, [])  // KENT: Passing in an empty Array is an optimization that explicitly means useEffect will only run once
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.



  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div ref={ tiltRef } className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}



////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
Usage.title = 'useRef and useEffect: DOM interaction'

export default Usage
