import { useState } from "react";

const TodoAdd = (props) => {

    const { addNewTodo } = props;

    const [name, setName] = useState('')

    const handleInputChange = (e) => {
        setName(e)
    }

    const handleAdd = () => {
        addNewTodo(name);
        setName("");
    }

    return (
        <>
            <div className="todo-add-container">
                <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button className="btn-add" onClick={() => handleAdd()}>Add</button>
            </div>
        </>
    );
}

export default TodoAdd;