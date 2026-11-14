"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import InternshipHero from "@/components/internship/InternshipHero";
import InternshipPrograms from "@/components/internship/InternshipPrograms";
import InternshipProcess from "@/components/internship/InternshipProcess";
import InternshipStudents from "@/components/internship/InternshipStudents";
import InternshipInstitutes from "@/components/internship/InternshipInstitutes";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";
import InternshipEnrollModal from "@/components/internship/InternshipEnrollModal";

export default function InternshipPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("UI/UX Designer Intern");

  const handlePayNow = (programTitle: string) => {
    setSelectedProgram(programTitle);
    setEnrollModalOpen(true);
  };

  const handleTalkToTeam = (_programTitle: string) => {
    setProjectModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#f8faff] text-[#0f172a] relative">
      {/* Top Header Navigation */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section with stats and 3 benefit cards */}
      <InternshipHero onStartApplication={() => handlePayNow("Internship Program")} />

      {/* 3 Internship Programs: UI/UX, Digital Marketing, Full Stack */}
      <InternshipPrograms
        onPayNow={handlePayNow}
        onTalkToTeam={handleTalkToTeam}
      />

      {/* 4-Step Intern Hiring Process */}
      <InternshipProcess />

      {/* Helping 1000+ Students Build Successful Careers with Marquee */}
      <InternshipStudents onJoinClick={() => handlePayNow("Internship Program")} />

      {/* Supporting Students Through Industry Exposure (Institute Partners) */}
      <InternshipInstitutes onPartnerClick={() => setProjectModalOpen(true)} />

      {/* Quotation Callback Banner & Dark 4-Column Footer */}
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

      <InternshipEnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        programTitle={selectedProgram}
      />
    </main>
  );
}
