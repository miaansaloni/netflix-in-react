import { Navbar, Container, Nav } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

function MyNav() {
  const location = useLocation();
  return (
    <Navbar variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="assets/logo.png" width="100" height="55" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav>
            <Link to="/home">
              <div className={location.pathname === "/home" ? "nav-link active fw-bold" : "nav-link fw-bold"}>Home</div>
            </Link>
            <Link to="/tvshows">
              <div className={location.pathname === "/tvshows" ? "nav-link active fw-bold" : "nav-link fw-bold"}>
                Tv Shows
              </div>
            </Link>
            <Link to="/movies">
              <div className={location.pathname === "/movies" ? "nav-link active fw-bold" : "nav-link fw-bold"}>
                Movies
              </div>
            </Link>
            <Link to="/recently-added">
              <div className={location.pathname === "/recently-added" ? "nav-link active fw-bold" : "nav-link fw-bold"}>
                Recently Added
              </div>
            </Link>
            <Link to="/my-list">
              <div className={location.pathname === "/my-list" ? "nav-link active fw-bold" : "nav-link fw-bold"}>
                My List
              </div>
            </Link>
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
