import Container from "react-bootstrap/Container";
import MovieList from "./MovieList";
// import WatchItAgain from "./WatchItAgain";
// import NewReleases from "./NewReleases";
import Dropdown from "react-bootstrap/Dropdown";
import { Grid } from "react-bootstrap-icons";
import { Grid3x3Gap } from "react-bootstrap-icons";
function Main() {
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <Dropdown className="ms-4 mt-1">
                <Dropdown.Toggle
                  variant="secondary"
                  size="sm"
                  className="rounded-0"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#">Drama</Dropdown.Item>
                  <Dropdown.Item href="#">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <a href="#link">
              <Grid className="mx-2 icon" />
            </a>
            <a href="#link">
              <Grid3x3Gap className="mx-2 icon" />
            </a>
          </div>
        </div>
      </Container>
      {/* ///////////MAIN/////////// */}
      <Container fluid>
        <MovieList searchSaga="Star Wars" />
        <MovieList searchSaga="James Bond" />
        <MovieList searchSaga="Harry Potter" />
        {/* <WatchItAgain searchSaga="James Bond" />
      <NewReleases searchSaga="Harry Potter" /> */}
      </Container>
    </>
  );
}

export default Main;
