import Task from "./Task"

const Tasks = ({tasklist, onDelete, onToggle}) => {

  return (
    <div>
       {tasklist.map(task=>(
           <Task key={task.id} id={task.id} onToggle={onToggle} text={task.description} day ={task.day} reminder={task.reminder} onDelete={onDelete}/>
       ))}
    </div>
  )
}

export default Tasks
