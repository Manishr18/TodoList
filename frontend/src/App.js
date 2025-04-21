import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import { Todoform } from './Todoform';
import { TodoList } from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todos,setTodos]=useState([]);
  const[edit,setEdit]=useState(null);
  

  useEffect(()=>{
    axios.get("http://localhost:8080/todos")
    .then((res)=> setTodos(res.data))
    .catch((err)=> console.log(err))
  },[])
  const addtodo=(todo)=> setTodos([...todos,todo])

  const updatetodo=async (updated)=>{
    
    setTodos(todos.map(todo => todo.id === updated.id ?updated : todo));
    

  }

  const deletetodo=(id)=>{
    setTodos(todos.filter(todo => todo.id !== id ))
  }


  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">📝 My Todo List</h2>
    <Todoform onAdd={addtodo} onUpdate={updatetodo} onEdit={edit} setEdit={setEdit} />


    <TodoList todos={todos} onDelete={deletetodo} onToggle={updatetodo} setEdit={setEdit} />

  </div>
);
  
}

export default App;