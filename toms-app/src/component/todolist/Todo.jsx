import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [ratedGames, setRatedGames] = useState([]); 
  const [currentGame, setCurrentGame] = useState(null); 
  const [games, setGames] = useState([]); 
  const [search, setSearch] = useState(''); 
  const [rating, setRating] = useState(0);
  
  const API_KEY = '37487a6982c54377bebdd3abbd810aca';

  useEffect(() => {
    fetchGames();
  }, []); 

  const fetchGames = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${'37487a6982c54377bebdd3abbd810aca'}`);
      const data = await response.json();
      const gameData = data.results.map((game) => ({
        id: game.id,
        name: game.name,
        image: game.background_image,
        userRating: 0,
      }));
      setGames(gameData); 
      setCurrentGame(getRandomGame(gameData)); 
    } catch (error) {
      console.error('Error fetching the games:', error);
    }
  };

  const getRandomGame = (gameList) => {
    const shuffled = gameList.sort(() => 0.5 - Math.random());
    return shuffled[0]; 
  };

  const addRating = () => {
    if (currentGame) {
      const ratedGame = {
        text: currentGame.name,
        rated: true,
        rating: rating, 
      };
      setRatedGames([...ratedGames, ratedGame]);
      fetchNewGame(); 
    }
  };

  const fetchNewGame = () => {
    const remainingGames = games.filter(game => game.id !== currentGame.id);
    const newGame = getRandomGame(remainingGames);
    setCurrentGame(newGame); 
    setRating(0); 
  };

  const handleRating = (ratingValue) => {
    setRating(ratingValue); 
    setCurrentGame((prevGame) => ({
      ...prevGame,
      userRating: ratingValue,
    }));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value); 
  };

  const filteredGames = games.filter(game => 
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleGameSelection = (game) => {
    setCurrentGame(game); 
    setRating(game.userRating); 
    setSearch(''); 
  };

  return (
    <div className="todo-list">
      <h2>Rate a Game</h2>

      
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search for a game..."
          value={search}
          onChange={handleSearch}
        />
        
        
        {search && filteredGames.length > 0 && (
          <ul style={{ 
            position: 'absolute', 
            zIndex: '1', 
            backgroundColor: 'white', 
            border: '1px solid #ccc', 
            listStyle: 'none', 
            padding: '0', 
            margin: '0', 
            maxHeight: '150px',
            overflowY: 'auto',
            width: '100%'
          }}>
            {filteredGames.map((game) => (
              <li key={game.id} style={{ padding: '8px', cursor: 'pointer' }}>
                <a 
                  href="#"
                  onClick={() => handleGameSelection(game)}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {game.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2>Current Game</h2>
      {currentGame && (
        <div className="game-item" style={{ margin: '10px 0' }}>
          <img src={currentGame.image} alt={currentGame.name} width={200} />
          <h3>{currentGame.name}</h3>
          <div>
            {Array.from({ length: 5 }, (_, idx) => (
              <span
                key={idx + 1}
                onClick={() => handleRating(idx + 1)}
                className={`star ${idx < rating ? 'selected' : ''}`}
                style={{ cursor: 'pointer', fontSize: '20px' }}
              >
                ★
              </span>
            ))}
          </div>
          <button onClick={addRating}>Add Rating</button>
        </div>
      )}

      <h2>Rated Games</h2>
      <ul>
        {ratedGames.map((game, index) => (
          <li key={index}>
            <span style={{ textDecoration: game.rated ? 'none' : 'line-through' }}>
              {game.text} - Rated: {game.rating} ★
            </span>
            <button onClick={() => {
              const newRatedGames = [...ratedGames];
              newRatedGames[index].rated = !newRatedGames[index].rated; 
              setRatedGames(newRatedGames);
            }}>
              {game.rated ? 'Mark as Unrated' : 'Mark as Rated'}
            </button>
            <button onClick={() => setRatedGames(ratedGames.filter((_, i) => i !== index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;