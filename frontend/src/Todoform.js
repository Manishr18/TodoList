import axios from 'axios'
import React, { useState } from 'react'

export const Todoform = ({onAdd}) => {
    const[title,setTitle]=new useState('')
    const [description,setDescription]=useState('')

    const submitHandler=async (e)=>{
        e.preventDefault()
        const newTodo={title,description,completed:false}
        const res= await axios.post("http://localhost:8080/todos",newTodo)
        onAdd(res.data)
        setTitle('')
        setDescription('')

    };

  return (
    <form onSubmit={submitHandler} className="mb-3">
    <input
      type="text"
      className="form-control mb-2"
      placeholder="Task title"
      value={title}
      onChange={e => setTitle(e.target.value)}
      required
    />
    <input
      type="text"
      className="form-control mb-2"
      placeholder="Description"
      value={description}
      onChange={e => setDescription(e.target.value)}
    />
    <button className="btn btn-primary" type="submit">Add Todo</button>
  </form>
);
  
}
