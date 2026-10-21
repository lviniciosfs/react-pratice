import { useState } from 'react'; 

export default function TodoList() {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<string>([]);
    return(
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => setTodos([value, ...todos])}>Add</button>
            {todos.map((t,i) => (
                    <div key={i}>
                        <span >{t}</span><button onClick={() => setTodos(todos.filter((a, j) => j !== i))}>X</button>
                    </div>
                )
            )}
        </>
    )
}