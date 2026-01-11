import { Container, Row, Col, Badge } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs';
import './About.css';

const About = () => {
  const skills = [
    'React.js', 'Next.js', 'Bootstrap', 'Figma', 'UI/UX Design',
    'Webflow', 'WordPress', 'Graphic Design', 'Node.js', 'MongoDB'
  ];

  const images = [
    '/images/portfolio1.jpg',
    '/images/portfolio2.png',
    '/images/portfolio3.jpg'
  ];

  return (
    <section id="about" className="about-section py-5 py-md-7">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">About Me</h2>
          <p className="lead text-muted">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <Row className="align-items-stretch g-4">
          <Col lg={6} className="order-2 order-lg-1">
            <div className="glass-effect p-4 p-md-5 rounded-4 about-content-box h-100">
              <h3 className="h4 fw-bold mb-3">Who I Am</h3>
              <p className="mb-4">
                I'm a passionate designer and developer with over 5 years of experience 
                creating digital solutions that blend aesthetics with functionality.
              </p>
              <div className="mb-0">
                <h4 className="h5 fw-bold mb-3">My Skills</h4>
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} bg="light" text="dark" className="skill-badge">
                      <BsCheckCircle className="me-1 text-success" /> {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="order-1 order-lg-2">
            <div className="floating-images-container">
              <div className="image-carousel">
                {/* Display images 3 times for smooth loop */}
                {[...images, ...images, ...images].map((img, index) => (
                  <div key={index} className="carousel-image">
                    <img src={img} alt={`Portfolio ${(index % images.length) + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;