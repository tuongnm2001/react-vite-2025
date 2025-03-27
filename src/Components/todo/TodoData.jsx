

const TodoData = (props) => {

    const { todoList, deleteItem } = props;

    const handleDelete = (id) => {
        deleteItem(id)
    }

    return (

        <div className="data-container">
            {
                todoList.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div className="content">
                                {item.name}
                                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    );
}

export default TodoData;