import React from "react";
import Carousel from "../components/Carousel"; // Ensure correct import
import RecommendedMovies from "../components/RecommendedMovies"; // Ensure correct import

const Home = () => {
  return (
    <div>
      {/* Carousel at the top */}
      <Carousel />

      {/* Recommended Movies should be below the carousel */}
      <div style={{ marginTop: "400px", padding: "20px" }}>
        <RecommendedMovies />
      </div>
    </div>
  );
};

export default Home;


