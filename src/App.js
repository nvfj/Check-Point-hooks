import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import React, { useState } from 'react';
function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg',
      note: 9,
    },
    {
      title: 'The Matrix',
      description: 'A sci-fi classic exploring virtual reality.',
      posterURL: 'https://img-cdn.sfanytime.com/COVERM/COVERM_b90d8ce8-1de1-4b78-9752-436030223fda_01.jpg?w=375&fm=pjpg&s=8799b1abb337ff2519e9dff615de42ec',
      note: 8.5,
    },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.note>= filter.note
  );

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={filteredMovies} addMovie={addMovie} />
    </div>
  );
}

export default App;
