import TodoItem from './TodoItem';

function TodoList({tasks}){
    if(tasks.length === 0){
        return (<p>There is no task to show</p>);
    }
    return (
        <div>
           {tasks.map((task,index)=>{
           return <TodoItem key={index} todo={task}/>
           })}
        </div>
    )
}
export default TodoList;