import React, { useEffect, useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState('all');
  

  const API_KEY = '37487a6982c54377bebdd3abbd810aca';
  
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${'37487a6982c54377bebdd3abbd810aca'}`)
      .then(response => response.json())
      .then(data => {
        
        const gameData = data.results.map(game => ({
          id: game.id,
          name: game.name,
          image: game.background_image, 
          completed: false,
        }));
        setGames(gameData);
      })
      .catch(error => console.error('Error fetching the games:', error));
  }, [API_KEY]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Add a new task..."
          required
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(index)}>Toggle</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Game Titles</h2>
      <div className="game-list">
        {games.slice(0, 4).map((game) => (
          <div key={game.id} className="game-item">
            <img src={game.image} alt={game.name} width={200} />
            <h3>{game.name}</h3>
            <button onClick={() => setTodos([...todos, { text: game.name, completed: false }])}>
              Add "{game.name}" to Todo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;