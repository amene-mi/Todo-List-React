import TodoForm from "./components/TodoForm";
import useTasks from "./hooks/useTasks";

function App() {
  const { state, dispatch } = useTasks();
  const handleAddNewTask = (text) => {
    dispatch({ type: "ADD_TODO", payload: { text } });
  }

  return (
    <>
      <TodoForm handleSubmit={handleAddNewTask} />
    </>
  );
}

export default App;
