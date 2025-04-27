"use client";

import React, { useState, useRef, useEffect } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is visible
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

  // Advantages data
  const advantages = [
    {
      id: 'experience',
      icon: 'fa-medal',
      title: '4+ Years Experience',
      description: 'Our team brings over 4 years of professional moving expertise, ensuring your belongings are handled with care and precision.'
    },
    {
      id: 'insured',
      icon: 'fa-shield-alt',
      title: 'Fully Licensed & Insured',
      description: 'We maintain comprehensive insurance coverage and all required licensing to provide you with complete peace of mind.'
    },
    {
      id: 'pricing',
      icon: 'fa-dollar-sign',
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. We provide clear, upfront pricing so you know exactly what to expect.'
    },
    {
      id: 'professional',
      icon: 'fa-users',
      title: 'Professional Team',
      description: 'Our movers undergo rigorous training and background checks to ensure you receive the highest quality service.'
    },
    {
      id: 'equipment',
      icon: 'fa-truck-loading',
      title: 'Required Equipment',
      description: 'We utilize state-of-the-art moving equipment and premium packing materials for maximum protection of your items.'
    },
    {
      id: 'support',
      icon: 'fa-headset',
      title: '24/7 Customer Support',
      description: 'Our dedicated customer service team is available around the clock to address any questions or concerns.'
    }
  ];

  return (
    <section className={`why-choose-us ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">The Right Moving Partner Makes All The Difference</p>
        </div>
        
        <div className="advantages-grid">
          {advantages.map((item, index) => (
            <div 
              key={item.id} 
              className="advantage-card"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="icon-wrapper">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="highlight-box">
          <div className="highlight-content">
            <div className="highlight-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="highlight-text">
              <h3>Over 300+ Successful Moves</h3>
              <p>Join with our satisfied customers who trust us with their moving needs</p>
            </div>
          </div>
          <div className="highlight-cta">
            <a href="/quote" className="highlight-button">Get Your Free Quote</a>
          </div>
        </div>
      </div>
      
      <div className="section-background">
        <div className="bg-pattern-1"></div>
        <div className="bg-pattern-2"></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;