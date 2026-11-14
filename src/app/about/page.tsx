"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutTeam from "@/components/about/AboutTeam";
import AboutWorkspace from "@/components/about/AboutWorkspace";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutFaq from "@/components/about/AboutFaq";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";

export default function AboutPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f7ff] text-[#0f172a] relative">
      {/* Top Header Navigation */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section */}
      <AboutHero onStartProject={() => setProjectModalOpen(true)} />

      {/* Key Company Stats Bar */}
      <AboutStats />

      {/* Meet Our Core Team */}
      <AboutTeam />

      {/* Workspace & Innovation Space Gallery */}
      <AboutWorkspace />

      {/* Why Businesses Choose Duhzine IT Solutions ? */}
      <WhyUsSection />

      {/* Our Simple, Smart & Scalable Process */}
      <ProcessSection />

      {/* Frequently Asked Questions */}
      <AboutFaq />

      {/* What Our Clients Say (Testimonials) */}
      <TestimonialsSection onActionClick={() => setProjectModalOpen(true)} />

      {/* Quotation Callback & Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </main>
  );
}
