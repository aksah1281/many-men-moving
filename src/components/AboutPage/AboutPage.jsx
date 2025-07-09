"use client";

import React, { useState, useRef, useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Team members data - replace with actual team info
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "Founder & CEO",
      image: "/team/founder.jpg", // Replace with actual image path
      bio: "USF graduate with extensive experience in the moving industry."
    },
    {
      id: 2,
      name: "Michael Johnson",
      position: "Operations Manager",
      image: "/team/operations-manager.jpg", // Replace with actual image path
      bio: "15 years of experience in logistics and customer service."
    },
    {
      id: 3,
      name: "David Williams",
      position: "Team Lead",
      image: "/team/team-lead.jpg", // Replace with actual image path
      bio: "Expert in furniture handling and team coordination."
    },
    {
      id: 4,
      name: "Robert Brown",
      position: "Moving Specialist",
      image: "/team/specialist1.jpg", // Replace with actual image path
      bio: "Specialized in delicate and valuable item transportation."
    },
    {
      id: 5,
      name: "James Davis",
      position: "Moving Specialist",
      image: "/team/specialist2.jpg", // Replace with actual image path
      bio: "Known for efficiency and exceptional customer care."
    },
    {
      id: 6,
      name: "Thomas Moore",
      position: "Customer Relations",
      image: "/team/customer-relations.jpg", // Replace with actual image path
      bio: "Focused on creating the best experience for every client."
    }
  ];

  // Values data
  const companyValues = [
    {
      id: "reliability",
      icon: "fa-shield-alt",
      title: "Reliability",
      description: "We show up on time, every time, and deliver exactly what we promise."
    },
    {
      id: "integrity",
      icon: "fa-handshake",
      title: "Integrity",
      description: "We operate with honesty and transparency in all our business practices."
    },
    {
      id: "excellence",
      icon: "fa-medal",
      title: "Excellence",
      description: "We strive for perfection in every move, no matter how big or small."
    },
    {
      id: "community",
      icon: "fa-heart",
      title: "Community Focus",
      description: "We're committed to giving back to the Tampa Bay Area that we love."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className={`about-hero ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Many Men Moving</h1>
            <p>Tampa Bay's Trusted Moving Professionals</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">How We Started Moving Tampa Bay</p>
          </div>
          
          <div className="story-content">
            <div className="story-image">
              <img src="/about/company-story.jpg" alt="Many Men Moving Team" />
              <div className="image-caption">Serving Tampa Bay since our founding</div>
            </div>
            
            <div className="story-text">
              <p className="founding-story">
                Many Men Moving was founded by a USF graduate after working for different moving companies throughout college, seeing inefficiencies in those companies, and growing a love for the Tampa Bay Area. We pride ourselves on providing exceptional work and customer service with white glove service for a reasonable and realistic price. Our goal is to help as many people as possible and give back as much as we can to the beautiful city of Tampa.
              </p>
              
              <div className="story-stats">
                <div className="stat-item">
                  <div className="stat-number">300+</div>
                  <div className="stat-label">Successful Moves</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5.0</div>
                  <div className="stat-label">Star Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">What drives us every day</p>
          </div>
          
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div 
                key={value.id} 
                className="value-card"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="value-icon">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">Meet the professionals behind your perfect move</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Community Commitment</h2>
            <p className="section-subtitle">Giving back to the Tampa Bay Area</p>
          </div>
          
          <div className="community-content">
            <div className="community-text">
              <p>At Many Men Moving, we believe in the importance of giving back to the community that has supported us. We regularly participate in local initiatives and support various causes throughout Tampa Bay.</p>
              
              <ul className="community-initiatives">
                <li>
                  <i className="fas fa-hands-helping"></i>
                  <span>Donated moves for families in need</span>
                </li>
                <li>
                  <i className="fas fa-tree"></i>
                  <span>Participation in local environmental cleanup efforts</span>
                </li>
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <span>Scholarship support for USF students</span>
                </li>
                <li>
                  <i className="fas fa-store"></i>
                  <span>Supporting local Tampa Bay businesses</span>
                </li>
              </ul>
            </div>
            
            <div className="community-image">
              <img src="/about/community-service.jpg" alt="Community Service" />
              <div className="image-caption">Our team participating in Tampa Bay cleanup</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Experience the Difference?</h2>
            <p>Let our professional team handle your next move with the care and attention you deserve.</p>
            <div className="cta-buttons">
              <a href="/quote" className="cta-primary-btn">
                Get Your Free Quote <i className="fas fa-arrow-right"></i>
              </a>
              <a href="tel:5402164132" className="cta-secondary-btn">
                <i className="fas fa-phone-alt"></i> Call (540) 216-4132
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;