// KENT: Copies and pastes a lot of code from 04.js
  // Instead of [ squares, setSquares ] uses [ history, setHistory ]
    // Each of these sub-arrays will be a step in history
    // [ stepNumber, setStepNumber ] = react.useState(0) — tracks what step in history we're on

  // Augment to history:
    // function selectSquare(square) {
    //   if(winner || squares[square]) return

    //   const squaresCopy = [ ...squares ]
    //   squaresCopy[square] = nextValue

    //   const historyCopy = [ ...history ] — Problem: We don't want to copy the whole history
    //   Solution: const historyCopy = history.slice(0, stepNumber + 1)

    //   historyCopy.push(squaresCopy)
    //   setHistory(historyCopy)
    //   setStepNumber(stepNumber + 1)
    // }

  // Make an unordered list of all moves:
    // const moves = history(.map((s, idx ) => (
    //   <button>Go to move #{ idx + 1 }</button>
    // )))

    // Assign <li key={ stepNumber }>
    //          </li><button onClick = onclick={ _ => setStepNumber(idx) }> — safe to use idx as key here bc it's not jsx(?)

  // Can track hook state in dev tools; Kent is using the Alpha version (https://github.com/bvaughn/react-devtools-experimental)

// useState: tic tac toe
// 💯 add game history feature
// http://localhost:3000/isolated/exercises-final/04.extra-2

import React from 'react'

function Board({squares, onClick}) {
  function renderSquare(i) {
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game() {
  const [history, setHistory] = React.useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = React.useState(0)

  const currentSquares = history[stepNumber]
  const winner = calculateWinner(currentSquares)
  const nextValue = calculateWhoIsNext(currentSquares)

  function selectSquare(square) {
    if (winner || currentSquares[square]) {
      return
    }

    const newHistory = history.slice(0, stepNumber + 1)
    const squares = [...currentSquares]

    squares[square] = nextValue
    setHistory([...newHistory, squares])
    setStepNumber(newHistory.length)
  }

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (currentSquares.every(Boolean)) {
    status = `Scratch: Cat's game`
  } else {
    status = `Next player: ${nextValue}`
  }

  const moves = history.map((step, stepNumber) => {
    const desc = stepNumber ? `Go to move #${stepNumber}` : 'Go to game start'
    return (
      <li key={stepNumber}>
        <button onClick={() => setStepNumber(stepNumber)}>{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={currentSquares} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWhoIsNext(squares) {
  const xSquaresCount = squares.filter(r => r === 'X').length
  const oSquaresCount = squares.filter(r => r === 'O').length
  return oSquaresCount === xSquaresCount ? 'X' : 'O'
}

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
