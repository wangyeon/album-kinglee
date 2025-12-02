//import { useState } from 'react'
import TodoBoard from './components/TodoBoard'
function App() {
    //const [inputValue, setInputValue]=useState<string>()

    return (
        <div>
            <input type="text" onChange={(event) => console.log(event.target.value)} />
            <button>추가</button>
            <TodoBoard />
        </div>
    )
}

export default App