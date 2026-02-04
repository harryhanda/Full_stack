import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavigationBar({ setPage }) {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          🌍 Travel Bucket
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link onClick={() => setPage("home")}>
              Home
            </Nav.Link>

            <Nav.Link onClick={() => setPage("explore")}>
              Explore
            </Nav.Link>

            <Nav.Link onClick={() => setPage("wishlist")}>
              Wishlist
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
