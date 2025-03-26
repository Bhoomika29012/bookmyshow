import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "linear-gradient(to right,rgb(5, 5, 5),rgb(136, 88, 80))" }}>
      <div className="container-fluid">
        {/* Logo & Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/logoo.png"  
            alt="BookMyShow Logo"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", textShadow: "2px 2px 5px black" }}>
            Book
            <span style={{ color: "#000", backgroundColor: "white", padding: "2px 5px", borderRadius: "5px" }}>
              My
            </span>
            Show
          </span>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Menu Items */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">Home</Link> {/* ✅ Added Home */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/offers">Offers</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="🔍 Search movies/events"
              aria-label="Search"
              style={{
                borderRadius: "25px",
                padding: "10px",
                width: "250px",
                border: "2px solid white",
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white"
              }}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "white",
                color: "#ff3f6c",
                borderRadius: "25px",
                padding: "10px 15px",
                fontWeight: "bold"
              }}
            >
              Search
            </button>
          </form>

          {/* User Profile Option (Sign In / Sign Out) */}
          <Link
            className="btn"
            to="/signin"
            style={{
              backgroundColor: "white",
              color: "#ff3f6c",
              fontWeight: "bold",
              borderRadius: "25px",
              padding: "10px 15px",
            }}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


