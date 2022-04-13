import React from 'react'
import Task from './Task'

const Tasks = ({task , onDelete , onToggle}) => {
  
    return (
     <div>
        {task.map((task)=>(
           <Task key={task.id} task={task} onDelete={onDelete} onToggleprop={onToggle}/>
        ))}
     </div>
    )
}

export default Tasks;
