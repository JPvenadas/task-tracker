

const Button = ({text, color, onclick}) => {
  return (
    <button onClick={()=>{onclick()}} className="btn" style={{background: color}}>
        {text}
    </button>
  )
}

export default Button
