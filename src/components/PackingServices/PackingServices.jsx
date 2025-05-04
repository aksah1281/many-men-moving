"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './PackingServices.css';

const PackingServices = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div className="packing-services-page">
      {/* Hero Section */}
      <section className={`packing-hero ${isVisible ? 'visible' : ''}`} ref={heroRef}>
        <div className="hero-gradient-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional Packing Services</h1>
            <p>Expert packing solutions to protect your belongings during every step of your move</p>
            <div className="hero-cta">
              <Link href="/quote" className="primary-btn">Get a Free Quote</Link>
              <a href="tel:1234567890" className="secondary-btn">
                <i className="fas fa-phone-alt"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="packing-services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Packing Services</h2>
            <p className="section-subtitle">Customized packing solutions for your specific needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-box"></i>
              </div>
              <h3>Full Packing Services</h3>
              <p>Let our professional team handle all your packing needs from start to finish, allowing you to focus on other aspects of your move.</p>
              <Link href="/quote" className="service-btn">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h3>Partial Packing</h3>
              <p>Need help with just certain rooms or difficult items? Our partial packing service allows you to choose exactly what you want us to pack.</p>
              <Link href="/quote" className="service-btn">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-wine-glass"></i>
              </div>
              <h3>Specialty Item Packing</h3>
              <p>From fine art to antiques, our specialty packing services ensure your most valuable and delicate possessions are protected during transit.</p>
              <Link href="/quote" className="service-btn">Learn More</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tape"></i>
              </div>
              <h3>Packing Supplies</h3>
              <p>Need professional-grade packing materials? We provide premium boxes, tape, bubble wrap, and more for your DIY packing needs.</p>
              <Link href="/quote" className="service-btn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="packing-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Let Us Handle the Packing</h2>
            <p>Save time and ensure your belongings are properly protected with our professional packing services.</p>
            <div className="cta-buttons">
              <Link href="/quote" className="cta-primary-btn">
                Get Your Free Quote <i className="fas fa-arrow-right"></i>
              </Link>
              <a href="tel:1234567890" className="cta-secondary-btn">
                <i className="fas fa-phone-alt"></i> Call (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackingServices;