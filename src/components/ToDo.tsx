import { useState } from "react";

const ToDo = () => {

    const [toDoText, settoDoText] = useState('')
    const [toDoList, settoDoList] = useState<string[]>([])

    const addTodo = () => {
        settoDoList([...toDoList, toDoText])
    }

    return (
        <div>
            <input type="text" value={toDoText} onChange={(e) => settoDoText(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {toDoList.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDo;