import React from "react";

const AddMovieForm = ({ addMovie }) => {
  return (
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
        <input type="text" name="title" placeholder="Title" required />
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input type="text" name="posterURL" placeholder="Poster URL" required />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          required
          min="0"
          max="10"
          step="0.1"
        />
        <input type="text" name="trailer" placeholder="Trailer URL" required />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
