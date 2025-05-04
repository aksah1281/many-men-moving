"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './HeroSection.css';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeBox, setActiveBox] = useState(null);
  
  // Set loaded state after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
    return () => {
      setIsLoaded(false);
    };
  }, []);

  // Service boxes data
  const serviceBoxes = [
    {
      id: 'furniture',
      icon: 'fa-couch',
      title: 'Furniture Moving',
      description: 'Professional handling of your valuable furniture with care and precision.',
      link: '/furniture-moving'
    },
    {
      id: 'junk',
      icon: 'fa-trash-alt',
      title: 'Junk Removal',
      description: 'Quick and efficient removal of unwanted items and proper disposal.',
      link: '/junk-removal'
    },
    {
      id: 'packing',
      icon: 'fa-box',
      title: 'Packing Services',
      description: 'Expert packing of your belongings with premium materials for maximum safety.',
      link: '/packing-services'
    }
  ];

  return (
    <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
      {/* Gradient Background */}
      <div className="hero-gradient-background"></div>
      
      {/* Animated 3D Box Elements */}
      <div className="box-elements">
        <div className="floating-box box-1"></div>
        <div className="floating-box box-2"></div>
        <div className="floating-box box-3"></div>
        <div className="floating-box box-4"></div>
        <div className="floating-truck">
          <i className="fas fa-truck-moving"></i>
        </div>
      </div>
      
      {/* Main Hero Content */}
      <div className="hero-content">
        <div className="content-wrapper">
          <div className="title-container">
            <h1 className="hero-title">
              <span className="title-line">Moving Made</span>
              <span className="title-line accent">Effortless</span>
            </h1>
          </div>
          
          {/* Unique Interactive Service Boxes */}
          <div className="service-boxes">
            {serviceBoxes.map((box) => (
              <div 
                key={box.id}
                className={`service-box ${activeBox === box.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveBox(box.id)}
                onMouseLeave={() => setActiveBox(null)}
              >
                <div className="box-content">
                  <div className="icon-container">
                    <i className={`fas ${box.icon}`}></i>
                  </div>
                  <h3>{box.title}</h3>
                  <p>{box.description}</p>
                  <Link href={box.link} className="box-link">
                    Learn More
                    <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
                <div className="service-box-bg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Trust Indicators */}
      <div className="hero-trust">
        <div className="trust-badge">
          <i className="fas fa-shield-alt"></i>
          <span>Fully Insured</span>
        </div>
        <div className="trust-badge">
          <i className="fas fa-clock"></i>
          <span>On-Time Service</span>
        </div>
        <div className="trust-badge">
          <i className="fas fa-star"></i>
          <span>5-Star Rated</span>
        </div>
        <div className="trust-badge">
          <i className="fas fa-thumbs-up"></i>
          <span>Satisfaction Guaranteed</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;