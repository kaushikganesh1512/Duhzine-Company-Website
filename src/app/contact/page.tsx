"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactOffice from "@/components/contact/ContactOffice";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f7ff] text-[#0f172a] relative">
      {/* Top Header Navigation */}
      <Navbar onBookCall={() => setBookingModalOpen(true)} />

      {/* Hero Section */}
      <ContactHero onContactClick={scrollToForm} />

      {/* Our Office in Chennai with Google Map */}
      <ContactOffice />

      {/* Tell Us About Your Project Form */}
      <ContactForm />

      {/* Quotation Callback & Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
