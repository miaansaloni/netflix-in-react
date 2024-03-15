import Container from "react-bootstrap/Container";
import TrendingNow from "./TrendingNow";
import WatchItAgain from "./WatchItAgain";
import NewReleases from "./NewReleases";
function Main() {
  return (
    <Container fluid>
      <TrendingNow searchSaga="Star Wars" />
      <WatchItAgain searchSaga="James Bond" />
      <NewReleases searchSaga="Harry Potter" />
    </Container>
  );
}

export default Main;
