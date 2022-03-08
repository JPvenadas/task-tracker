import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import Addtask from "./components/Addtask"

const App = () =>{
   const [showAdd, setShowAdd] = useState(false)
   const [tasks, setTasks] = useState([
        {
            id: 1,
            description: 'Outing with friends',
            day: 'Monday at 8:00 AM',
            reminder: false
        },
        {
            id: 2,
            description: 'Shopping groceries',
            day: 'Tuesday at 10:00 AM',
            reminder: false
        },
        {
            id: 3,
            description: 'Finish work assignments',
            day: 'Tuesday at 5:00 PM',
            reminder: false
        },
        {
            id: 4,
            description: 'Attend online meetings',
            day: 'Wednesday at 9:00 AM',
            reminder: false
        }
      ])
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