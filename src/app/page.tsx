"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechGridSection from "@/components/TechGridSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";
import EnquiryPopup from "@/components/EnquiryPopup";

export default function Home() {
  const [enquiryPopupOpen, setEnquiryPopupOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  useEffect(() => {
    // Only show the enquiry popup once when the website opens, not on every page transition
    const hasShownPopup = sessionStorage.getItem("duhzine_enquiry_shown");
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setEnquiryPopupOpen(true);
        sessionStorage.setItem("duhzine_enquiry_shown", "true");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseEnquiry = () => {
    setEnquiryPopupOpen(false);
    sessionStorage.setItem("duhzine_enquiry_shown", "true");
  };

  return (
    <main className="min-h-screen bg-[#f4f7ff] text-[#0f172a] relative">
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

      {/* Why Businesses Choose Duhzine IT Solutions ? */}
      <WhyUsSection />

      {/* What Our Clients Say (Testimonials) */}
      <TestimonialsSection
        onActionClick={() => setProjectModalOpen(true)}
      />

      {/* Custom Quote Callback Block & Duhzine Footer */}
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

      {/* Auto Welcome & Reload Enquiry Popup */}
      <EnquiryPopup
        isOpen={enquiryPopupOpen}
        onClose={handleCloseEnquiry}
        onDiscussProject={() => {
          handleCloseEnquiry();
          setProjectModalOpen(true);
        }}
      />
    </main>
  );
}
