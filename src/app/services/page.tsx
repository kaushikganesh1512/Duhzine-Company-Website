"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesRecentWorks from "@/components/services/ServicesRecentWorks";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesTechGrid from "@/components/services/ServicesTechGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";

export default function ServicesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f7ff] text-[#0f172a] relative">
      {/* Top Header Navigation */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section */}
      <ServicesHero onStartProject={() => setProjectModalOpen(true)} />

      {/* 8 Core Services Grid */}
      <ServicesGrid onSelectService={() => setProjectModalOpen(true)} />

      {/* Recent Works Showcase (6 Project Cards) */}
      <ServicesRecentWorks onProjectClick={() => setProjectModalOpen(true)} />

      {/* Why Duhzine ? Section */}
      <WhyUsSection title="Why Duhzine ?" highlight="" />

      {/* Our Simple, Smart & Scalable Process */}
      <ProcessSection />

      {/* Technology That Adapts to Different Business Needs (9 Industries) */}
      <ServicesTechGrid onIndustryClick={() => setProjectModalOpen(true)} />

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

