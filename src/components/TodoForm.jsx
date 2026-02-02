import { useState } from 'react';

export function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = inputValue.trim();
    if (todoText.length > 0) {
      onAddTodo(todoText);
      setInputValue('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a new task"
        autoComplete="off"
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="add-button" type="submit">Add Task</button>
    </form>
  );
}
