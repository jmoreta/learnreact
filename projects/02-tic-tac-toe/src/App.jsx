import { useState } from 'react'



import {Square} from './components/Square.jsx'
import { TURNS} from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js' 
import { WinnerModal } from './components/WinnerModal.jsx'
import { resetGameStorage,saveGameToStorage } from './storage/index.js'


function App() {

  const [board, setBoard] = useState(() => {

    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)}
  )

  
    
    
    
    
  const [turn, setTurn] = useState(
    ()=>{

      const turnFromStorage = window.localStorage.getItem('turn')

      return turnFromStorage ?? TURNS.x

    }
    )
  const [winner,setWinner] = useState(null); 




  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetGameStorage()

  }

  


  const updateBoard = (index) => {

    if (board[index] || winner)   return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    
    saveGameToStorage({

      board: newBoard,
      turn:newTurn
    })

    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner){

      setWinner(newWinner)
    }else if (checkEndGame(newBoard))  {

      setWinner(false)
      
    }

  }




  return (

    <main className='board'>
      <h1>Tic tac toe</h1>
    <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {

          board.map((square, index) => {

            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
              
                {square}
              </Square>
            )
          })
        }

      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>

      </section>

        <WinnerModal winner = {winner} resetGame = {resetGame} />

    </main>



  )

}

export default App
