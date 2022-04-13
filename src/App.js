import React ,{useState,useEffect} from 'react';
import './style.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';


function App() {
   //Global state for easy access of tasks
    const [showAddtask , setshowAddtask ] = useState(false);
   const [tasks,setTasks] = useState([]);

   useEffect(()=>{
     const getTasks = async ()=>{
       const Tasksfromserver = await fetchTasks();
       setTasks(Tasksfromserver);
     }
     getTasks()

   },[])

   //Fetch Task
   const fetchTasks = async ()=>{
    const res = await fetch(' http://localhost:5000/tasks')
    const data = await res.json();
    console.log(data);
    console.log(res);
    return data;
  }

  //Fetch task on backend server
  const fetchTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    console.log(data);
    console.log(res);
    return data;
  }
   
  //Add task
  const  addtask = async (task)=>{

    const res = await fetch(' http://localhost:5000/tasks',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(task)
    })
     const data = await res.json();
     console.log(data);
     setTasks([...tasks,data]);

    //   const id = Math.floor(Math.random()*10000)+1;
    //   console.log(id);
    //   const newTask = {id,...task};
    //   setTasks([...tasks,newTask]);
   
  }

  //Delete Task
   const deleteTask = async (id)=>{
       await fetch(` http://localhost:5000/tasks/${id}`,{
           method:"DELETE"
       })
       
      setTasks(tasks.filter((item)=>item.id!==id))
  }
  //Toggle Remainder
  const toggleRemainder =  async (id)=>{
      const tasktoToggle = await fetchTask(id);
      const uptask = {...tasktoToggle,remainder:!tasktoToggle.remainder}

      const res = await fetch(` http://localhost:5000/tasks/${id}`,{
          method:"PUT",
          headers:{
              'Content-type':'application/json'
          },
          body:JSON.stringify(uptask)

      })

      const data = await res.json();

      setTasks(tasks.map((item)=>item.id===id?{...item,remainder:data.remainder}:item))
  }

 return(
    <div className='container border border-2 mt-4 p-3'>
        <Header className="title" toshow={()=>setshowAddtask(!showAddtask)} showadd={showAddtask}/>
       {showAddtask && <Addtask onAdd={addtask}/>}
        {tasks.length>0?(<Tasks task={tasks} onDelete={deleteTask}
        onToggle = {toggleRemainder}/>):
        "No Tasks to show"}
        
    </div>
  );
}


export default App;
