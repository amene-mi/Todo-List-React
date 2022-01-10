import TodoItem from './TodoItem';

function TodoList({ todos }){
    if(todos.length === 0){
        return (<p>There is no task to show</p>);
    }
    return (
        <div>
           { todos.map(todo=>(<TodoItem key={todo.id} todo={todo}/>))}
        </div>
    )
}
export default TodoList;