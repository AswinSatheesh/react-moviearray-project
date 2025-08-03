import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((result) => setMovies(result));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Headers />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />}></Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
          </Routes>
        </Router>

        {/* <MoviesGrid /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
