import React from 'react';

function MovieCard({ movie }) {
  return (
    <div style={{ display : 'flex', justifyContent : 'space-around'
    }}>
    <div  style={{ border: '1px solid #ccc', margin: '10px', padding: '10px'
        
     }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={`${movie.title} poster`} style={{ width: '150px' }} />
      <p>Rating: {movie.note}</p>
    </div>
    </div>
  );
}

export default MovieCard;
