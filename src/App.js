import React,{useState,useEffect} from 'react';
import './App.css';
import Form from "./components/form";
import TodoList from './components/todolist';


function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect(() => {
    getTodos();
  }, [])
  useEffect(() => {
    saveTodos();
    handleFilter();
  }, [todos,status])

  const handleFilter=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed===true))
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo=> todo.completed===false))
        break;
      default:
        setFilteredTodos(todos)
    }
  }

  const saveTodos=()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }
  return (
    <div className="container">
      <h1>Mahesh's Todo List</h1>
      <br />
      <h2>You have {filteredTodos.length} todo lists!!!</h2>


      <Form
        input={input}
        todos={todos}
        setInput={setInput}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}

      />
    </div>

  );
}

export default App;
