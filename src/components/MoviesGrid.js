import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((result) => setMovies(result));
  }, []);
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movie..."
      />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
