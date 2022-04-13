import React,{useState} from 'react';

function Addtask({onAdd}) {
    const [text,settext] = useState("");
    const [day,setday]=useState("");
    const [remainder,setremainder] = useState(false);

   const onSubmit = (e)=>{
       e.preventDefault();
       if(!text){
           alert("Fill the task field");
           return
       }

       onAdd({text, day, remainder});
       settext("");
       setday("");
       setremainder(false);
   }

  return (
      <form className='add-form' onSubmit={onSubmit} >
        <div className='form'>
            <label className='form-label'>Task</label>
            <br/>
            <input type="text" className='form-control' placeholder="Add Task"
            value={text} onChange={(e)=>settext(e.target.value)}/>
        </div>
        <div className='form'>
            <label className='form-label'>Day and time</label>
            <br/>
            <input type="text" className='form-control' placeholder="Add Day and time"
            value={day} onChange={(e)=>setday(e.target.value)}/>
        </div>
        <div className='form'>
            <label>Set Remainder</label>
            <br/>
            <input type="checkbox" checked={remainder}
            value={remainder} onChange={(e)=>setremainder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Save Task" className='btn btn-dark'/>
      </form>
  )
  
}

export default Addtask;


