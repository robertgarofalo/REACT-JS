import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ filteredTodos, setFilteredTodos ] = useState([]);

  //run once:
  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {
   filterHandler();
   saveLocalTodos();
  }, [todos, status])
  
  const filterHandler = () => {
    switch(status){
      case 'completed' : 
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;

      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;

      default: setFilteredTodos(todos);
      break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log(todos);
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos')) 
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} filterdTodos={filteredTodos} setFilteredTodos={setFilteredTodos} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;


// build a todo app with REACT - DEV ED - timestamp bookmarka - 1:33:11