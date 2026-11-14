"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioProjects from "@/components/portfolio/PortfolioProjects";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";

export default function PortfolioPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const scrollToWorks = () => {
    const el = document.getElementById("portfolio-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f7ff] text-[#0f172a] relative">
      {/* Top Header Navigation */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section with Stats Bar & 9 Trust Partner Logos */}
      <PortfolioHero
        onContactClick={() => setProjectModalOpen(true)}
        onViewWorksClick={scrollToWorks}
      />

      {/* 9 Recent Works Projects (3x3 Grid) */}
      <PortfolioProjects
        onProjectClick={(_title) => setProjectModalOpen(true)}
      />

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
