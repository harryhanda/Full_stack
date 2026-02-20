import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🌍 Travel Bucket
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
            <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
            <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}