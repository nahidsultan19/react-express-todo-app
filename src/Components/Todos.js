import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>

            <ul className='list-group'>
                {todos.map(todo => <Todo key={todo._id} todo={todo}></Todo>)}
            </ul>
        </div>
    );
};

export default Todos;