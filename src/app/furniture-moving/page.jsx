"use client";

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import FurnitureMoving from '@/components/FurnitureMoving/FurnitureMoving';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Page() {
  return (
    <>
      <Navbar />
      <FurnitureMoving />
      <ContactSection />
    </>
  );
}