import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDescription from "./components/MovieDescription";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://example.com/inception.jpg",
      rating: 9,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Dark Knight",
      description: "A superhero film",
      posterURL: "https://example.com/dark-knight.jpg",
      rating: 8,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...",
      posterURL: "https://image-url.com/interstellar.jpg",
      rating: 8.6,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);
  const [filterText, setFilterText] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterText.toLowerCase()) &&
      (!filterRating || movie.rating >= filterRating)
  );

  const addMovie = (title, description, posterURL, rating, trailer) => {
    const newMovie = { title, description, posterURL, rating, trailer };
    setMovies([...movies, newMovie]);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                      const { title, description, posterURL, rating, trailer } =
                        e.target.elements;
                      addMovie(
                        title.value,
                        description.value,
                        posterURL.value,
                        parseFloat(rating.value),
                        trailer.value
                      );
                    }}
                  >
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      required
                    />
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
                    <input
                      type="text"
                      name="trailer"
                      placeholder="Trailer URL"
                      required
                    />
                    <button type="submit">Add Movie</button>
                  </form>
                </div>
              </>
            }
          />
          <Route
            path="/movie/:title"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
