import { useEffect } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function App() {
  const { state, dispatch } = useTodos();

  useEffect(() => {
    dispatch({ type: 'ADD_TODO', payload: { text: 'Learn React' } });
  }, [state, dispatch]);

  return (
    <>
      <TodoForm />
      <TodoList todos={state}/>
    </>
  );
}

export default App;
