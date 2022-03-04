import { useState } from "react"
import Task from "./Task"

const Tasks = () => {

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

  return (
    <div>
       {tasks.map(task=>(
           <Task text={task.description} day ={task.day} reminder={task.reminder} />
       ))}
    </div>
  )
}

export default Tasks
