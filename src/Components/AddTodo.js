import React from 'react';

import { useNavigate } from 'react-router-dom';


const AddTodo = () => {
    const navigate = useNavigate()


    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const description = event.target.description.value;
        const result = { name, description }

        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/todos')
            })
    }

    return (
        <div className='w-25 mx-auto'>
            <h2 className='text-center fw-bold'>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' className='form-control' placeholder='Name' />
                <input type="text" name='description' className='form-control mt-2' placeholder='Description' />
                <button className='btn btn-success mt-2 w-100'>Add Item</button>
            </form>
        </div>
    );
};

export default AddTodo;