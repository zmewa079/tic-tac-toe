/*-------------------------------- Constants --------------------------------*/
let winningCombos 


/*---------------------------- Variables (state) ----------------------------*/
let turn 
let gameBoard = []
let isWinner 
/*------------------------ Cached Element References ------------------------*/
let squares = document.querySelectorAll('.cube')
let gameStatus = document.getElementById('#message')
let boardEl = document.querySelector('.board')
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/
const winMessage = () => `Congratulations!! Player ${turn} has won!`
const tieMessage = () =>`It's a tie!`
const currentPlayerMessage = () => `It's ${turn}'s turn`

init()

function init() {
  gameBoard = [
  null, null, null, 
  null, null, null, 
  null, null, null]
  turn = 1
  isWinner = null
  render()
}

function render() {
  squares.forEach(function(square,idx) {
    // square = squares[idx]
    if (gameBoard[idx] === 1) {
      square.innerText = 'X'
      square.style.backgroundColor = '#809bce'
    } else if (gameBoard[idx] === -1) {
      square.innerText = 'O'
      square.style.backgroundColor = '#c1bbde'
    } 
  })
  
  if (isWinner === 1 || isWinner === -1) {
    winMessage()
  } else if (isWinner === 'T') {
    tieMessage()
  } else {
    currentPlayerMessage()
  }
}
  function handleClick(evt) {
  if (gameBoard[parseInt((evt.target.id.replace('sq', '')))] !== null) {
    return
  }
  gameBoard[(evt.target.id.replace('sq', ''))] = turn
  turn = turn * -1
  render()
  }

  winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
  ]