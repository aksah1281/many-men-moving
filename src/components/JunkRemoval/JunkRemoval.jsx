"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './JunkRemoval.css';

const JunkRemoval = () => {
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

  // Junk removal service data
  const junkServices = [
    {
      id: 'residential',
      icon: 'fa-home',
      title: 'Residential Junk Removal',
      description: 'From single items to entire home cleanouts, we will help declutter your living space quickly and responsibly.',
      features: [
        'Same-day service available',
        'Eco-friendly disposal practices',
        'Full-service removal - no heavy lifting',
        'Garage, attic and basement cleanouts',
        'Furniture and appliance removal',
        'Post-renovation debris cleanup'
      ]
    },
    {
      id: 'commercial',
      icon: 'fa-building',
      title: 'Commercial Junk Removal',
      description: 'Our professional team helps businesses clear office space, warehouses, and retail locations with minimal disruption.',
      features: [
        'Office furniture and equipment removal',
        'Construction debris cleanup',
        'Retail fixture disposal',
        'Warehouse cleanouts',
        'Regular service contracts available',
        'After-hours service to minimize business impact'
      ]
    },
    {
      id: 'specialty',
      icon: 'fa-dumpster',
      title: 'Specialty Item Disposal',
      description: 'We handle challenging items that require special disposal methods, from electronics to hazardous materials.',
      features: [
        'Electronic waste (e-waste) recycling',
        'Appliance and refrigerator disposal',
        'Mattress and furniture removal',
        'Hot tub and spa removal',
        'Tire and automotive part disposal',
        'Responsible recycling practices'
      ]
    },
    {
      id: 'property',
      icon: 'fa-user-tie',
      title: 'Property Management',
      description: 'We partner with property managers and real estate professionals for complete cleanout services.',
      features: [
        'Tenant eviction cleanouts',
        'Pre-sale property preparation',
        'Foreclosure cleanups',
        'Construction debris removal',
        'Estate cleanouts',
        'Emergency service available'
      ]
    }
  ];

  // What we take data
  const itemCategories = [
    {
      category: 'Household Items',
      icon: 'fa-couch',
      items: ['Furniture', 'Appliances', 'Electronics', 'Mattresses', 'Carpets', 'Clothing', 'Toys']
    },
    {
      category: 'Yard Waste',
      icon: 'fa-leaf',
      items: ['Tree branches', 'Leaves', 'Grass clippings', 'Soil', 'Stones', 'Garden debris', 'Fencing']
    },
    {
      category: 'Renovation Debris',
      icon: 'fa-hammer',
      items: ['Drywall', 'Wood', 'Flooring', 'Cabinets', 'Fixtures', 'Tile', 'Concrete']
    },
    {
      category: 'Large Items',
      icon: 'fa-truck-loading',
      items: ['Hot tubs', 'Pianos', 'Exercise equipment', 'Playground sets', 'BBQ grills', 'Sheds', 'Trampolines']
    }
  ];

  return (
    <div className="junk-removal-page">
      {/* Hero Section */}
      <section className={`junk-hero ${isVisible ? 'visible' : ''}`} ref={heroRef}>
        <div className="hero-gradient-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional Junk Removal Services</h1>
            <p>Fast, efficient, and eco-friendly removal of unwanted items, debris, and clutter</p>
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
              <i className="fas fa-truck"></i>
            </div>
            <p>Same Day Service</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-recycle"></i>
            </div>
            <p>Eco-Friendly</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <p>Upfront Pricing</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <p>Satisfaction Guaranteed</p>
          </div>
        </div>
      </section>

      {/* Services Section - TABBED DESIGN */}
      <section className="junk-services">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Junk Removal Services</h2>
            <p className="section-subtitle">Comprehensive solutions for all your junk removal needs</p>
          </div>
          
          {/* Service Tabs Navigation */}
          <div className="service-tabs">
            {junkServices.map((service) => (
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
            {junkServices.map((service) => (
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
                  <Link href={`/${service.id}-junk-removal`} className="service-more-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Take Section */}
      <section className="what-we-take">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What We Take</h2>
            <p className="section-subtitle">We remove almost anything that two people can carry</p>
          </div>
          
          <div className="items-grid">
            {itemCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3 className="category-title">{category.category}</h3>
                <ul className="items-list">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="eco-friendly-note">
            <div className="eco-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <div className="eco-content">
              <h3>Eco-Friendly Disposal</h3>
              <p>We're committed to responsible disposal methods. We donate reusable items, recycle materials whenever possible, and ensure proper disposal of everything else.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="junk-process">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Simple Process</h2>
            <p className="section-subtitle">We make junk removal easy in just 3 steps</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Book Your Appointment</h3>
                <p>Call us or book online for a free, no-obligation estimate. We offer same-day and next-day appointments.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Get a Quote</h3>
                <p>Our team arrives on time, assesses the items to be removed, and provides an upfront, all-inclusive price.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-truck-loading"></i>
                </div>
                <h3>We Do The Heavy Lifting</h3>
                <p>Once you approve the quote, we'll remove your junk immediately, clean up the area, and dispose of everything responsibly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="junk-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Clear the Clutter?</h2>
            <p>Our professional team is standing by to help with your junk removal needs.</p>
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

export default JunkRemoval;