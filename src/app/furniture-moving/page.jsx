"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import FurnitureMoving from '@/components/FurnitureMoving/FurnitureMoving';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

export default function FurnitureMovingPage() {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <FurnitureMoving />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}