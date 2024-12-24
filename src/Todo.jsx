import React, { useState } from 'react';
import './components/todo.css';

const Todo = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');

    const handleClick = () => {
        if (value.trim()) {
            setItems((prev) => [...prev, value]);
            setValue('');
        }
    };

    const handleDelete = (index) => {
        setItems((items) => items.filter((i) => i.index != i.index))
    };

    return (
        <div className="container">
            <label>
                Enter:
                <input 
                    className='input'
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    placeholder="Add a new task" 
                    autoFocus
                />
            </label>
            <button onClick={handleClick}>Submit</button>

            <ul className="todo">
                {items.map((m, index) => (
                    <li key={index} className="todos-list">
                        {m}
                        <button onClick={() => handleDelete(index)} className="close">x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
