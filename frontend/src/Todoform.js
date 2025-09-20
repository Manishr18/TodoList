
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Todoform = ({onAdd,onUpdate,onEdit,setEdit}) => {
    const[title,setTitle]= useState('')
    const [description,setDescription]=useState('')
    
      useEffect(()=>{
        if(onEdit){
          setTitle(onEdit.title)
          setDescription(onEdit.description)
        }
      },[onEdit])

    const submitHandler=async (e)=>{
        e.preventDefault()
        const Todo={id: onEdit?.id,
          title,
          description,
          completed: onEdit?.completed || false,
        };
        if(onEdit){
          try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/todos/${onEdit.id}`, Todo);
            onUpdate(res.data)
            setEdit(null)
          } catch (err) {
            console.error("Failed to update todo:", err);
            alert("Failed to update todo");
          }
         
         
        }
        else{
          try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/todos`, Todo);
            onAdd(res.data);
          } catch (err) {
            console.error("Failed to add todo:", err);
            alert("Failed to add todo");
          }
        }
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
    <button className="btn btn-primary" type="submit">{onEdit?'Update' :'Add'}</button>
    {onEdit && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => {
            setEdit(null);
            setTitle('');
            setDescription('');
          }}
        >
          Cancel
        </button>)}
  </form>
);
  
}