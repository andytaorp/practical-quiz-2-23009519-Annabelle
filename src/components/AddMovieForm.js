import React, { useState } from "react";
import Movie from "./Movie";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      watched: false,
    };
    AddMovieForm(newMovie);
    setTitle("");
  };

  function handleTitleChange(e) {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} placeholder="Movie Title"></input>
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  ); // TODO: add a form to add a new movie
}
