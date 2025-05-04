"use client";

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import AboutPage from '@/components/AboutPage/AboutPage';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}