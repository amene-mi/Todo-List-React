import useTodo from "../../hooks/useTodos";
import TodoItem from "./TodoItem";
import styles from './TodoList.module.css';

function TodoList() {
  const { todos } = useTodo();
  if (todos.length === 0) {
    return <div className={styles.todo__list}><p>There is no todo to show</p></div>;
  }
  return (
    <div className={styles.todo__list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
