import React, { useState } from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, addMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    note: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.note) {
      addMovie(newMovie);
      setNewMovie({ title: '', description: '', posterURL: '', note: 0 });
    }
  };

  return (
    <div>
      <div>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Add a New Movie</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.note}
          onChange={handleChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieList;
