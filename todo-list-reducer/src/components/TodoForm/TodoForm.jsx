import { useCallback, useState } from "react";
import TodoList from '../TodoList';

function TodoForm({ handleSubmit }) {
    const [task, setTask] = useState('');
    const handleChange = useCallback((event) => {
        setTask(event.target.value);
    }, []);

    const handleSubmitForm = useCallback((event) => {
        event.preventDefault();
        handleSubmit(task);
        setTask('');
    }, [task, handleSubmit]);

    return (
        <form onSubmit={handleSubmitForm} className={styles.container}>
            <div className={styles.todo}>
                <input type='text' placeholder="Enter a new task" value={task} onChange={handleChange} />
                <button>Add</button>
            </div>
            <TodoList tasks={state} />
        </form>
    )
}
export default TodoForm;