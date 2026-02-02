import './App.css';
import { DateTime } from './components/DateTime';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { QuoteCard } from './components/QuoteCard';
import { AdviceCard } from './components/AdviceCard';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <DateTime />

      <h1>The Daily Dashboard</h1>

      <div className="wrapper">
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>

      <hr className="divider" />

      <div className="cards-container">
        <QuoteCard />
        <AdviceCard />
      </div>

      <div className="footer">
        <p>Built by <a href="https://jamesiles.uk" target="_blank" rel="noopener noreferrer">James Iles</a></p>
      </div>
    </>
  );
}

export default App;
