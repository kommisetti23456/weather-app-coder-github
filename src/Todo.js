import React from "react";

const Todo = ({ list, onDelete }) => {
    return (
        <div>
            {list.map((item, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0">{item}</h5>
                    <button onClick={() => onDelete(index)} className="btn btn-danger btn-sm">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Todo;

