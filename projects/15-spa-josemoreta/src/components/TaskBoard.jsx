import { TaskBoardHeader } from "./TaskBoardHeader"
import { Task } from "./Task"

export function TaskBoard ({headings,todo}) {

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
       
              {todo.map((task) => {
                  
                  return (

       <>              
        <section>
            {task.status === 0 && <Task key={task.id} description={task.description} date={task.createdAt} newStatus={task.status} />}
            
        </section>
         
         <section>

          {task.status === 1 && <Task key={task.id} description={task.description} date={task.createdAt} newStatus={task.status} /> }
         
        </section>

        <section>

         {task.status === 2 && <Task key={task.id} description={task.description} date={task.createdAt} newStatus={task.status} /> }

        </section>            
    </>
    
  )})        
               }
      </section>
    </main>

  )

}