import Button from "./Button"

 
const Header = ({onAdd}) => {
  return (
    <div className="header">
        <h1>Task tracker</h1>
        <Button text='Add' onclick={onAdd} color='steelblue'/>
    </div>
  )
}

export default Header
