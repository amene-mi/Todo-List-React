import { useCallback, useState } from "react";

function TodoForm({handleSubmit}){
    const [task,setTask]=useState('');
    const handleChange = useCallback((event)=>{
        setTask(event.target.value);
    },[]);

    const handleSubmitForm = useCallback((event)=>{
        event.preventDefault();
        handleSubmit(task);
        setTask('');
    },[task,handleSubmit]);

    return (
        <form onSubmit={handleSubmitForm}>
            <input type='text' placeholder="Enter a new task" value={task} onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}
export default TodoForm;