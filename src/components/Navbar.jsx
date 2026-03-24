import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsCodeSlash, BsEnvelope, BsPhone } from 'react-icons/bs';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      className="glass-effect py-3"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center" onClick={closeMenu}>
          <BsCodeSlash size={30} className="text-primary me-2" />
          <span className="fw-bold fs-4">Uche P</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"     className="mx-2 fw-semibold" onClick={closeMenu}>Home</Nav.Link>
            <Nav.Link href="#about"    className="mx-2 fw-semibold" onClick={closeMenu}>About</Nav.Link>
            <Nav.Link href="#projects" className="mx-2 fw-semibold" onClick={closeMenu}>Projects</Nav.Link>
            <Nav.Link href="#services" className="mx-2 fw-semibold" onClick={closeMenu}>Services</Nav.Link>
            <Nav.Link href="#contact"  className="mx-2 fw-semibold" onClick={closeMenu}>Contact</Nav.Link>
          </Nav>

          <div className="d-flex flex-wrap gap-2 mt-3 mt-lg-0 ms-lg-3">
            <a href="mailto:uchechetam@gmail.com"
               className="btn btn-outline-primary"
               onClick={closeMenu}>
              <BsEnvelope className="me-1" /> Email
            </a>
            <a href="tel:+2347018751676"
               className="btn btn-primary"
               onClick={closeMenu}>
              <BsPhone className="me-1" /> Call Me
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;