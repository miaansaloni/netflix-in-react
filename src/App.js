import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/MyNav";
import TVShows from "./components/TvShows";
import Footer from "./components/MyFooter";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <TVShows />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
