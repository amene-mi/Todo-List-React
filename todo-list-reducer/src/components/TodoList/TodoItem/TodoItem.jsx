import useTasks from '../../../hooks/useTasks';
import styles from './TodoItem.moudles.css';

function TodoItem({todo}){
    const { state, dispatch } = useTasks();
    const handleDeleteTask = (text) => {
      dispatch({ type: "Remove", payload: { text } });
    }
    return (
        <li className={styles.todo}>
            <span className={styles.todo__text}>
            {todo.text}
            </span>
            <span className={styles.todo__delete} onClick={(e)=>{
                e.stopPropagation();
                handleDeleteTask(todo.id);
            }}>
                X
            </span>
        </li>
    )
}

export default TodoItem;