// import React from "react";

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="movie-card">
//       <img src={movie.posterURL} alt={movie.title} />
//       <h1>{movie.title}</h1>
//       <p>{movie.description}</p>
//       <p>{movie.rating}</p>
//     </div>
//   );
// };

// export default MovieCard;

// src/components/MovieCard.js
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movie/${movie.title}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
