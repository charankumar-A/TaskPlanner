import { useState } from "react"

export default function Taskform({addTask}) {
    const[task, setTask] = useState('');
    const [priority, setPriority] = useState('⚡ Medium Priority');
    const [category, setCategory] = useState('📋 General');

    const handlesubmit = (e) => {
        e.preventDefault(); //refresh
        addTask({text: task, priority, category, completed: false});

        //reset
        setTask('');
        setPriority('⚡ Medium Priority');
        setCategory('📋 General');
    }

    return(
        <form onSubmit={handlesubmit} className='task-form'>
            <div id="inp">
                <input type="text" placeholder="Enter the task" 
                value={task}
                onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add to List ➕</button>
                {/* <h1>{task} {priority} {category}</h1> */}
            </div>

            <div id="btns">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="🔥 High Priority">🔥 High Priority</option>
                    <option value="⚡ Medium Priority">⚡ Medium Priority</option>
                    <option value="🌿 Low Priority">🌿 Low Priority</option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="📋 General">📋 General</option>
                    <option value="💼 Work">💼 Work</option>
                    <option value="🏡 Personal">🏡 Personal</option>
                </select>
            </div>
        </form>
    )
}