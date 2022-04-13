import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Task = ({task , onDelete , onToggleprop}) =>{
    return(
        <div className={`bg-info p-1 m-2 text-dark task ${task.remainder?'remainder':" "}` } onDoubleClick={()=>onToggleprop(task.id)} >
            <h4 className='d-flex justify-content-between'>{task.text}<FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/></h4>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;