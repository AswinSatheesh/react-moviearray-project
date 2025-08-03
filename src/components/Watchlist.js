import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div className="title">
      <h1>Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((result) => {
            return result.id === id;
          });
          return (
            <MovieCard
              movie={movie}
              key={id}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </div>
  );
}
