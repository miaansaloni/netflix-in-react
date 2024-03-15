import Container from "react-bootstrap/Container";
import TrendingNow from "./TrendingNow";
import WatchItAgain from "./WatchItAgain";
import NewReleases from "./NewReleases";
function Main() {
  return (
    <Container>
      <TrendingNow />
      <WatchItAgain />
      <NewReleases />
    </Container>
  );
}

export default Main;
