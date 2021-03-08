import React from 'react'

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
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`} >{todoText}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
    )
}

export default Todo
