import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = React.createContext({});

export default function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const handleAddNewTodo = text => {
        setTodos([...todos, { id: uuidv4(), text, completed: false }]);
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
    const handleEditTodo = (id, text) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
        setTodos([...updatedTodos]);
    }
    const value = {
        todos,
        handleAddNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleEditTodo,
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}