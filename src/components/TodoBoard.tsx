import TodoItem from './TodoItem'

interface Props{
    data: string[];
}

function TodoBoard({ data } : Props) {
    return (
        <div>
            <h1> Todo List </h1>
            {
                data.map((item: string) => <TodoItem item={item} />)
            }
        </div>
    )
}

export default TodoBoard
