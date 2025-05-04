"use client";

import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Information */}
            <div className="footer-column">
              <div className="footer-logo">
                <img src="/logo.jpg" alt="Many Men Moving Logo" />
              </div>
              <p className="company-description">
                Professional moving services in Tampa Bay Area, offering furniture moving, junk removal, and packing services.
              </p>
              <div className="social-icons">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div className="footer-column">
              <h3>Our Services</h3>
              <ul className="footer-links">
                <li>
                  <Link href="/furniture-moving">
                    <i className="fas fa-chevron-right"></i> Residential Moving
                  </Link>
                </li>
                <li>
                  <Link href="/furniture-moving">
                    <i className="fas fa-chevron-right"></i> Commercial Moving
                  </Link>
                </li>
                <li>
                  <Link href="/furniture-moving">
                    <i className="fas fa-chevron-right"></i> Specialty Items
                  </Link>
                </li>
                <li>
                  <Link href="/junk-removal">
                    <i className="fas fa-chevron-right"></i> Residential Junk Removal
                  </Link>
                </li>
                <li>
                  <Link href="/junk-removal">
                    <i className="fas fa-chevron-right"></i> Commercial Junk Removal
                  </Link>
                </li>
                <li>
                  <Link href="/packing-services">
                    <i className="fas fa-chevron-right"></i> Professional Packing
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>1234 Moving Avenue, Tampa, FL 33602</p>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <p>
                    <a href="tel:1234567890">(123) 456-7890</a>
                  </p>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <p>
                    <a href="mailto:info@manymenmoving.com">info@manymenmoving.com</a>
                  </p>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <p>Mon - Fri: 8:00 AM - 7:00 PM<br />Sat: 9:00 AM - 5:00 PM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            <p>&copy; {currentYear} Many Men Moving. All Rights Reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;