
import {FaTimes} from 'react-icons/fa'

const Task = ({text,day, reminder,id, onDelete, onToggle}) => {
  return (
    <div className={`task ${reminder? 'reminder': ''}`} onDoubleClick={()=>(onToggle(id))}>
        <h3>{text} <FaTimes onClick={()=>(onDelete(id))} style={{color: 'red'}}/></h3>
        <p>{day}</p>
    </div>
  )
}

export default Task
