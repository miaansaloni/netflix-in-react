import { Navbar, Container, Nav } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";

function MyNav() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="assets/logo.png" width="100" height="55" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav>
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <Nav.Link href="#" className="d-flex align-items-center ms-auto">
            <Search className="mx-2 icon" />
            <Nav.Link href="#" id="kids" className="mx-2 fw-bold">
              KIDS
            </Nav.Link>
            <Bell className="mx-2 icon" />
            <PersonCircle className="mx-3 icon" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
