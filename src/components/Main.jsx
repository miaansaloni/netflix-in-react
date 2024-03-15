import Container from "react-bootstrap/Container";
import MovieList from "./MovieList";
// import WatchItAgain from "./WatchItAgain";
// import NewReleases from "./NewReleases";
function Main() {
  return (
    <Container fluid>
      <MovieList searchSaga="Star Wars" />
      <MovieList searchSaga="James Bond" />
      <MovieList searchSaga="Harry Potter" />
      {/* <WatchItAgain searchSaga="James Bond" />
      <NewReleases searchSaga="Harry Potter" /> */}
    </Container>
  );
}

export default Main;
