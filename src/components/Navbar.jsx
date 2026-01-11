import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsCodeSlash, BsEnvelope, BsPhone } from 'react-icons/bs';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="glass-effect py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BsCodeSlash size={30} className="text-primary me-2" />
          <span className="fw-bold fs-4">YOUR NAME</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-3 fw-semibold">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-3 fw-semibold">About</Nav.Link>
            <Nav.Link href="#projects" className="mx-3 fw-semibold">Projects</Nav.Link>
            <Nav.Link href="#services" className="mx-3 fw-semibold">Services</Nav.Link>
            <Nav.Link href="#contact" className="mx-3 fw-semibold">Contact</Nav.Link>
          </Nav>
          <div className="d-flex mt-3 mt-lg-0">
            <a href="mailto:you@example.com" className="btn btn-outline-primary me-2">
              <BsEnvelope className="me-1" /> Email
            </a>
            <a href="tel:+2341234567890" className="btn btn-primary">
              <BsPhone className="me-1" /> Call Me
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;