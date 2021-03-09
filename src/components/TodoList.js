import React from 'react'
import { Spring } from 'react-spring/renderprops';

import Todo from './Todo';

function TodoList({ setTodos, todos, filteredTodos }) {

    return (
        <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1600, duration: 100 }}
      >
        {props => (
        <div style={props} className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} todo={todo} todoText={todo.text} key={todo.id}/>
                ))}
            </ul>
            
        </div>
        )}
        </Spring>
    )
}

export default TodoList
