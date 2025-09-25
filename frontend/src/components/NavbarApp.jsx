import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Brand on the left */}
        <Navbar.Brand href="/">BigNova</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Left side navigation */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/about">À propos</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          {/* Right side (Profile dropdown) */}
          <Nav className="ms-auto">
            <NavDropdown 
              title="Profil" 
              id="navbarScrollingDropdown"
              align="end" 
            >
              <NavDropdown.Item href="/login">Connexion</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Inscription</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
