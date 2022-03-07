

const Button = ({text, color, onclick,id}) => {
  return (
    <button onClick={()=>{onclick()}} className={`btn ${id}`} style={{background: color}}>
        {text}
    </button>
  )
}

export default Button
