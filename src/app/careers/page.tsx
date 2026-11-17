"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CareersHero from "@/components/careers/CareersHero";
import CareersCulture from "@/components/careers/CareersCulture";
import CareersOpenPositions from "@/components/careers/CareersOpenPositions";
import CareersProcess from "@/components/careers/CareersProcess";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import JobApplyModal from "@/components/careers/JobApplyModal";

export default function CareersPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
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

      {/* Hero Section */}
      <CareersHero />

      {/* Section 2: Work • Learn • Grow */}
      <CareersCulture />

      {/* Section 3: Open Positions (6 Roles with Synchronized View More Details) */}
      <CareersOpenPositions onApply={handleApply} />

      {/* Section 4: Our Simple & Transparent Hiring Process */}
      <CareersProcess />

      {/* Footer */}
      <Footer />

      {/* Interactive Application & Booking Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <JobApplyModal
        isOpen={jobModalOpen}
        onClose={() => setJobModalOpen(false)}
        jobTitle={selectedJob}
      />
    </main>
  );
}

