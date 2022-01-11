import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTasks from "./hooks/useTasks";

function App() {
  const { state, dispatch } = useTasks();
  const handleAddNewTask = (text) => {
    dispatch({ type: "ADD_TODO", payload: { text } });
  }

  return (
    <>
      <TodoForm handleSubmit={handleAddNewTask} />
      <TodoList tasks={state} />
    </>
  );
}

export default App;
