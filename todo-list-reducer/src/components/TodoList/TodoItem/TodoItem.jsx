import useTasks from "../../../hooks/useTasks";
import styles from "./TodoItem.module.css";

function TodoItem({ todo }) {
  const { state, dispatch } = useTasks();
  const handleDeleteTask = (id) => {
    debugger;
    dispatch({ type: "Remove", payload: { id } });
  };
  return (
    <li className={styles.todo}>
      <div className={styles.todo__text}>{todo.text}</div>
      <div className={styles.todo__action}>
        <div
          className={styles.todo__delete}
          onClick={(e) => {
            handleDeleteTask(todo.id);            
          }}
        >
          X
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
