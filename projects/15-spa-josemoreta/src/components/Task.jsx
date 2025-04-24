import { useState } from "react"
export function Task ({description,date,newStatus}) {

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
            status === 0 ? <button onClick={() => {setStatus(1)}}>Start</button> : <button onClick={()=>{setStatus(2)}}>Complete</button> 
          }
        </div>
      </div>    
     
    )

}
