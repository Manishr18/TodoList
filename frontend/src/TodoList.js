import axios from 'axios';
import React from 'react'

export const TodoList = ({todos,onToggle,onDelete}) => {
    const handleToggle=async (todo)=>{
        const updated={...todo,completed: !todo.completed};
        const res=await axios.put(`http://localhost:8080/todos/${todo.id}`,updated)
        onToggle(res.data)
    };
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/todos/${id}`);
          onDelete(id);
        } catch (error) {
          console.error("Delete failed:", error);
          alert("Failed to delete todo. See console for details.");
        }
      };
      
  return (
    <ul className="list-group">
    {todos.map(todo => (
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>{todo.title}</strong> — {todo.description}
          <br />
          <small className="text-muted">Created at: {todo.createdAt}</small>
          <br />
          <span className={`badge ms-2 ${todo.completed ? 'bg-success' : 'bg-secondary'}`}>
            {todo.completed ? 'Done' : 'Pending'}
          </span>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleToggle(todo)}>
            {todo.completed ? 'Undo' : 'Mark Done'}
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);
  
}
