import { useCallback, useState } from "react";
import TodoList from "../TodoList";
import useTasks from "../../hooks/useTasks";
import styles from "./TodoForm.module.css";

function TodoForm() {
  const { state, dispatch } = useTasks();
  const handleAddNewTask = useCallback(
    (text) => {
      dispatch({ type: "ADD_TODO", payload: { text } });
    },
    [dispatch]
  );

  const [task, setTask] = useState("");
  const handleChange = useCallback((event) => {
    setTask(event.target.value);
  }, []);

  const handleSubmitForm = useCallback(
    (event) => {
      event.preventDefault();
      handleAddNewTask(task);
      setTask("");
    },
    [task, handleAddNewTask]
  );

  return (
    <form onSubmit={handleSubmitForm} className={styles.container}>
      <div className={styles.todo}>
        <input className={styles.input}
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={handleChange}
        />
        <button className={styles.button}>Add</button>
      </div>
      <TodoList tasks={state} />
    </form>
  );
}
export default TodoForm;
