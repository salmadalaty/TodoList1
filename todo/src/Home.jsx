import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios';

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }



    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0
                    ?
                    <div><h2>No Record</h2></div>
                    :
                    todos.map(todo => (
                        <div className='task'>
                            <div className='checkbox'>
                                <button type='submit' onClick={() => handleEdit(todo._id)}>Edit</button>
                            </div>
                            <p>{todo.task}</p>
                            <div className='checkbox'>
                                <button type='submit' onClick={() => handleDelete(todo._id)}>delete</button>
                            </div>

                        </div>
                    ))
            }
        </div>
    )
}

export default Home
