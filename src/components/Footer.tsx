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
    <footer
      id="contact"
      className="w-full bg-[#05070f] text-white pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background ambient lighting matching fourth image */}
      <div className="absolute top-8 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[100px] relative z-10">
        {/* Top: Custom Quote / Callback Block matching fourth image */}
        <div className="relative rounded-2xl bg-[#080d1a]/85 backdrop-blur-sm p-8 sm:p-12 text-white overflow-hidden border border-neutral-800 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-20">
          {/* Subtle inner corner glow */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-blue-500/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-[30px] font-semibold text-white tracking-tight leading-snug mb-3">
              Need a custom quotation or have questions?
            </h2>
            <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed font-normal">
              Not sure which package fits your requirements? Talk to our web design
              experts directly and get a quick custom quote.
            </p>
          </div>

          {/* Right Action Buttons matching fourth image */}
          <div className="relative z-10 flex flex-wrap items-center gap-4 shrink-0">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919566123876"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-medium text-sm sm:text-base transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* WhatsApp Vector Icon */}
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.906.531 3.687 1.453 5.219L2 22l4.906-1.422c1.469.844 3.172 1.344 5.125 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.688 0-3.266-.469-4.609-1.281l-.328-.188-3.047.891.891-2.969-.219-.344C3.844 14.984 3.375 13.562 3.375 12c0-4.766 3.891-8.625 8.656-8.625 4.766 0 8.625 3.859 8.625 8.625 0 4.781-3.859 8.625-8.625 8.625zm4.734-6.453c-.266-.125-1.547-.766-1.781-.844-.25-.094-.438-.141-.625.141-.188.266-.719.891-.875 1.078-.172.188-.328.203-.594.078-.266-.125-1.125-.422-2.141-1.328-.797-.703-1.328-1.578-1.484-1.844-.156-.266-.016-.406.109-.547.125-.109.266-.281.391-.422.141-.141.188-.25.281-.422.094-.172.047-.328-.016-.453-.078-.141-.625-1.516-.859-2.078-.219-.547-.453-.469-.625-.469-.156 0-.344-.016-.531-.016-.188 0-.5.078-.766.359-.266.281-1.016.984-1.016 2.406 0 1.422 1.047 2.797 1.188 2.984.156.203 2.062 3.141 5 4.406.703.297 1.25.484 1.688.625.719.219 1.375.188 1.891.109.578-.078 1.766-.719 2.016-1.422.25-.688.25-1.281.172-1.406-.062-.141-.25-.219-.516-.344z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            {/* Call Us Button */}
            <a
              href="tel:9566123876"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium text-sm sm:text-base transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Phone Vector Icon */}
              <svg
                className="w-5 h-5 fill-none stroke-currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Us: 9566123876</span>
            </a>
          </div>
        </div>

        {/* 4 Columns Grid matching fourth image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          {/* Column 1: Contact Us & Brand */}
          <div className="flex flex-col items-start">
            {/* Duhzine Logo */}
            <div className="mb-4">
              <Image
                src="/images/header_logo.png"
                alt="Duhzine IT Solutions Pvt. Ltd."
                width={170}
                height={48}
                className="h-10 w-auto object-contain"
                quality={100}
              />
            </div>

            <h3 className="text-sm font-bold text-white tracking-wider uppercase mt-2 mb-3.5">
              CONTACT US
            </h3>

            <div className="flex flex-col gap-3 text-xs sm:text-sm text-gray-300">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <span className="text-base leading-none">📍</span>
                <span>OMR, Navalur, Chennai - 600130</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <span className="text-base leading-none">📞</span>
                <a
                  href="tel:+919841483195"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 98414 83195
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <span className="text-base leading-none">✉️</span>
                <a
                  href="mailto:info@duhzineitsolutions.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@duhzineitsolutions.com
                </a>
              </div>
            </div>

            {/* Social Icons Row with exact colors from fourth image */}
            <div className="flex items-center gap-3 mt-6">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-sm">in</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919841483195"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
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
                className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-white"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Website Services */}
          <div>
            <h3 className="text-[17px] font-semibold text-white tracking-tight mb-4">
              Website Services
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              {websiteServices.map((service) => (
                <li key={service} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Marketing Services */}
          <div>
            <h3 className="text-[17px] font-semibold text-white tracking-tight mb-4">
              Marketing Services
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              {marketingServices.map((service) => (
                <li key={service} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CRM Solutions */}
          <div>
            <div className="relative inline-block mb-4">
              <h3 className="text-[17px] font-semibold text-white tracking-tight">
                CRM Solutions
              </h3>
              <div className="w-full h-0.5 bg-blue-600 mt-1" />
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              {crmSolutions.map((solution) => (
                <li key={solution} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400 font-normal">
            &copy; 2026 Duhzine IT Solutions Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
