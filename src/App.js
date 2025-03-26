import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./components/MovieDetails"; // Import MovieDetails
import SignIn from "./components/SignIn"; // Corrected import path
import Footer from "./components/Footer"; // Add Footer

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* Dynamic Route */}
        <Route path="/signin" element={<SignIn />} /> {/* Sign In Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

















