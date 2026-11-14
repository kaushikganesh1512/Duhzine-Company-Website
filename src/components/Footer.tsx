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
                  src="/images/logo_white.png"
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

              {/* Contact Info List with Exact Icons from User Reference */}
              <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-gray-300">
                {/* Location with Google Maps white rounded tile */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 relative">
                    <Image
                      src="/images/footer_icons/icon_map.png"
                      alt="Location"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain rounded-md"
                      quality={100}
                      unoptimized
                    />
                  </div>
                  <span className="font-normal text-gray-200">OMR, Navalur, Chennai - 600130</span>
                </div>

                {/* Phone with dark navy blue rounded tile */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 relative">
                    <Image
                      src="/images/footer_icons/icon_phone.png"
                      alt="Phone"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain rounded-md"
                      quality={100}
                      unoptimized
                    />
                  </div>
                  <a
                    href="tel:+919841483195"
                    className="font-normal text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    +91 98414 83195
                  </a>
                </div>

                {/* Email with white rounded Gmail tile */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 relative">
                    <Image
                      src="/images/footer_icons/icon_mail.png"
                      alt="Email"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain rounded-md"
                      quality={100}
                      unoptimized
                    />
                  </div>
                  <a
                    href="mailto:info@duhzineitsolutions.com"
                    className="font-normal text-gray-200 hover:text-blue-400 transition-colors"
                  >
                    info@duhzineitsolutions.com
                  </a>
                </div>
              </div>

              {/* Social Media Icons (4 exact tiles matching user uploaded image) */}
              <div className="flex items-center gap-3.5 sm:gap-4 mt-6">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 relative transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/images/footer_icons/icon_linkedin.png"
                    alt="LinkedIn"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-xl shadow-sm"
                    quality={100}
                    unoptimized
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919841483195"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 relative transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/images/footer_icons/icon_whatsapp.png"
                    alt="WhatsApp"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-xl shadow-sm"
                    quality={100}
                    unoptimized
                  />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 relative transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Image
                    src="/images/footer_icons/icon_facebook.png"
                    alt="Facebook"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-xl shadow-sm"
                    quality={100}
                    unoptimized
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 relative transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/images/footer_icons/icon_instagram.png"
                    alt="Instagram"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain rounded-xl shadow-sm"
                    quality={100}
                    unoptimized
                  />
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
