import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Form = ({ input, todos, setInput, setTodos }) => {
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setTodos([
       ...todos ,{text:input, completed: false, id: Math.random() * 1000
    }]);
    setInput('');

    
  };
  return ( 
    <div className="todoInput">
           
     <form >
        <div className="form-row">
              <div className="col-6">
              
                <input value ={input} onChange={handleInputChange} id="todo" type="text" className="form-control" placeholder="Add your todo" />
                <button onClick={handleSubmit}  type='submit'>
                  <FontAwesomeIcon icon={faPlusCircle} />
                  </button>
              </div>
            <div className="col-6">
              <select name="todoSelect" id="todoSelect">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </div>
        </div>
     </form>
    </div>
   
   );
}
 
export default Form;