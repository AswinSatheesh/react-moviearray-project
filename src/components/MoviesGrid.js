import React, { useEffect, useState } from "react";
import "../styles.css";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((result) => setMovies(result));
  }, []);
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div id={movie.id} className="movie-card">
          <img src={`images/${movie.image}`} alt={movie.title} />
          <div>
            <h3 className="movie-card-title">{movie.title}</h3>
            <p className="movie-card-rating">{movie.rating}</p>
            <p className="movie-card-genre">{movie.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
