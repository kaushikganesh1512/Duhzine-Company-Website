"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CareersHero from "@/components/careers/CareersHero";
import CareersCulture from "@/components/careers/CareersCulture";
import CareersOpenPositions from "@/components/careers/CareersOpenPositions";
import CareersProcess from "@/components/careers/CareersProcess";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ProjectModal from "@/components/ProjectModal";
import JobApplyModal from "@/components/careers/JobApplyModal";

export default function CareersPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("UI/UX Designer");

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setJobModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#f8faff] text-[#0f172a] relative">
      {/* Top Header Navigation (Consistent Black Title Card) */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section with 3D Laptop & 4 Feature Highlights */}
      <CareersHero />

      {/* Section 2: Work • Learn • Grow */}
      <CareersCulture />

      {/* Section 3: Open Positions (6 Roles with Expandable View More Details) */}
      <CareersOpenPositions onApply={handleApply} />

      {/* Section 4: Our Simple & Transparent Hiring Process */}
      <CareersProcess />

      {/* Section 5: Custom Quote / Callback Block */}
      <CtaSection onStartProject={() => setProjectModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Interactive Application & Booking Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />

      <JobApplyModal
        isOpen={jobModalOpen}
        onClose={() => setJobModalOpen(false)}
        jobTitle={selectedJob}
      />
    </main>
  );
}
