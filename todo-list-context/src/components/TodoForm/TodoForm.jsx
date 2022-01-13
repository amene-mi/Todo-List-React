import { useCallback, useState } from "react";
import useTodo from "../../hooks/useTodos";

function TodoForm() {
  const { handleAddNewTodo } = useTodo();
  const [todo, setTodo] = useState("");

  const handleChange = useCallback((event) => {
    setTodo(event.target.value);
  }, []);

  const handleSubmitForm = useCallback(
    (event) => {
      event.preventDefault();
      handleAddNewTodo(todo);
      setTodo("");
    },
    [handleAddNewTodo, todo]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        placeholder="Enter a  new Todo"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default TodoForm;
