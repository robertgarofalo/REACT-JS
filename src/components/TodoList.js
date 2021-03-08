import React from 'react'

import Todo from './Todo';

function TodoList({ setTodos, todos, filteredTodos }) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} todo={todo} todoText={todo.text} key={todo.id}/>
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList
