import { useState } from 'react'
import './App.css'

const TASK_STATUS={
  new: 0,
  inProgress:1,
  complete:2
} 

const TODOS = [
  {
    id: 1,
    description: 'Leer el Manual de React',
    status: TASK_STATUS.new,
    createdAt: '23-04-2025',
    updatedAt: '24-04-2025'
  },
  {
    id: 2,
    description: 'Crear los Componentes de la APP',
    status: TASK_STATUS.inProgress,
    createdAt: '23-04-2025',
    updatedAt: '24-04-2025'
  },
  {
    id: 3,
    description: 'Hacer la APP Interactiva',
    status: TASK_STATUS.complete,
    createdAt: '23-04-2025',
    updatedAt: '24-04-2025'
  }
]


const TaskBoard =({headings,todo}) => {



  return(

    <main className='taskBoard'>
      <h1 className='appTitle'>TODO  APP</h1>

      <section className='taskBoardHeadings'>
        
        {
          headings.map((title) => {
          
            return (
          <TaskBoardHeader key={title}>{title}</TaskBoardHeader>)
        })
  
      }
      </section>

      <section className='taskList'>
        <section>
            {todo.map((task) => {
              return(

                task.status === 0 ? <Task key={task.id} description={task.description} date={task.createdAt} newStatus={task.status}/> :''  
              )
            })}
           
        </section>
        <section>
          In Progress
        </section>
        <section>
          Closed
        </section>
      </section>
    </main>

  )

}

const TaskBoardHeader = ({ children }) => {

  return (
    <section className='taskStatusHeadingsBox'>
      <p className='taskStatusHeading'>{children}</p>
    </section>
  )
}

const Task = ({description,date,newStatus}) => {

    const [status,setStatus]=useState(newStatus)

    return (
   
      <div className='taskBox'>
        <div className='taskDate'>
          {date}
        </div>
        <div>
            {description}
        </div>
        <div className='taskControl'>
          {
            status === 0 ? <button>Start</button> : <button>Complete</button> 
          }

        </div>
      </div>    
     
    )

}





function App() {

  
  return (

    <TaskBoard headings={['New', 'In Progress', 'Complete']} todo={TODOS}  />
    
  )
}

export default App
