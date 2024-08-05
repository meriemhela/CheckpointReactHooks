import "./App.css";
import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://example.com/inception.jpg",
      rating: 9,
    },
    {
      title: "The Dark Knight",
      description: "A superhero film",
      posterURL: "https://example.com/dark-knight.jpg",
      rating: 8,
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...",
      posterURL: "https://image-url.com/interstellar.jpg",
      rating: 8.6,
    },
  ]);
  const [filterText, setFilterText] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterText.toLowerCase()) &&
      (!filterRating || movie.rating >= filterRating)
  );

  const addMovie = (title, description, posterURL, rating) => {
    const newMovie = { title, description, posterURL, rating };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        filterText={filterText}
        setFilterText={setFilterText}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { title, description, posterURL, rating } = e.target.elements;
            addMovie(
              title.value,
              description.value,
              posterURL.value,
              parseFloat(rating.value)
            );
          }}
        >
          <input type="text" name="title" placeholder="Title" required />
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            required
            min="0"
            max="10"
            step="0.1"
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default App;
