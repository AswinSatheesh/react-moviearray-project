import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [rating, setRating] = useState("All");
  const [genre, setGenre] = useState("All genre");
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((result) => setMovies(result));
  }, []);

  const handleSearchFilter = (e) => {
    setSearchItem(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const matchesSearchTerms = (movie, searchItem) => {
    return movie.title.toLowerCase().includes(searchItem.toLowerCase());
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All genre" || movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };
  const filteredSearch = movies.filter((movie) => {
    return matchesSearchTerms(movie, searchItem) && matchesGenre(movie, genre);
  });
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movie..."
        value={searchItem}
        onChange={handleSearchFilter}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option>All genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredSearch.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
