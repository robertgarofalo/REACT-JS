import React from 'react'
import { Spring } from 'react-spring/renderprops';

function Todo({setTodos, todo, todos, todoText}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            console.log('todo id - ', todo);
            console.log('item id - ', item.id);
            if (item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
                
            }

            return item;
        }));

    };

    return (
        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 100 }}
        >
            {props => (
        <div style={props} className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`} >{todoText}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
            )}
        </Spring>
    )
}

export default Todo
