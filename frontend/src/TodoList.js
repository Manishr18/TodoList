import axios from 'axios';
import React from 'react'

export const TodoList = ({todos,onToggle,onDelete,onUpdate,setEdit}) => {
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
    const handleUpdate=async(todo)=>{
      setEdit(todo)
    }
      
  return (
    <ul className="list-group">
    {todos.map(todo => (
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>{todo.title}</strong> — {todo.description}
          <br />
          
          
          <br />
          <span className={`badge ms-2 ${todo.completed ? 'bg-success' : 'bg-secondary'}`}>
            {todo.completed ? 'Done' : 'Pending'}
          </span>
          <small className="text-muted">
            {todo.updateAt && todo.createdAt && todo.updateAt !== todo.createdAt
            ? `Updated at: ${new Date(todo.updateAt).toLocaleString()}`
            : `Created at: ${new Date(todo.createdAt).toLocaleString()}`}
            </small>

        </div>
        <div>
          <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleToggle(todo)}>
            {todo.completed ? 'Undo' : 'Mark Done'}
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(todo.id)}>Delete</button>

          <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleUpdate(todo)}>Edit</button>
        </div>
      </li>
    ))}
  </ul>
);
  
}