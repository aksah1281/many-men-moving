"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './FurnitureMoving.css';

const FurnitureMoving = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('residential');
  const heroRef = useRef(null);

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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Furniture service data
  const furnitureServices = [
    {
      id: 'residential',
      icon: 'fa-home',
      title: 'Residential Moving',
      description: 'Our professional movers handle all your furniture with care, ensuring safe transport from your current home to your new residence.',
      features: [
        'Careful handling of all furniture items',
        'Proper wrapping and protection',
        'Strategic loading for maximum safety',
        'Efficient unloading and placement',
        'Basic reassembly of furniture',
        'Floor and doorway protection'
      ]
    },
    {
      id: 'commercial',
      icon: 'fa-building',
      title: 'Commercial Relocation',
      description: 'We help businesses relocate office furniture with minimal disruption to your operations, coordinating every aspect of the move.',
      features: [
        'Office furniture disassembly and reassembly',
        'Computer and electronics handling',
        'Weekend and after-hours scheduling',
        'Coordinated moving plans',
        'Cubicle and workstation relocation',
        'Conference room and executive office setups'
      ]
    },
    {
      id: 'specialty',
      icon: 'fa-couch',
      title: 'Specialty Furniture',
      description: 'From antiques to pianos, our specialty furniture moving services ensure your valuable items receive the expert care they deserve.',
      features: [
        'Piano moving by certified technicians',
        'Antique furniture protection',
        'Custom crating for valuable pieces',
        'Fine art and sculpture handling',
        'Pool tables and exercise equipment',
        'Large entertainment systems'
      ]
    },
    {
      id: 'storage',
      icon: 'fa-warehouse',
      title: 'Furniture Storage',
      description: 'Need temporary storage during your move? Our climate-controlled facilities keep your furniture safe and secure until you are ready.',
      features: [
        'Short and long-term storage options',
        'Climate-controlled environment',
        'Secure, monitored facilities',
        'Inventory management system',
        'Easy access to your belongings',
        'Flexible scheduling for delivery'
      ]
    }
  ];

  return (
    <div className="furniture-moving-page">
      {/* Hero Section */}
      <section className={`furniture-hero ${isVisible ? 'visible' : ''}`} ref={heroRef}>
        <div className="hero-gradient-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional Furniture Moving Services</h1>
            <p>Careful handling, secure transport, and perfect placement – we treat your furniture like our own.</p>
            <div className="hero-cta">
              <Link href="/quote" className="primary-btn">Get a Free Quote</Link>
              <a href="tel:5402164132" className="secondary-btn">
                <i className="fas fa-phone-alt"></i> Call Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <p>Fully Insured</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-hand-holding"></i>
            </div>
            <p>Careful Handling</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <p>Expert Team</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <p>No Hidden Fees</p>
          </div>
        </div>
      </section>

      {/* Services Section - NEW TABBED DESIGN */}
      <section className="furniture-services">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Furniture Moving Services</h2>
            <p className="section-subtitle">Specialized solutions for all your furniture moving needs</p>
          </div>
          
          {/* Service Tabs Navigation */}
          <div className="service-tabs">
            {furnitureServices.map((service) => (
              <button
                key={service.id}
                className={`service-tab ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                <div className="tab-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
          
          {/* Service Content Area */}
          <div className="service-content-container">
            {furnitureServices.map((service) => (
              <div 
                key={service.id}
                className={`service-content ${activeTab === service.id ? 'active' : ''}`}
              >
                <div className="service-content-header">
                  <div className="main-icon">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <div className="header-text">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                
                <div className="service-content-features">
                  <h4>What We Offer:</h4>
                  <ul className="feature-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-check">
                          <i className="fas fa-check"></i>
                        </span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-cta">
                  <Link href="/quote" className="service-quote-btn">
                    Get a Quote <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link href={`/${service.id}-moving`} className="service-more-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="furniture-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready for a Stress-Free Furniture Move?</h2>
            <p>Our professional team is standing by to help with your furniture moving needs.</p>
            <div className="cta-buttons">
              <Link href="/quote" className="cta-primary-btn">
                Get Your Free Quote <i className="fas fa-arrow-right"></i>
              </Link>
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

export default FurnitureMoving;