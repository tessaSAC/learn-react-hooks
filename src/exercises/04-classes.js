// useState: tic tac toe
import React from 'react'

// If you'd rather practice refactoring a class component to a function
// component with hooks, then go ahead and do this exercise.
//
// This one's not rendered to the exercise, page, so you can go to this
// component's isolated page here:
// http://localhost:3000/isolated/exercises/04-classes

// 🦉 You've learned all the hooks you need to know to refactor this Board
// component to hooks. So, let's make it happen!



// KENT: Moves from top to bottom while refactoring
  // Move everything from the class into the function and remove references to `this`
function Board() {  // any prop defaults would go in params
  React.useEffect(() => {
    // If there were a `componentDidMount` the body goes here

    return () => {
      // Any `componentWillUnmount` stuff
    }
  }, [])  // If it really, really, REALLY should only run on mount, pass an empty deps array
  // Tricky to move from lifecycle hooks to useEffect bc you really need to consider how to group concerns(???)
  // Remember also it does wait for the browser to paint, unlike lifecycle hooks
  // If you REALLY need it to work exactly the same as lifecycle hooks use `useLayoutEffect` instead


  const [ squares, setSquares ] = React.useState(Array(9).fill(null))  // NB: Can use hooks to make a `setState`-like function or use a `reactLegacySetState`-or-something-like-that package

  // Anywhere you see `this` you know there's a problem
  function selectSquare(square) {
    const nextValue = calculateWhoIsNext(squares)
    if (calculateWinner(squares) || squares[square]) {
      return
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares({squares: squaresCopy})
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={ () => selectSquare(i) }>
        { squares[i] }
      </button>
    )
  }

  function render() {
    const nextValue = calculateWhoIsNext(squares)
    const winner = calculateWinner(squares)
    let status
    if (winner) {
      status = `Winner: ${winner}`
    } else if (squares.every(Boolean)) {
      status = `Scratch: Cat's game`
    } else {
      status = `Next player: ${nextValue}`
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          { renderSquare(0) }
          { renderSquare(1) }
          { renderSquare(2) }
        </div>
        <div className="board-row">
          { renderSquare(3) }
          { renderSquare(4) }
          { renderSquare(5) }
        </div>
        <div className="board-row">
          { renderSquare(6) }
          { renderSquare(7) }
          { renderSquare(8) }
        </div>
      </div>
    )
  }
}

// KENT: If there were propTypes
// Board.propTypes = {}

// class Board extends React.Component {
//   state = {squares: Array(9).fill(null)}

//   selectSquare(square) {
//     const {squares} = this.state
//     const nextValue = calculateWhoIsNext(squares)
//     if (calculateWinner(squares) || squares[square]) {
//       return
//     }
//     const squaresCopy = [...squares]
//     squaresCopy[square] = nextValue
//     this.setState({squares: squaresCopy})
//   }
//   renderSquare = i => (
//     <button className="square" onClick={() => this.selectSquare(i)}>
//       {this.state.squares[i]}
//     </button>
//   )

//   render() {
//     const {squares} = this.state
//     const nextValue = calculateWhoIsNext(squares)
//     const winner = calculateWinner(squares)
//     let status
//     if (winner) {
//       status = `Winner: ${winner}`
//     } else if (squares.every(Boolean)) {
//       status = `Scratch: Cat's game`
//     } else {
//       status = `Next player: ${nextValue}`
//     }

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }

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
