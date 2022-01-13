import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext'
import './App.css';

function App() {
  return (
    <TodoContextProvider>
      <TodoForm/>
      <TodoList/>
    </TodoContextProvider>
  );
}

export default App;
