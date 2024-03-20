import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { TwitterX } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <Row>
              <Col className="mb-2">
                <Facebook className="me-2 footer-icon" />
                <Instagram className="me-2 footer-icon" />
                <TwitterX className="me-2 footer-icon" />
                <Youtube className="me-2 footer-icon" />
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <Link alt="footer link">Audio and Subtitles</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Media Center</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Privacy</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Contact us</Link>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <Link alt="footer link">Audio Description</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Investor Relations</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Legal Notices</Link>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <Link alt="footer link">Help Center</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Jobs</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Cookie Preferences</Link>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <Link alt="footer link">Gift Cards</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Terms of Use</Link>
                    </p>
                    <p>
                      <Link alt="footer link">Corporate Information</Link>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button variant="dark" size="sm" className="btn footer-button rounded-0 mt-3 bg-transparent">
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
