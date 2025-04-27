"use client";

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactSection from '@/components/ContactSection/ContactSection'


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials/>
      <ContactSection /> 
      <main>
        {/* Other page content will go here */}
      </main>
    </>
  );
}