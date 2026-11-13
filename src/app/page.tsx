"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechGridSection from "@/components/TechGridSection";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8faff] text-[#0f172a] relative">
      {/* Navigation Header */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section */}
      <Hero onStartProject={() => setProjectModalOpen(true)} />

      {/* Key Stats and Global Client Logos */}
      <StatsBar />

      {/* Core Digital Services */}
      <ServicesSection
        onServiceSelect={(_serviceName) => setProjectModalOpen(true)}
      />

      {/* From Idea to Launch - Process Section */}
      <ProcessSection />

      {/* Technology That Adapts to Different Business Needs */}
      <TechGridSection
        onIndustryClick={(_industry) => setProjectModalOpen(true)}
      />

      {/* Real Projects. Digital Solutions. */}
      <PortfolioSection
        onProjectClick={(_projectName) => setProjectModalOpen(true)}
      />

      {/* Final Call to Action */}
      <CtaSection
        onStartProject={() => setProjectModalOpen(true)}
        onBookCall={() => setBookingModalOpen(true)}
      />

      {/* Duhzine Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Interactive Project Inquiry Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
    </main>
  );
}
