import React, { useState } from 'react';
export const TodoContext = React.createContext({});

export default function TodoContextProvider({ children }) {
    let id = 1;
    const [todos, setTodos] = useState([]);

    const handleAddNewTodo = text => {
        setTodos([...todos, { id: id++, text, completed: false }]);
    }

    const handleDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleToggleTodo = id => {
        const updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        setTodos([...updatedTodo]);
    }
    const value = {
        todos,
        handleAddNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}