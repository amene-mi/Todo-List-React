import useTodo from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodo();
  if (todos.length === 0) {
    return <p>There is no todo to show</p>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      ;
    </div>
  );
}

export default TodoList;
