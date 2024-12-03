import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    // TODO: Implement adding a new movie to the list
    setMovies((movies) => [...movies, title]);
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    setMovies((movies) => 
    movies.map((movie) =>
      movie.id === id ? {...movie, watched: !movie.watched} : movie))
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies((movies) => movies.filter((movie) =>movie.id !== id));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      <AddMovieForm addMovies={handleAddMovie} />
      {/* TODO: Add MovieList Component */}
      <MovieList movies={movies} onToggleWatched={handleToggleWatched} onDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;
