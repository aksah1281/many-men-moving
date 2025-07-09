"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check on mount
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation item click
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-bg-gradient"></div>
      
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-brand" onClick={handleNavClick}>
          <img src="/logo.jpg" alt="MoveRight Logo" className="navbar-logo" />
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
        
        {/* Navigation Menu */}
        <nav className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="navbar-nav">
            <li className={`nav-item ${pathname === '/' ? 'is-active' : ''}`}>
              <Link 
                href="/" 
                className="nav-link" 
                onClick={handleNavClick}
              >
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/furniture-moving' ? 'is-active' : ''}`}>
              <Link 
                href="/furniture-moving" 
                className="nav-link" 
                onClick={handleNavClick}
              >
                <span className="link-text">Furniture Moving</span>
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/junk-removal' ? 'is-active' : ''}`}>
              <Link 
                href="/junk-removal" 
                className="nav-link" 
                onClick={handleNavClick}
              >
                <span className="link-text">Junk Removal</span>
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/packing-services' ? 'is-active' : ''}`}>
              <Link 
                href="/packing-services" 
                className="nav-link" 
                onClick={handleNavClick}
              >
                <span className="link-text">Packing</span>
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/about' ? 'is-active' : ''}`}>
              <Link 
                href="/about" 
                className="nav-link" 
                onClick={handleNavClick}
              >
                <span className="link-text">About</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Call To Action Section */}
        <div className="navbar-actions">
          <a href="tel:5402164132" className="navbar-contact">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9974 21.4142 21.3725C21.0391 21.7476 20.5122 21.9583 19.96 21.96C16.4243 21.7093 13.0392 20.4634 10.19 18.37C7.57451 16.4803 5.5498 13.9829 4.34 11.07C2.94 7.91 1.97 4.6 2 1C2.00167 0.447744 2.21232 0.0208471 2.58739 0.0208471C2.96247 0.0208471 3.4896 0.447744 3.92 0.88L6.92 3.88C7.30137 4.26137 7.50074 4.76974 7.5 5.3C7.5 5.83026 7.30063 6.33863 6.92 6.72L5.5 8.62C6.71 11.6 9.33 14.47 12.35 15.93L14 14.5C14.3774 14.1226 14.8833 13.9219 15.41 13.92C15.9421 13.9176 16.4548 14.1182 16.84 14.5L19.84 17.5C20.2174 17.8774 20.4181 18.3883 20.42 18.91C20.4219 19.4417 20.2213 19.9544 19.84 20.34C19.3982 20.7772 18.8444 21.0117 18.27 21.01L17.07 21.06C16.7042 21.0189 16.3483 20.9158 16.02 20.76C15.0253 20.2681 14.1044 19.6274 13.29 18.86C12.8163 18.3986 12.5817 17.7548 12.65 17.11L13 14.35C13.0311 13.9895 13.1997 13.6568 13.4737 13.3997C13.7477 13.1426 14.1097 13.0001 14.4871 13.0001C14.8644 13.0001 15.2264 13.1426 15.5004 13.3997C15.7744 13.6568 15.9431 13.9895 15.9741 14.35L16.32 17.11C16.3549 17.4388 16.5032 17.7422 16.7378 17.9668C16.9725 18.1915 17.2789 18.3246 17.6051 18.3427C17.9313 18.3608 18.2506 18.2628 18.5093 18.0643C18.768 17.8659 18.9493 17.5797 19.02 17.26L19.5 15.26C19.5624 15.0094 19.5584 14.7465 19.4884 14.4979C19.4184 14.2494 19.2847 14.0234 19.1 13.84L15.1 9.84C14.9215 9.66148 14.7023 9.52622 14.4611 9.44629C14.2199 9.36635 13.9635 9.34388 13.7122 9.38063C13.4609 9.41738 13.2222 9.51232 13.0155 9.65781C12.8088 9.80329 12.6402 9.99501 12.5233 10.2145C12.4063 10.4339 12.3442 10.6751 12.3421 10.9206C12.3399 11.1661 12.3978 11.4083 12.5109 11.6296C12.624 11.851 12.7893 12.0452 12.9936 12.1939C13.1979 12.3426 13.4349 12.4413 13.6852 12.482L16.51 13.09C16.837 13.1604 17.1255 13.3504 17.3215 13.62C17.5175 13.8896 17.608 14.2194 17.5764 14.55L17.22 17.35C17.1447 18.1295 16.8232 18.8643 16.307 19.452C15.7908 20.0397 15.1062 20.4515 14.35 20.63L12.53 21.05C12.2081 21.1151 11.8802 21.1456 11.5518 21.1456C11.2235 21.1456 10.8956 21.1151 10.5737 21.05C9.20361 20.7899 7.88921 20.2944 6.7 19.59L5.5 21.17C8.04508 22.5424 10.9141 23.2172 13.8162 23.1219C16.7184 23.0267 19.5305 22.1651 22 20.59V16.92Z" fill="currentColor"/>
            </svg>
            <span className="navbar-phone-number">(540) 216-4132</span>
          </a>
          <Link href="/quote" className="navbar-quote-btn" onClick={handleNavClick}>
            Get a Free Quote
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`navbar-overlay ${isMenuOpen ? 'is-visible' : ''}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Navbar;