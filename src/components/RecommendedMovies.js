import React, { useState } from "react";

const RecommendedMovies = () => {
  const [likes, setLikes] = useState([0, 0, 0]); // Initial likes for each movie

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const recommendedMovies = [
    {
      id: 1,
      title: "The Dark Knight",
      image: "/the dark.jpg", // Make sure the image is in the public folder
    },
    {
      id: 2,
      title: "Inception",
      image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    },
    {
      id: 3,
      title: "Dune",
      image: "/dune.jpg",
    },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Recommended Movies</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {recommendedMovies.map((movie, index) => (
          <div
            key={movie.id}
            style={{
              width: "200px",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
            <button
              onClick={() => handleLike(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ❤️ {likes[index]} Likes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;
