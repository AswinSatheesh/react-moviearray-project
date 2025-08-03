import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies }) {
  const [searchItem, setSearchItem] = useState("");
  const [rating, setRating] = useState("All");
  const [genre, setGenre] = useState("All genre");
  const [year, setYear] = useState("Default");

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

  const mathesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
        break;

      case "Good":
        return movie.rating >= 8;
        break;

      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
        break;
      case "Bad":
        return movie.rating < 5;
        break;
      default:
        return false;
        break;
    }
  };

  const filteredSearch = movies.filter((movie) => {
    return (
      matchesSearchTerms(movie, searchItem) &&
      mathesRating(movie, rating) &&
      matchesGenre(movie, genre)
    );
  });

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const sortedMovies = [...filteredSearch];
  if (year === "Ascending") {
    sortedMovies.sort((a, b) => a.year - b.year);
  } else if (year === "Descending") {
    sortedMovies.sort((a, b) => b.year - a.year);
  }
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
        <div className="filter-slot">
          <label>Released Year</label>
          <select
            className="filter-dropdown"
            value={year}
            onChange={handleYear}
          >
            <option>Default</option>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {sortedMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
