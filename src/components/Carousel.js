import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const movies = [
  { title: "Movie 1", image: "/banner1.jpg" },
  { title: "Movie 2", image: "/bnr3.jpg" },
  { title: "Movie 3", image: "/bn4.jpg" },
];

function MovieCarousel() {
  return (
    <Carousel
      fade
      interval={3000}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",  // Ensures it starts from the top
        top: "0",
        left: "0",
        zIndex: "-1",  // Keeps it behind other content
      }}
    >
      {movies.map((movie, index) => (
        <Carousel.Item key={index} style={{ width: "100vw", height: "100vh" }}>
          <img
            className="d-block w-100"
            src={movie.image}
            alt={movie.title}
            style={{
              width: "100vw",   // Full width
              height: "70vh",  // Full height
              objectFit: "cover",
                // Covers the entire screen without stretching
              objectPosition: "top", // Centers the image
            }}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;


