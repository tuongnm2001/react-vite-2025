import './todo.css'
import TodoAdd from './TodoAdd'
import TodoData from './TodoData'
import logo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomId(1, 1000),
            name: name
        }

        setTodoList([...todoList, newTodo])
    }

    const randomId = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const deleteItem = (id) => {
        const newTodo = todoList.filter((item) => item.id !== id);
        setTodoList(newTodo)
    }
    return (
        <>
            <div className='todo-container'>
                <h2 className='title'>Todo List</h2>
                <TodoAdd
                    addNewTodo={addNewTodo}
                />

                {
                    todoList.length > 0 ?
                        <TodoData
                            todoList={todoList}
                            deleteItem={deleteItem}
                        />
                        :
                        <div className="todo-image">
                            <img src={logo} className='logo' />
                        </div>
                }
            </div>
        </>
    );
}

export default TodoApp;