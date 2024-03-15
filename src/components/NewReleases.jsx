import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NewReleases() {
  return (
    <Container>
      <h4>New Releases</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/13.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/14.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/15.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/16.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/17.png" alt="" />
        </Col>
        <Col className="mb-2 text-center px-1">
          <img className="img-fluid" src="assets/18.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default NewReleases;
