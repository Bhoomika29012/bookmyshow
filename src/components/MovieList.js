import React from "react";
import { Link } from "react-router-dom";
import movies from "../data";

const MovieList = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={movie.image} className="card-img-top" alt={movie.name} style={{ height: "300px" }} />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.genre}</p>
                <Link to={`/movie/${movie.id}`} className="btn btn-info">
                  Movie Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

