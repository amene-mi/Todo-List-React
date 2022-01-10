function TodoItem(props){
    const {todo} = props;
    return (
        <li>
            {todo}
        </li>
    )
}

export default TodoItem;