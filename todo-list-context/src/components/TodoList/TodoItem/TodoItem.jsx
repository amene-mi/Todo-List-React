import useTodo from "../../../hooks/useTodos";

function TodoItem({ todo }) {
  const { handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <li onClick={() => handleToggleTodo(todo.id)}>
      {todo.text} -<span>{todo.completed ? " completed" : "todo"}</span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteTodo(todo.id);
        }}
      >
        X
      </span>
    </li>
  );
}
export default TodoItem;
