import React, { useState } from 'react'

function Form({ inputText, setInputText, todos, setTodos, status, setStatus, filteredTodos, setFilteredTodos }) {


  const inputTextHandler = (e) => {
   setInputText(e.target.value);
  }

   const [ isMissingString, setIsMissingString ] = useState(false);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(inputText === ""){
      setIsMissingString(true);
    } else {
    setTodos([
      ...todos, {
        text: inputText, completed: false, id: Math.random() * 1000
      }
    ]);
    setIsMissingString(false);
    setInputText("");
  }
}

  const statusHandler = (e) => {
    // if (e.target.value === "completed"){
    //   const showCompleted = todos.filter(el => el.completed);
    //   setTodos([...showCompleted]);
    // } else if (e.target.value === "uncompleted"){
    //   const showUncompleted = todos.filter(el => !el.completed);
    //   setTodos([...showUncompleted]);
    // } else {
    //   setTodos([...todos]);
    // }
    setStatus(e.target.value);

    // if(status === 'all'){
    //   setFilteredTodos
    // }
  }

    return (
      <div class="form-box">
        <div className="form-container">
             <form>
             {/*  */}
             {/* {isMissingString ? <span className="empty-todo">Please enter a to do</span> : <span></span>} */}
             
      <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} placeholder="Add new to do.."/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    {isMissingString ? <span className="empty-todo">*Please enter a new to do item</span> : <span></span>}
        </div>
        </div>
    )
}

export default Form