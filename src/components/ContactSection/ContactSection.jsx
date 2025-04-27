// src/components/ContactSection.js
import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: ''
  });
  
  const [activeTab, setActiveTab] = useState('form');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Handle form submission here
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch for your next move</p>
        </div>
        
        <div className="contact-card">
          <div className="card-header">
            <div className="tabs">
              <button 
                className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
                onClick={() => setActiveTab('form')}
              >
                Get a Quote
              </button>
              <button 
                className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
                onClick={() => setActiveTab('info')}
              >
                Contact Info
              </button>
              <button 
                className={`tab-btn ${activeTab === 'location' ? 'active' : ''}`}
                onClick={() => setActiveTab('location')}
              >
                Find Us
              </button>
            </div>
          </div>
          
          <div className="card-content">
            {/* Quote Form */}
            <div className={`tab-panel ${activeTab === 'form' ? 'active' : ''}`}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="residential">Residential Moving</option>
                    <option value="commercial">Commercial Moving</option>
                    <option value="international">International Moving</option>
                    <option value="storage">Storage Solutions</option>
                    <option value="junk">Junk Removal</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className={`tab-panel ${activeTab === 'info' ? 'active' : ''}`}>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="icon phone-icon"></div>
                  <div>
                    <h3>Call Us</h3>
                    <a href="tel:1234567890">(123) 456-7890</a>
                    <p className="hours">Available 8AM - 7PM</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="icon email-icon"></div>
                  <div>
                    <h3>Email Us</h3>
                    <a href="mailto:info@manymenmoving.com">info@manymenmoving.com</a>
                  </div>
                </div>
                
                <div className="business-hours">
                  <h3>Business Hours</h3>
                  <ul>
                    <li><span>Monday - Friday:</span> 8:00 AM - 7:00 PM</li>
                    <li><span>Saturday:</span> 9:00 AM - 5:00 PM</li>
                    <li><span>Sunday:</span> Closed</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Location */}
            <div className={`tab-panel ${activeTab === 'location' ? 'active' : ''}`}>
              <div className="location-content">
                <div className="address">
                  <h3>Our Location</h3>
                  <address>
                    <p>ManyMen Moving Company</p>
                    <p>1234 Moving Avenue</p>
                    <p>Tampa, FL 33602</p>
                  </address>
                  <a 
                    href="https://maps.google.com/?q=Tampa,FL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="directions-btn"
                  >
                    Get Directions
                  </a>
                </div>
                
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224444.05340991474!2d-82.5303746513319!3d27.99471393245456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1682619208963!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;