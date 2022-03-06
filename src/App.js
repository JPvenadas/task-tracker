import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"


const App = () =>{

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
        console.log('add')
      }
      const deleteTask = (id)=>{
        setTasks(tasks.filter(task=> id !== task.id))
      }
  return(
    <div className="container">
      <Header onAdd={addTask}/>
      {tasks.length > 0? <Tasks tasklist={tasks} onDelete={deleteTask}/>:'No task to show'}
    </div>
  )
}

export default App