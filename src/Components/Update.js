import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const description = event.target.description.value;
        const result = { name, description };

        const url = `http://localhost:5000/todo/${id}`
        fetch(url, {
            method: 'PUT',
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
            <h3 className='text-center'>Update:{id}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' className='form-control' placeholder='Name' />
                <input type="text" name='description' className='form-control mt-2' placeholder='Description' />
                <button className='btn btn-success mt-2 w-100'>Update</button>
            </form>
        </div>
    );
};

export default Update;