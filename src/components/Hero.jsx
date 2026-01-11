import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <Container className="position-relative z-index-1">
        <Row className="align-items-center min-vh-100">
          <Col lg={7} className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Available for Freelance</span>
            </div>

            <h1 className="hero-title">
              <span className="hello-text">Hello, I'm</span>
              <span className="name-text gradient-text">Uche Primus C.</span>
              <span className="role-text">
                <span className="role-label">Fullstack Developer &</span>
                <br />
                <span className="role-label">Automation Engineer</span>
              </span>
            </h1>

            <p className="hero-description">
              I build powerful web & mobile applications, automate complex workflows, 
              and create stunning visual designs. From frontend to backend, from design 
              to deployment - I bring complete solutions to life.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn-primary-custom">
                View My Work
                <svg 
                  className="btn-icon" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contact" className="btn-outline-custom ms-3">
                Get In Touch
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Projects Done</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <h3 className="stat-number">30+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
          </Col>

          <Col lg={5} className="hero-visual">
            <div className="hero-image-container">
              {/* Glassmorphism backdrop */}
              <div className="glass-backdrop"></div>
              
              {/* Profile Image with Glass Effect */}
              <div className="profile-glass-wrapper">
                <div className="profile-image-wrapper">
                  <img 
                    src="/images/mypic.jpg" 
                    alt="Uche Primus C." 
                    className="profile-image"
                  />
                </div>
              </div>
              
              {/* Floating Glass Cards */}
              <div className="floating-glass-card card-1">
                <div className="glass-card-inner">
                  <div className="card-icon">💻</div>
                  <p className="card-text">Web & Mobile</p>
                </div>
              </div>
              
              <div className="floating-glass-card card-2">
                <div className="glass-card-inner">
                  <div className="card-icon">🎨</div>
                  <p className="card-text">Design</p>
                </div>
              </div>
              
              <div className="floating-glass-card card-3">
                <div className="glass-card-inner">
                  <div className="card-icon">⚡</div>
                  <p className="card-text">Automation</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p className="scroll-text">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;