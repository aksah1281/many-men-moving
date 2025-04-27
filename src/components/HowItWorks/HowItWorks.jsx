"use client";

import React, { useState, useRef, useEffect } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
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
        threshold: 0.2
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

  // Steps data
  const steps = [
    {
      id: 1,
      icon: 'fa-calendar-alt',
      title: 'Request a Quote',
      description: 'Fill out our simple online form or give us a call to receive your free, no-obligation moving quote.',
      details: [
        'Basic information about your move',
        'Inventory of items to be moved',
        'Special requirements or concerns',
        'Preferred moving dates'
      ]
    },
    {
      id: 2,
      icon: 'fa-clipboard-check',
      title: 'Confirm Your Move',
      description: 'Review your custom quote and select a date and time that works best for your schedule.',
      details: [
        'Flexible scheduling options',
        'Confirmation of all services needed',
        'Digital contract signing',
        'Deposit payment processing'
      ]
    },
    {
      id: 3,
      icon: 'fa-box',
      title: 'Preparation',
      description: 'We will help you prepare for moving day with packing services and moving supplies if needed.',
      details: [
        'Professional packing services available',
        'High-quality packing materials',
        'Inventory management',
        'Special item protection'
      ]
    },
    {
      id: 4,
      icon: 'fa-truck-moving',
      title: 'Moving Day',
      description: 'Our professional team arrives on time, carefully loads your belongings, and transports them safely.',
      details: [
        'Punctual arrival of moving crew',
        'Furniture protection and wrapping',
        'Efficient loading techniques',
        'Secure transportation'
      ]
    },
    {
      id: 5,
      icon: 'fa-home',
      title: 'Delivery & Setup',
      description: 'We unload, place items exactly where you want them, and ensure everything is set up properly.',
      details: [
        'Careful unloading process',
        'Room-by-room placement',
        'Furniture assembly if needed',
        'Final walkthrough inspection'
      ]
    }
  ];

  const handleStepChange = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <section className={`how-it-works ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Your Moving Journey Made Simple</p>
        </div>
        
        <div className="process-container">
          <div className="process-tabs">
            {steps.map((step) => (
              <button 
                key={step.id}
                className={`process-tab ${activeStep === step.id ? 'active' : ''}`}
                onClick={() => handleStepChange(step.id)}
              >
                <div className="tab-number">{step.id}</div>
                <div className="tab-title">{step.title}</div>
              </button>
            ))}
          </div>
          
          <div className="process-content-wrapper">
            <div className="process-content-backdrop"></div>
            
            <div className="process-progress-bar">
              <div 
                className="progress-indicator" 
                style={{ width: `${(activeStep / steps.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="process-content-container">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`process-content ${activeStep === step.id ? 'active' : ''}`}
                >
                  <div className="content-icon-container">
                    <div className="content-icon">
                      <i className={`fas ${step.icon}`}></i>
                    </div>
                  </div>
                  
                  <div className="content-details">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    
                    <div className="content-checklist">
                      <h4>What to expect:</h4>
                      <ul>
                        {step.details.map((detail, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check"></i>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {step.id < steps.length && (
                      <button 
                        className="next-step-button"
                        onClick={() => handleStepChange(step.id + 1)}
                      >
                        Next Step
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    )}
                    
                    {step.id === steps.length && (
                      <a href="/quote" className="get-started-button">
                        Get Started
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mobile-process">
          <div className="mobile-steps-container">
            {steps.map((step) => (
              <div className="mobile-step" key={step.id}>
                <div className="mobile-step-header">
                  <div className="mobile-step-number">{step.id}</div>
                  <div className="mobile-step-icon">
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                  <h3>{step.title}</h3>
                </div>
                <div className="mobile-step-content">
                  <p>{step.description}</p>
                  <div className="mobile-step-details">
                    <ul>
                      {step.details.map((detail, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check"></i>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cta-container">
          <h3>Ready to get started with your move?</h3>
          <a href="/quote" className="cta-button">Get Your Free Quote Today</a>
        </div>
      </div>
      
      <div className="moving-elements">
        <div className="moving-box box1"></div>
        <div className="moving-box box2"></div>
        <div className="moving-truck">
          <i className="fas fa-truck-moving"></i>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;