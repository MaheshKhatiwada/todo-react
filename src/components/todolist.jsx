import React from 'react';
import Todo from "./todo"


const TodoList = ({ todos, setTodos,filteredTodos }) => {
  return (
    <div className="todolist">
      <ul className="todolist_ul">
        {filteredTodos.map(todo =>
          (<Todo
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />)
        )}


      </ul>
    </div>
   );
}

export default TodoList;