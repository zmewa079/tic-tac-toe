/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let turn 
const winMessage = `Player ${turn} has won!`
const tieMessage = `Game ended in a draw!`
const currentPlayerMessage = `It's ${turn}'s turn`
let gameBoard = []
let isWinner 
/*------------------------ Cached Element References ------------------------*/
let squares = document.querySelectorAll('#sq')
let gameStatus = document.getElementById('#message')
/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
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
    square = squares[idx]
    if (turn === 1) {
      square.style.backgroundColor = '#809bce'
    } else if (turn === -1) {
      square.style.backgroundColor = '#c1bbde'
    } 
  })
  
}