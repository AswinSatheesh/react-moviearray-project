import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Headers />
        <MoviesGrid />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
