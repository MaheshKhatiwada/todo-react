import React,{useState} from 'react';
import './App.css';
import Form from "./components/form";
import TodoList from './components/todolist';


function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="container">
      <h1>Mahesh's Todo List</h1>
      <br />
      <h2>You have {todos.length} todo lists!!!</h2>
      
      
      <Form
        input={input}
        todos={todos}
        setInput={setInput}
        setTodos={setTodos}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
      
      />
    </div>
    
  );
}

export default App;
