// useState: tic tac toe

import React from 'react'  // KENT: Prefers dotting off React b/c he doesn't like having to update imports

function Board() {
  // 🐨 Use React.useState for the `squares` state you need
  // 💰 To create an empty array with 9 slots, you can use: `Array(9).fill(null)`
  const [ squares, setSquares ] = React.useState(Array(9).fill(null))



  // 🐨 create your derived state variable here for the nextValue
  // 💰 call it "nextValue" and get it by calling calculateWhoIsNext with the squares
  // const checkX = square => { if(square) return square.toLowerCase === 'x' }
  // const checkO = square => { if(square) return square.toLowerCase === 'o' }

  // const exes = squares.filter(checkX)
  // const ohs = squares.filter(checkO)
  // const nextValue = exes.length > ohs? 'o' : 'x'

  const nextValue = calculateWhoIsNext(squares)  // KENT: Given function from Kent



  // 🐨 create your derived state variable here for the winner
  // 💰 call it "winner" and get it by calling calculateWinner with the squares
  const winner = calculateWinner(squares)  // KENT: Given function from Dan



  // Derived state function refactored out
  function calculateStatus(squares, winner) {
    return winner
    ? `Winner: ${ winner }`
    // : squares.map(square => square).length === squares.length
    : squares.every(square => square)
      ? `Scratch: Cat's game`
      : `Next player: ${ nextValue }`
  }

  // This is the function your square click handler will call. `square` should
  // be an index. So if they click the center square, this will be `5`.
  // eslint-disable-next-line no-unused-vars
  function selectSquare(square) {
    // 🐨 first, if there's already winner or there's already a value at the
    // given square index (like someone clicked a square that's already been
    // clicked), then return early so we don't make any state changes
    // if(winner || square) return
    if(winner || squares[square]) return



    // 🦉 It's typically a bad idea to manipulate state in React
    // 🐨 make a copy of the squares array (💰 `[...squares]` will do it!)
    // 🐨 Set the value of the square that was selected
    // 💰 `squaresCopy[square] = nextValue`
    //
    // 🐨 set the squares to your copy

    const grid = [ ...squares ]
    grid[ square ] = nextValue
    setSquares(grid)
  }

  // Here we'll determine the status we'll display at the top of the board.
  // We can have the following statuses:
  // `Winner: ${ winner }`
  // `Scratch: Cat's game` (💰 if every square in squares is truthy and there's no winner, then it's a scratch)
  // `Next player: ${ nextValue }`
  //
  // 🐨 assign a `status` variable to one of these, and render it above the
  //    board in a div with the className "status"
  // const status = winner
  //   ? `Winner: ${ winner }`
  //   // : squares.map(square => square).length === squares.length
  //   : squares.every(square => square)
  //     ? `Scratch: Cat's game`
  //     : `Next player: ${ nextValue }`

  const status = calculateStatus(squares, winner)



  // KENT: Make a function that returns a non-component JSX
  function renderSquare(idx) {
    return (
      <button className="square" onClick={() => selectSquare(idx)}>
        { squares[idx] }
      </button>
    )
  }

  // 🐨 return your JSX with this basic structure:
  return (
    <div>
      <div className="status">{/* put the status here */}</div>
      {/* you'll need 3 board-rows and each will have 3 squares */}
      <div className="board-row">
        { renderSquare(0) }
        { renderSquare(1) }
        { renderSquare(2) }
        {/* <button className="square" onClick={() => selectSquare(0)}>
          { squares[0] }
        </button>
        <button className="square" onClick={() => selectSquare(1)}>
          { squares[1] }
        </button>
        <button className="square" onClick={() => selectSquare(2)}>
          { squares[2] }
        </button> */}
      </div>

      <div className="board-row">
        { renderSquare(3) }
        { renderSquare(4) }
        { renderSquare(5) }
        {/* <button className="square" onClick={() => selectSquare(3)}>
          { squares[3] }
        </button>
        <button className="square" onClick={() => selectSquare(4)}>
          { squares[4] }
        </button>
        <button className="square" onClick={() => selectSquare(5)}>
          { squares[5] }
        </button> */}
      </div>

      <div className="board-row">
        { renderSquare(6) }
        { renderSquare(7) }
        { renderSquare(8) }
        {/* <button className="square" onClick={() => selectSquare(6)}>
          { squares[6] }
        </button>
        <button className="square" onClick={() => selectSquare(7)}>
          { squares[7] }
        </button>
        <button className="square" onClick={() => selectSquare(8)}>
          { squares[8] }
        </button> */}
      </div>
    </div>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-unused-vars
function calculateWhoIsNext(squares) {
  const xSquaresCount = squares.filter(r => r === 'X').length
  const oSquaresCount = squares.filter(r => r === 'O').length
  return oSquaresCount === xSquaresCount ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Usage() {
  return <Game />
}
Usage.title = 'useState: tic tac toe'

export default Usage
