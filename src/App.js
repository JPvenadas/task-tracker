import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Addtask from "./components/Addtask"

const App = () =>{
   const [showAdd, setShowAdd] = useState(false)
   const [tasks, setTasks] = useState([])
      const addTask = ()=>{
        setShowAdd(true)
      }
      const deleteTask = (id)=>{
        setTasks(tasks.filter(task=> id !== task.id))
      }
      const togglereminder = (id)=>{
        setTasks(tasks.map(task=>id === task.id? {...task,reminder: !task.reminder}: task))
      }
      const closeAdd = () =>{
        setShowAdd(false)
      }
      const onSubmit = (task)=>{
        
         let newtask = { id: Math.floor(Math.random()*100000000), ...task}
        setTasks([...tasks, newtask])
        setShowAdd(false)
      
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