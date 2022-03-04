import Button from "./Button"

const add = () =>{
  console.log('added')
} 
const Header = () => {
  return (
    <div className="header">
        <h1>Task tracker</h1>
        <Button text='Add' onclick={add} color='steelblue'/>
    </div>
  )
}

export default Header
