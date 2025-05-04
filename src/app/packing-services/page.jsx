"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import PackingServices from '@/components/PackingServices/PackingServices';
import ContactSection from '@/components/ContactSection/ContactSection';
//import Footer from '@/components/Footer/Footer';

export default function PackingServicesPage() {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force repaint for CSS transitions
    const repaintElement = document.createElement('div');
    document.body.appendChild(repaintElement);
    getComputedStyle(repaintElement).opacity;
    document.body.removeChild(repaintElement);
    
    return () => {
      // Cleanup when page unmounts
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <PackingServices />
        <ContactSection />
      </main>
    </div>
  );
}