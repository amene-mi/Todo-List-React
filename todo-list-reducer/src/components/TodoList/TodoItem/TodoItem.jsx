import useTasks from '../../../hooks/useTasks';
function TodoItem({todo}){
    const { state, dispatch } = useTasks();
    const handleDeleteTask = (text) => {
      dispatch({ type: "Remove", payload: { text } });
      return state;
    }
    return (
        <li>
            <span>
            {todo.text}
            </span>
            <span onClick={(e)=>{
                e.stopPropagation();
                handleDeleteTask(todo.id);
            }}>
                X
            </span>
        </li>
    )
}

export default TodoItem;