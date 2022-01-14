import TodoForm from './components/TodoForm';
import TodoContextProvider from './contexts/TodoContext'
import './App.css';

function App() {
    return (
        <TodoContextProvider >
            <TodoForm />
        </TodoContextProvider>
    );
}

export default App;