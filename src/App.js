import Header from "./components/Header"
import Tasks from "./components/Tasks"

function app(){
  return(
    <div className="container">
      <Header />
      <Tasks />
    </div>
  )
}

export default app