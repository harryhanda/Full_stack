import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>🌍 Travel Bucket</Navbar.Brand>

        {/* Hamburger button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Destinations</Nav.Link>
            <Nav.Link>Wishlist</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
