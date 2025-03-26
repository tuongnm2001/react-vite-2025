

const TodoData = (props) => {

    const { name, data } = props
    return (
        <>
            <div className="data-container">
                <div>Play Footbal</div>
                <div>Watching TV</div>
                <div>{name}</div>
                <div>{data.province}</div>
            </div>
        </>
    );
}

export default TodoData;