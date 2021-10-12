/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer 
const winMessage = `Player ${currentPlayer} has won!`
const tieMessage = `Game ended in a draw!`
const currentPlayerMessage = `It's ${currentPlayer}'s turn`
let gameBoard = []
let isWinner 
/*------------------------ Cached Element References ------------------------*/
const sq0 = document.getElementById('sq0')
const sq1 = document.getElementById('sq1')
const sq2 = document.getElementById('sq2')
const sq3 = document.getElementById('sq3')
const sq4 = document.getElementById('sq4')
const sq5 = document.getElementById('sq5')
const sq6 = document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')
const gameStatus = document.getElementById(message)

let square = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8]
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  gameBoard = [
  null, null, null, 
  null, null, null, 
  null, null, null]
  currentPlayer = 1
  isWinner = null
  render()
}
function render() {
  gameBoard.forEach(function(box,idx) {
    box = square[idx]
    if (currentPlayer === 1) {
      box.style.backgroundColor = '#809bce'
    } else if (currentPlayer === -1) {
      box.style.backgroundColor = '#c1bbde'
    } 
  })
  
}