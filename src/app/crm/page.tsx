"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CrmHero from "@/components/crm/CrmHero";
import CrmSolutions from "@/components/crm/CrmSolutions";
import CrmFeatures from "@/components/crm/CrmFeatures";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";

export default function CrmPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f7ff] text-[#0f172a] relative">
      {/* Top Header Navigation */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section */}
      <CrmHero onStartProject={() => setProjectModalOpen(true)} />

      {/* 3 Industry CRM Solutions (Salon, Gym, Clinic) */}
      <CrmSolutions onContactClick={(_sol) => setProjectModalOpen(true)} />

      {/* One Platform. Multiple Business Operations (8 Features) */}
      <CrmFeatures />

      {/* Why Businesses Choose Duhzine IT Solutions ? */}
      <WhyUsSection />

      {/* Quotation Callback & Footer */}
      <Footer />

      {/* Interactive Modals */}
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

