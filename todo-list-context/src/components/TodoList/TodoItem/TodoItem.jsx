import { useState } from 'react';
import useTodo from "../../../hooks/useTodos";
import styles from './TodoItem.module.css';

function TodoItem({ todo }) {
  const { handleDeleteTodo, handleToggleTodo, handleEditTodo } = useTodo();
  const [show, setShow] = useState(true);
  const [updateTodo, setUpdateTodo] = useState(todo.text);
  const [changeStyle, setChangeStyle] = useState(styles.todo);
  //todo.completed ? setChangeStyle(styles.todo__completed) : setChangeStyle(styles.todo);

  return (
    <li className={changeStyle} >
      {show ? (
        <>
          <div className={styles.todo__text}>
            {todo.text}
            <div className={styles.todo__status}
              onClick={() => {
                handleToggleTodo(todo.id);
                todo.completed ? setChangeStyle(styles.todo__completed) : setChangeStyle(styles.todo)
              }}>
              {todo.completed ? "completed" : "todo"}
            </div>
          </div>
          <div className={styles.todo__action}>
            <div className={styles.todo__delete}
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTodo(todo.id);
              }}>
              X
            </div>
            <div className={styles.todo__update} onClick={() => setShow(!show)}>
              Edit
            </div>
          </div>
        </>
      ) : (
        <>
          <input className={styles.todo__input} value={updateTodo} onChange={(e) => setUpdateTodo(e.target.value)} />
          <button className={styles.btn__update} onClick={e => {
            e.preventDefault();
            handleEditTodo(todo.id, updateTodo);
            setShow(!show);
          }}>Update
          </button>
        </>
      )}
    </li>
  )
}

export default TodoItem;
