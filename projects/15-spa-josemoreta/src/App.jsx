import { useState } from 'react'
import './App.css'

const TaskBoardHeader = ({ children }) => {

  return (
    <section className='taskStatusHeadingsBox'>
      <p className='taskStatusHeading'>{children}</p>
    </section>
  )
}

const Task = ({description,newStatus = 1,date}) => {
  const [st , setStatus] = useState(1)
   
    return (
     
      <div className='taskBox'>
        <div>
            {description}
        </div>
        <div className='taskDate' >{date}
            <input type='checkbox' ></input>
        </div>
      </div>    
      
    )

}


function App() {
  


  return (


    <main className='taskBoard'>
      <h1 className='appTitle'>TODO  APP</h1>

      <section className='taskBoardHeadings'>
        <TaskBoardHeader>New Task</TaskBoardHeader>
        <TaskBoardHeader>In progress</TaskBoardHeader>
        <TaskBoardHeader>Closed</TaskBoardHeader>
      </section>

      <section className='taskList'>
        <section>
          <Task description="Read Read Read"  date="04-22-2025"  />
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

export default App
