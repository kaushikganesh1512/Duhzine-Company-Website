"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const websiteServices = [
    "Business Website Development",
    "Landing Page Development",
    "Ecommerce Development",
    "Custom Website Development",
    "Website Redesign & Maintenance",
  ];

  const marketingServices = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Google Ads Management",
    "Video Editing & Marketing",
    "Lead Generation",
  ];

  const crmSolutions = ["Salon OS", "Gym OS", "Clinic OS"];

  return (
    <footer id="contact" className="w-full bg-[#f4f7ff] pt-12 pb-16 overflow-hidden">
      {/* Unified Footer Container matching exact Image 1 design */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl md:rounded-3xl bg-neutral-950 text-white overflow-hidden shadow-2xl border border-neutral-800">
          {/* Top-Left Ambient Blue Glow */}
          <div className="absolute top-0 left-0 w-[450px] h-[300px] bg-blue-600/25 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Bottom-Right Ambient Radial Blue Glow */}
          <div className="absolute bottom-0 right-0 w-[550px] h-[450px] bg-blue-600/35 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* ======================================================== */}
          {/* 1. TOP QUOTATION / CALLBACK SECTION                      */}
          {/* ======================================================== */}
          <div className="relative z-10 px-8 sm:px-12 py-10 sm:py-12 border-b border-white/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 bg-gradient-to-r from-blue-900/30 via-neutral-950/80 to-blue-950/20 backdrop-blur-xs">
            {/* Left Headline & Subtitle */}
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-snug mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Need a custom quotation or have questions?
              </h2>
              <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed font-normal font-['Plus_Jakarta_Sans',sans-serif]">
                Not sure which package fits your requirements? Talk to our web design experts directly and get a quick custom quote.
              </p>
            </div>

            {/* Right Buttons: Chat on WhatsApp & Call Us */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919566123876"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {/* Clean WhatsApp Vector Icon */}
                <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.906.531 3.687 1.453 5.219L2 22l4.906-1.422c1.469.844 3.172 1.344 5.125 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.688 0-3.266-.469-4.609-1.281l-.328-.188-3.047.891.891-2.969-.219-.344C3.844 14.984 3.375 13.562 3.375 12c0-4.766 3.891-8.625 8.656-8.625 4.766 0 8.625 3.859 8.625 8.625 0 4.781-3.859 8.625-8.625 8.625zm4.734-6.453c-.266-.125-1.547-.766-1.781-.844-.25-.094-.438-.141-.625.141-.188.266-.719.891-.875 1.078-.172.188-.328.203-.594.078-.266-.125-1.125-.422-2.141-1.328-.797-.703-1.328-1.578-1.484-1.844-.156-.266-.016-.406.109-.547.125-.109.266-.281.391-.422.141-.141.188-.25.281-.422.094-.172.047-.328-.016-.453-.078-.141-.625-1.516-.859-2.078-.219-.547-.453-.469-.625-.469-.156 0-.344-.016-.531-.016-.188 0-.5.078-.766.359-.266.281-1.016.984-1.016 2.406 0 1.422 1.047 2.797 1.188 2.984.156.203 2.062 3.141 5 4.406.703.297 1.25.484 1.688.625.719.219 1.375.188 1.891.109.578-.078 1.766-.719 2.016-1.422.25-.688.25-1.281.172-1.406-.062-.141-.25-.219-.516-.344z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call Us Button */}
              <a
                href="tel:9566123876"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-sky-900/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {/* Clean Telephone Vector Icon */}
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.93c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.55c0-.55-.45-1-.99-1z" />
                </svg>
                <span>Call Us: 9566123876</span>
              </a>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. 4 COLUMNS CONTENT SECTION                             */}
          {/* ======================================================== */}
          <div className="relative z-10 px-8 sm:px-12 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Column 1: Brand & Contact Info */}
            <div className="flex flex-col items-start">
              {/* Duhzine Logo */}
              <div className="mb-5">
                <Image
                  src="/images/header_logo.png"
                  alt="Duhzine IT Solutions Pvt. Ltd."
                  width={180}
                  height={52}
                  className="h-10 w-auto object-contain"
                  quality={100}
                />
              </div>

              {/* CONTACT US Title */}
              <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
                CONTACT US
              </h3>

              {/* Contact Info List with Exact Image 1 Icons */}
              <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-gray-300">
                {/* Location with Google Maps styled icon */}
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[4px] bg-[#34a853]/20 border border-[#34a853]/40 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#34a853]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <span>OMR, Navalur, Chennai - 600130</span>
                </div>

                {/* Phone with dark blue badge icon */}
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[4px] bg-[#1e40af]/30 border border-[#3b82f6]/40 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#60a5fa]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.057 15.057 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.93c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.55c0-.55-.45-1-.99-1z" />
                    </svg>
                  </div>
                  <a href="tel:+919841483195" className="hover:text-blue-400 transition-colors">
                    +91 98414 83195
                  </a>
                </div>

                {/* Email with Gmail styled icon */}
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-[4px] bg-white/10 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M1.5 5.25v13.5a1.5 1.5 0 001.5 1.5h3.75V10.5L1.5 5.25z" />
                      <path fill="#34A853" d="M17.25 20.25h3.75a1.5 1.5 0 001.5-1.5V5.25L17.25 10.5v9.75z" />
                      <path fill="#EA4335" d="M17.25 10.5L12 6.75 6.75 10.5V5.25L12 1.5l5.25 3.75v5.25z" />
                      <path fill="#FBBC05" d="M1.5 5.25l5.25 5.25V5.25L3.6 3.75A1.5 1.5 0 001.5 5.25z" />
                      <path fill="#C5221F" d="M22.5 5.25A1.5 1.5 0 0020.4 3.75L17.25 5.25v5.25l5.25-5.25z" />
                    </svg>
                  </div>
                  <a href="mailto:info@duhzineitsolutions.com" className="hover:text-blue-400 transition-colors">
                    info@duhzineitsolutions.com
                  </a>
                </div>
              </div>

              {/* Social Media Icons (4 rounded squares matching Image 1) */}
              <div className="flex items-center gap-3 mt-6">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-[6px] bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919841483195"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-[6px] bg-[#25d366] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.906.531 3.687 1.453 5.219L2 22l4.906-1.422c1.469.844 3.172 1.344 5.125 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.688 0-3.266-.469-4.609-1.281l-.328-.188-3.047.891.891-2.969-.219-.344C3.844 14.984 3.375 13.562 3.375 12c0-4.766 3.891-8.625 8.656-8.625 4.766 0 8.625 3.859 8.625 8.625 0 4.781-3.859 8.625-8.625 8.625zm4.734-6.453c-.266-.125-1.547-.766-1.781-.844-.25-.094-.438-.141-.625.141-.188.266-.719.891-.875 1.078-.172.188-.328.203-.594.078-.266-.125-1.125-.422-2.141-1.328-.797-.703-1.328-1.578-1.484-1.844-.156-.266-.016-.406.109-.547.125-.109.266-.281.391-.422.141-.141.188-.25.281-.422.094-.172.047-.328-.016-.453-.078-.141-.625-1.516-.859-2.078-.219-.547-.453-.469-.625-.469-.156 0-.344-.016-.531-.016-.188 0-.5.078-.766.359-.266.281-1.016.984-1.016 2.406 0 1.422 1.047 2.797 1.188 2.984.156.203 2.062 3.141 5 4.406.703.297 1.25.484 1.688.625.719.219 1.375.188 1.891.109.578-.078 1.766-.719 2.016-1.422.25-.688.25-1.281.172-1.406-.062-.141-.25-.219-.516-.344z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-[6px] bg-[#1877f2] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-[6px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-white" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Website Services */}
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-5 font-['Figtree',sans-serif]">
                Website Services
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                {websiteServices.map((service) => (
                  <li key={service} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                    <span className="hover:text-white transition-colors cursor-pointer">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Marketing Services */}
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-5 font-['Figtree',sans-serif]">
                Marketing Services
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                {marketingServices.map((service) => (
                  <li key={service} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                    <span className="hover:text-white transition-colors cursor-pointer">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: CRM Solutions */}
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-5 font-['Figtree',sans-serif]">
                CRM Solutions
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                {crmSolutions.map((solution) => (
                  <li key={solution} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                    <span className="hover:text-white transition-colors cursor-pointer">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. BOTTOM COPYRIGHT ROW                                  */}
          {/* ======================================================== */}
          <div className="relative z-10 border-t border-neutral-700/60 px-8 py-6 text-center">
            <p className="text-xs sm:text-sm text-gray-300 font-normal font-['Nunito',sans-serif]">
              &copy; 2026 Duhzine IT Solutions Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
