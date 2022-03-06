import Task from "./Task"

const Tasks = ({tasklist, onDelete}) => {

  return (
    <div>
       {tasklist.map(task=>(
           <Task key={task.id} id={task.id} text={task.description} day ={task.day} reminder={task.reminder} onDelete={onDelete}/>
       ))}
    </div>
  )
}

export default Tasks
