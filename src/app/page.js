"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  // Reset scroll position when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}