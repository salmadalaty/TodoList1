import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [task, setTask] = useState(""); // Initialize state with an empty string

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    return (
        <div className='create_from'>
            <input
                type="text"
                placeholder='Enter Task'
                // value={task} // Bind input to state
                onChange={(e) => setTask(e.target.value)} // Update state on change
            />
            <button type="submit" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
