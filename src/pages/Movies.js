import React from "react";
import MovieList from "../components/MovieList"; // Import the MovieList component

function Movies() {
  return (
    <div className="container mt-4">
      <h2>Movies List</h2>
      <p>Find your favorite movies and book tickets now.</p>
      <MovieList /> {/* Display the list of movies */}
    </div>
  );
}

export default Movies;


