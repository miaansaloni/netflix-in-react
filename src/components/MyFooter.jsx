import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#link" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#link" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button variant="dark" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
