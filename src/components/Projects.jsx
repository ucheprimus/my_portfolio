import { Container } from 'react-bootstrap';
import { BsArrowRight, BsEye, BsChevronLeft, BsChevronRight, BsChevronDown } from 'react-icons/bs';
import { useState, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCards, setExpandedCards] = useState({});
  const scrollContainerRef = useRef(null);

  const toggleCardExpansion = (index, type) => {
    setExpandedCards(prev => ({
      ...prev,
      [`${index}-${type}`]: !prev[`${index}-${type}`]
    }));
  };

  const projects = [
    {
      title: 'School Management System',
      category: 'Web Development',
      description: 'A full-featured school management platform to streamline administrative tasks',
      tags: ['Laravel', 'React', 'MySQL', 'Bootstrap', 'REST API', 'CI/CD', 'Unit Testing', 'TypeScript'],
      image: '/images/project1.png',
      link: 'https://giftedhandsspecialsciencecollege.com/home'
    },
    {
      title: 'Larsdan Micro-finance',
      category: 'Web Development',
      description: 'A web project for seamless financial transactions and account management',
      tags: ['Laravel', 'Bootstrap', 'MySQL', 'REST API', 'Git', 'CronJobs'],
      image: '/images/project2.png',
      link: 'https://larsdanmfb.com/'
    },
    {
      title: 'NightBright Donation/Social Platform',
      category: 'Web Development',
      description: 'A global donation platform connecting donors with causes worldwide, and also a social media platform for sharing stories and updates',
      tags: ['Laravel', 'Bootstrap', 'WebRTC', 'MySQL', 'REST API', 'GitLab CI/CD', 'Websockets', 'Redis'],
      image: '/images/project3.png',
      link: 'https://nightbright.org/'
    },
    {
      title: 'Vester Logistics',
      category: 'Web Development',
      description: 'A logistics management system optimizing fleet operations and delivery tracking',
      tags: ['PHP', 'Laravel', 'APIs', 'MySQL', 'Bootstrap', 'Git'],
      image: '/images/project4.png',
      link: 'https://vesterlogistics.com/'
    },
    {
      title: 'Product Import management',
      category: 'Web Development',
      description: 'A high-volume product management system that handles bulk CSV imports (10,000+ products) and chunked image uploads (hundreds of images) with atomic upserts and resumable file transfers. The system ensures data integrity through checksum validation, idempotent operations, and concurrent-safe processing, while generating multiple optimized image variants automatically.',
      tags: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'AWS S3', 'React', 'react-dropzone'],
      image: '/images/project5.png',
      link: 'https://hhhh.giftedhandsspecialsciencecollege.com/dashboard'
    },
    {
      title: 'AI-Powered News Summarizer',
      category: 'Automation',
      description: 'This workflow gets the latest news and asks AI to summarize it for you. It uses news API to get the news based on your keywords, then sends the news to OpenAI GPT-3.5-turbo to generate a concise summary.',
      tags: ['n8n', 'APIs', 'Automation', 'JavaScript'],
      image: '/images/project7.png',
      link: '#'
    },
    // {
    //   title: 'Fitness Tracking App',
    //   category: 'Mobile App',
    //   description: 'Cross-platform fitness app with AI-powered workout recommendations',
    //   tags: ['React Native', 'AI/ML', 'Health'],
    //   image: '/images/project6.jpg',
    //   gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(245, 158, 11, 0.8))',
    //   link: 'https://your-project-link.com'
    // }
  ];

  // Filter categories
  const categories = ['All', 'Web Development', 'Mobile App', 'Automation'];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Duplicate filtered projects for seamless loop
  const duplicatedProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects];

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleViewProject = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-background">
        <div className="gradient-orb orb-projects-1"></div>
        <div className="gradient-orb orb-projects-2"></div>
      </div>

      <Container fluid className="position-relative">
        <div className="section-header text-center mb-5">
          <span className="section-badge">Portfolio</span>
          <h2 className="display-4 fw-bold mt-3 mb-3">Featured Projects</h2>
          <p className="lead text-muted">
            A showcase of my recent work across web development, design, and automation
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="carousel-wrapper">
          {/* Navigation Buttons */}
          <button 
            className="carousel-nav-btn nav-left"
            onClick={() => handleScroll('left')}
            aria-label="Previous projects"
          >
            <BsChevronLeft size={28} />
          </button>

          <button 
            className="carousel-nav-btn nav-right"
            onClick={() => handleScroll('right')}
            aria-label="Next projects"
          >
            <BsChevronRight size={28} />
          </button>

          {/* Projects Carousel */}
          <div 
            className={`projects-carousel ${isPaused ? 'paused' : ''}`}
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="projects-track">
              {duplicatedProjects.map((project, index) => {
                const isDescriptionExpanded = expandedCards[`${index}-desc`];
                const areTagsExpanded = expandedCards[`${index}-tags`];
                const shouldTruncateDescription = project.description.length > 120;
                const shouldTruncateTags = project.tags.length > 4;

                return (
                  <div className="project-card" key={index}>
                    {/* Project Image with Gradient Overlay */}
                    <div className="project-image">
                      <div 
                        className="project-gradient-overlay"
                        style={{ background: project.gradient }}
                      ></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="project-hover-actions">
                        <button 
                          className="action-btn"
                          onClick={() => handleViewProject(project.link)}
                          title="View Project"
                        >
                          <BsEye size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="project-content">
                      <div className="project-header">
                        <span className="project-category">{project.category}</span>
                        <h3 className="project-title">{project.title}</h3>
                      </div>

                      <div className="description-container">
                        <p className={`project-description ${isDescriptionExpanded ? 'expanded' : ''}`}>
                          {isDescriptionExpanded 
                            ? project.description 
                            : shouldTruncateDescription 
                              ? `${project.description.slice(0, 120)}...` 
                              : project.description}
                        </p>
                        {shouldTruncateDescription && (
                          <button 
                            className="expand-btn"
                            onClick={() => toggleCardExpansion(index, 'desc')}
                            aria-label={isDescriptionExpanded ? "Show less" : "Show more"}
                          >
                            <BsChevronDown className={isDescriptionExpanded ? 'rotated' : ''} />
                          </button>
                        )}
                      </div>

                      <div className="tags-container">
                        <div className={`project-tags ${areTagsExpanded ? 'expanded' : ''}`}>
                          {(areTagsExpanded ? project.tags : project.tags.slice(0, 4)).map((tag, tagIndex) => (
                            <span key={tagIndex} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {shouldTruncateTags && (
                          <button 
                            className="expand-tags-btn"
                            onClick={() => toggleCardExpansion(index, 'tags')}
                            aria-label={areTagsExpanded ? "Show less tags" : "Show more tags"}
                          >
                            {areTagsExpanded ? '- Less' : `+ ${project.tags.length - 4} more`}
                          </button>
                        )}
                      </div>

                      <button 
                        className="project-link"
                        onClick={() => handleViewProject(project.link)}
                      >
                        View Case Study
                        <BsArrowRight className="arrow-icon" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fade Edges */}
          <div className="carousel-fade-left"></div>
          <div className="carousel-fade-right"></div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;