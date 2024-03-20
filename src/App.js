import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/MyNav";
import TVShows from "./components/TvShows";
import Footer from "./components/MyFooter";
import Main from "./components/Main";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/details/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
