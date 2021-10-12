/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let turn 
let gameBoard = []
let isWinner 
/*------------------------ Cached Element References ------------------------*/
let squares = document.querySelectorAll('#sq')
let gameStatus = document.getElementById('#message')
/*----------------------------- Event Listeners -----------------------------*/


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