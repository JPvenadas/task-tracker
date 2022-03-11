import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Addtask from "./components/Addtask"

const App = () =>{
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
     fetchTasks().then(result =>{
       setTasks(result)
     })
  },[])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    let data = res.json();
   return data
  } 

  const addTask = ()=>{
    setShowAdd(true)
  }
  const deleteTask = async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method: 'DELETE'})
    setTasks(tasks.filter(task=> id !== task.id))
  }
  const togglereminder = (id)=>{
    setTasks(tasks.map(task=>id === task.id? {...task,reminder: !task.reminder}: task))
  }
  const closeAdd = () =>{
    setShowAdd(false)
  }
  const onSubmit = async (task)=>{
    const res = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(task)
    })
    let newtask = await res.json()
    setTasks([...tasks, newtask])
  }
  return(
    <div className="container">
      {showAdd? <Addtask onSubmit={onSubmit} onClose={closeAdd}/> : ''}
      <Header onAdd={addTask}/>
      {tasks.length > 0? <Tasks tasklist={tasks} onToggle={togglereminder} onDelete={deleteTask}/>:'No task to show'}
    </div>
  )
}

export default App