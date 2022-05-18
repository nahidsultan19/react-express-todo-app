import React from 'react';

const Todo = ({ todo }) => {
    const { _id, name, description, completed } = todo;
    return (
        <div className='w-50 mx-auto d-flex'>
            <li className="list-group-item">{name} - {description}</li>
            <button>Delete</button>
        </div>
    );
};

export default Todo;