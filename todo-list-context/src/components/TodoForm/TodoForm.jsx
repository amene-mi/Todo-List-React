import { useCallback, useState } from "react";
import useTodo from "../../hooks/useTodos";
import styles from './TodoForm.module.css';
import TodoList from '../TodoList';

function TodoForm() {
  const { handleAddNewTodo } = useTodo();
  const [todo, setTodo] = useState("");

  const handleChange = useCallback((event) => {
    setTodo(event.target.value);
  }, []);

  const handleSubmitForm = useCallback(
    (event) => {
      event.preventDefault();
      handleAddNewTodo(todo);
      setTodo("");
    },
    [handleAddNewTodo, todo]
  );

  return (
    <form onSubmit={handleSubmitForm} className={styles.container}>
      <div className={styles.todo}>
        <input className={styles.input}
          type="text"
          placeholder="Enter a  new Todo"
          value={todo}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">Add</button>
      </div>
      
      <TodoList/>
    </form>
  );
}
export default TodoForm;
