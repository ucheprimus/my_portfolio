import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitterX, BsTelegram } from 'react-icons/bs';
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    // Replace with your actual submission logic (EmailJS, API, etc.)
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <BsEnvelope size={20} />,
      label: 'Email',
      value: 'uchechetam@gmail.com',
      href: 'mailto:uchechetam@gmail.com',
    },
    {
      icon: <HiOutlinePhone size={20} />,
      label: 'Phone',
      value: '+234 701 875 1676',
      href: 'tel:+2347018751676',
    },
    {
      icon: <HiOutlineLocationMarker size={20} />,
      label: 'Location',
      value: 'Benin City, Nigeria',
      href: null,
    },
  ];

  const socials = [
    { icon: <BsGithub size={18} />, href: '#', label: 'GitHub' },
    { icon: <BsLinkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <BsTwitterX size={18} />, href: '#', label: 'Twitter / X' },
    { icon: <BsTelegram size={18} />, href: '#', label: 'Telegram' },
  ];

  return (
    <section id="contact" className="contact-section py-5 py-md-7">
      <Container>

        {/* ── Section Header ── */}
        <div className="section-header text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">

          {/* ── Left: Info Panel ── */}
          <Col lg={5}>
            <div className="glass-effect contact-info-panel h-100 p-4 p-md-5 rounded-4">

              <h3 className="h5 fw-bold mb-1">Let's talk</h3>
              <p className="text-muted small mb-4">
                I'm open to freelance projects, full-time roles, and creative collaborations.
                Drop me a message and I'll get back within 24 hours.
              </p>

              <div className="contact-details mb-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="contact-detail-row">
                    <div className="contact-detail-icon">{item.icon}</div>
                    <div>
                      <p className="contact-detail-label">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="contact-detail-value">{item.value}</a>
                        : <p className="contact-detail-value mb-0">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-divider mb-4" />

              <p className="small fw-semibold text-muted mb-3 text-uppercase" style={{ letterSpacing: '1px' }}>
                Find me on
              </p>
              <div className="contact-socials">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="contact-social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>

            </div>
          </Col>

          {/* ── Right: Form ── */}
          <Col lg={7}>
            <div className="glass-effect contact-form-panel h-100 p-4 p-md-5 rounded-4">

              {status === 'sent' ? (
                <div className="contact-success">
                  <div className="contact-success-icon">🎉</div>
                  <h4 className="fw-bold mb-2">Message sent!</h4>
                  <p className="text-muted mb-4">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button className="btn-primary-custom" onClick={() => setStatus(null)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <Row className="g-3">
                    <Col sm={6}>
                      <div className="contact-field">
                        <label htmlFor="name">Your Name</label>
                        <input
                          id="name" name="name" type="text"
                          placeholder="Uche Primus"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="contact-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email" name="email" type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="contact-field">
                        <label htmlFor="subject">Subject</label>
                        <input
                          id="subject" name="subject" type="text"
                          placeholder="Project collaboration, freelance work..."
                          value={form.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="contact-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message" name="message" rows={5}
                          placeholder="Tell me about your project or idea..."
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col xs={12}>
                      <button
                        type="submit"
                        className="btn-primary-custom w-100 justify-content-center"
                        disabled={status === 'sending'}
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="contact-spinner" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" className="btn-icon">
                              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                            </svg>
                          </>
                        )}
                      </button>
                    </Col>
                  </Row>
                </form>
              )}

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;