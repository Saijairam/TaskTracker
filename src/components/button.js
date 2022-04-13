import React from 'react'

const Button = (props) => {
    
    return (
        <div>
           <button onClick={props.onClick} style={{backgroundColor: props.color}} className='btn px-2 ' >{props.text}</button> 
        </div>
    )
}

export default Button;
