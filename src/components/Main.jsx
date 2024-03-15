import Container from "react-bootstrap/Container";
import TrendingNow from "./TrendingNow";
import WatchItAgain from "./WatchItAgain";
import NewReleases from "./NewReleases";
function Main() {
  return (
    <Container>
      <TrendingNow searchSaga="Star Wars" />
      <WatchItAgain searchSaga="The Lord Of The Rings" />
      <NewReleases searchSaga="Harry Potter" />
    </Container>
  );
}

export default Main;
