
import './App.css'


import { TaskBoard } from './components/TaskBoard'
import { TODOS, TASK_STATUS } from './js/constant'




function App() {

  
  return (

    <TaskBoard headings={['New', 'In Progress', 'Complete']} todo={TODOS}  />
    
  )
}

export default App
