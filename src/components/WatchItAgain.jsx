import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WatchItAgain() {
  return (
    <Container>
      <h4>Watch it Again</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/7.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/8.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/9.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/10.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/11.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/12.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default WatchItAgain;
