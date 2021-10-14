/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8]
]

/*---------------------------- Variables (state) ----------------------------*/
let turn 
let gameBoard = []
let isWinner 

/*------------------------ Cached Element References ------------------------*/
let squares = document.querySelectorAll('.cube')
let message = document.getElementById('message')
let boardEl = document.querySelector('.board')
let resetBtn = document.getElementById('reset')
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)
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
    // square = squares[idx]
    if (gameBoard[idx] === 1) {
      square.innerText = 'X'
      square.style.backgroundColor = '#809bce'
    } else if (gameBoard[idx] === -1) {
      square.innerText = 'O'
      square.style.backgroundColor = '#c1bbde'
    } else if (gameBoard[idx] === null) {
      square.innerText = ''
      square.style.backgroundColor = 'white'
    }
  })
  
  if (!isWinner) {
    message.innerText = `It is ${turn === 1 ? "X" : "O"}'s turn!`
  } else if (isWinner === 'T') { 
    message.innerText = `It's a tie!`
  } else {
    message.innerText = `Congratulations!!! ${isWinner === 1 ? "X" : "O"} won!!`
  }
}
  
function handleClick(evt) {
  if (gameBoard[parseInt((evt.target.id.replace('sq', '')))] !== null) {
    return
  } else if (isWinner !== null) {
    return
  } else {
  }

  gameBoard[(evt.target.id.replace('sq', ''))] = turn
  turn = turn * -1

  let winner = getWinner()
  
  function getWinner() {
    
    winningCombos.forEach(function(array) {
      
      let idx1 = array[0]
      let idx2 = array[1]
      let idx3 = array[2]
      let theWinner = gameBoard[idx1]
      let sum = Math.abs(gameBoard[idx1] + gameBoard[idx2] + gameBoard[idx3])
      if (sum === 3){
        isWinner=theWinner
        return theWinner
      }
      else if(gameBoard.includes(null)) {
        return 
      }
      else {
        isWinner = "T"
        return "T"
      }
      
    })
  }
  render()
  }

  





