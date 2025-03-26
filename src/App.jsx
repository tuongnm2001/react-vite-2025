import './Components/todo/todo.css'
import TodoAdd from './Components/todo/TodoAdd'
import TodoData from './Components/todo/TodoData'
import logo from './assets/react.svg'

const App = () => {

  const name = "Nguyen Minh Tuong";

  const data = {
    province: 'Can Tho',
    age: 24
  }

  return (
    <>
      <div className='todo-container'>
        <h2 className='title'>Todo List</h2>
        <TodoAdd />
        <TodoData name={name} data={data} />
        <div className="todo-image">
          <img src={logo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
