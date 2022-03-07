import Button from "./Button"
import { FaTimes } from "react-icons/fa"

const Addtask = () => {
  return (
    <div class="add-container">
        <form className="add-form">
        <Button id='add-exit' color="steelblue" text={<FaTimes/>}/>
           <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Day and time</label>
                <input type="text" placeholder="Add day and time"/>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" className=""/>
            </div>

            <input type="submit" value='Add' className='btn btn-block'/>
        </form>
    </div>
  )
}

export default Addtask
