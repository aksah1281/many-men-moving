"use client";

import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const testimonialsRef = useRef(null);

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

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Rodriguez",
      location: "Tampa, FL",
      rating: 5,
      image: "/testimonials/jennifer.jpg",
      text: "I was dreading my move across town, but MoveRight made it completely stress-free. The movers were on time, professional, and handled all my belongings with extreme care. Nothing was damaged and they even helped set up my furniture in my new place!"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Orlando, FL",
      rating: 5,
      image: "/testimonials/michael.jpg",
      text: "Best moving experience I've ever had. The team was incredibly efficient and friendly. They wrapped all my furniture meticulously and were very careful with my fragile items. The pricing was transparent with no surprise fees. Highly recommend!"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "St. Petersburg, FL",
      rating: 5,
      image: "/testimonials/sarah.jpg",
      text: "I needed some old furniture and junk removed from my garage, and MoveRight was amazing! They arrived on schedule, quickly removed everything, and left the area spotless. Their junk removal service is fast and fairly priced."
    },
    {
      id: 4,
      name: "David Williams",
      location: "Clearwater, FL",
      rating: 5,
      image: "/testimonials/david.jpg",
      text: "As a senior citizen, I was worried about my move, but the MoveRight team was patient and understanding. They took care of everything from packing to unpacking. They even helped me arrange furniture in my new home. Exceptional service!"
    }
  ];

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  const scrollToNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const scrollToPrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Generate star ratings
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i <= rating ? 'filled' : ''}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <section className={`testimonials-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real experiences from satisfied clients</p>
        </div>
        
        <div className="testimonials-wrapper">
          <button className="testimonial-arrow prev" onClick={scrollToPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="testimonials-slider" ref={testimonialsRef}>
            <div 
              className="testimonials-track" 
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-header">
                      <div className="testimonial-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-info">
                        <h3>{testimonial.name}</h3>
                        <p className="testimonial-location">
                          <i className="fas fa-map-marker-alt"></i> 
                          {testimonial.location}
                        </p>
                        <div className="testimonial-rating">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-text">
                      <i className="fas fa-quote-left quote-icon"></i>
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="testimonial-arrow next" onClick={scrollToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${activeTestimonial === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
        
        <div className="testimonial-cta">
          <a href="/reviews" className="reviews-link">Read More Reviews</a>
          <a href="/quote" className="quote-button">Get Your Free Quote</a>
        </div>
      </div>
      
      <div className="testimonials-bg">
        <div className="bg-element element-1"></div>
        <div className="bg-element element-2"></div>
      </div>
    </section>
  );
};

export default Testimonials;