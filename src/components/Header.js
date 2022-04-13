import React from 'react'
import Button from './button';

const Header = ({toshow , showadd}) => {
   
    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button onClick={toshow} color={showadd ? 'red' : 'green'} text={showadd ? 'Close' : 'Add'}/>
        </div>
    )
}

export default Header
