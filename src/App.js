import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Todo from './Todo';

function App() {
    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return; // Prevent adding empty tasks
        const newTodos = [...todo, task];
        setTodo(newTodos);
        setTask("");
    }

    const handleDelete = (index) => {
        const updatedTodos = todo.filter((_, i) => i !== index);
        setTodo(updatedTodos);
    }

    return (
        <div className="App">
            <div className="container mt-4">
                <h2 className="text-center">Todo App</h2>
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title text-center'>TO DO APP MANAGEMENT</h3>
                        <form onSubmit={handleSubmit} className='input-group mb-3'>
                            <input
                                type="text"
                                placeholder='Enter the task'
                                value={task}
                                onChange={handleInputChange}
                                className='form-control'
                            />
                            <button type='submit' className='btn btn-primary'>Add</button>
                        </form>
                        <Todo list={todo} onDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

