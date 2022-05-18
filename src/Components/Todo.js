import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Todo = ({ todo }) => {
    const { _id, name, description, completed } = todo;
    const [todos, setTodos] = useState([])
    const [isReload, setIsReload] = useState(false);
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        const url = `http://localhost:5000/todos`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [isReload])

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure you want to delete?`)
        if (proceed) {
            const url = `http://localhost:5000/todo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsReload(!isReload)
                })
        }
    }

    const handleStrike = id => {
        console.log('strike', id)
    }


    return (
        <div className='w-50 mx-auto d-flex'>
            <li className="list-group-item w-50 m-2">{name} - {description}</li>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger m-2'>Delete</button>
            <p className='m-2'><Link to={`/update/${_id}`} className="btn btn-secondary ">Update</Link></p>
            {/* <button onClick={() => handleStrike(name)} className='btn btn-warning'>Completed</button> */}
        </div>
    );
};

export default Todo;