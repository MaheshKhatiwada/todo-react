import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ text,todos,todo ,setTodos}) => {
  
  const handleTrash = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }
  const handleComplete = () => {
    
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }));
  };

  return ( 
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button
        onClick={handleComplete}
        className="complete">
        <FontAwesomeIcon icon={faCheckCircle} />
      </button>
      
      <button
        onClick={handleTrash}
        className="trash">
        <FontAwesomeIcon icon={faTrash} />
       </button>
      </div>
   );
}
 
export default Todo;