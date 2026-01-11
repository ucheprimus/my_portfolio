import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsPalette, BsCodeSlash, BsPhone } from 'react-icons/bs';

const Services = () => {
  const services = [
    {
      icon: <BsPalette size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with optimal user experience'
    },
    {
      icon: <BsCodeSlash size={40} />,
      title: 'Web Development',
      description: 'Building responsive and performant websites using modern technologies'
    },
    {
      icon: <BsPhone size={40} />,
      title: 'Mobile Design',
      description: 'Designing mobile applications for iOS and Android platforms'
    }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="display-5 fw-bold text-center mb-5">My Services</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 border-0 shadow-sm text-center p-4 card-hover">
                <div className="text-primary mb-3">{service.icon}</div>
                <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;