import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TrendingNow() {
  return (
    <Container>
      <h4>Trending Now</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/1.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/2.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/3.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/4.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/5.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/6.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default TrendingNow;
