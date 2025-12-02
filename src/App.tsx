import { useState } from 'react'
import TodoBoard from './components/TodoBoard'
function App() {
    const [inputValue, setInputValue] = useState<string>('')
    const [todoList, setTodoList] = useState<string[]>([])

    const addItem = () => {
        if (!todoList.includes(inputValue)) {
            setTodoList([...todoList, inputValue])
        }
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={addItem}>추가</button>
            <TodoBoard data={todoList} />
        </div>
    )
}

export default App