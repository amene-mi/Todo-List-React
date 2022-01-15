import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList({tasks}){
    if(tasks.length === 0){
        return (<div className={styles.todo__list}><p>There is no task to show</p></div>);
    }
    return (
        <div className={styles.todo__list}>
           {tasks.map(task=>{return <TodoItem key={task.id} todo={task}/>})}
        </div>
    )
}
export default TodoList;