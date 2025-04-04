import { useState } from 'react'


const TURNS = {

  x: 'x',
  o: 'o'
}

//Componente Square

const Square = ({ children, isSelected,updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {

    updateBoard(index)
  }
  

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )

}
// Componente Square



function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(TURNS.x)
  
  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

  }


  return (

    <main className='board'>
      <h1>Tic tac toe</h1>

      <section className='game'>
        {
         
         board.map((_, index) => {

            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                
              </Square>
            )
          })
        }

      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>

      </section>

    </main>



  )

}

export default App
