import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>{movie.name}</h2>
      <img src={movie.image} alt={movie.name} className="img-fluid" style={{ maxWidth: "300px" }} />
      
      <table className="table table-striped mt-3">
        <tbody>
          <tr>
            <th>Genre</th>
            <td>{movie.genre}</td>
          </tr>
          <tr>
            <th>Release Date</th>
            <td>{movie.releaseDate}</td>
          </tr>
          <tr>
            <th>Ratings</th>
            <td>{movie.rating}</td>
          </tr>
          <tr>
            <th>Ticket Price</th>
            <td>{movie.price}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-3">
        <a href={movie.trailer} className="btn btn-secondary me-2" target="_blank" rel="noopener noreferrer">
          Watch Trailer
        </a>
        <button className="btn btn-primary">Book Now</button>
      </div>

      <div className="mt-3">
        <Link to="/" className="btn btn-outline-dark">Back to Movies</Link>
      </div>
    </div>
  );
};

export default MovieDetails;

