import Button from "./Button"
import { FaTimes } from "react-icons/fa"
import { useState } from "react"


const Addtask = ({onSubmit ,onClose}) => {

  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmitTask = (e)=>{
    e.preventDefault()
    if(!description){
      alert("Please Add a Task")
      return
    }
    onSubmit({description,day,reminder})
  }

  return (
    <div class="add-container">
      <div className="add-form">
        <Button id='add-exit' onclick={onClose} color="steelblue" text={<FaTimes/>}/>
        <form onSubmit={onSubmitTask}>
           <div className="form-control">
                <label>Task</label>
                <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Day and time</label>
                <input type="text" value={day} onChange={(e)=>{setDay(e.target.value)}} placeholder="Add day and time"/>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} className=""/>
            </div>
            <input type="submit" value='Add' className='btn btn-block'/>
        </form>
      </div>
    </div>
  )
}

export default Addtask
