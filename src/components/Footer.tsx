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
      className="w-full bg-[#05070f] text-white pt-16 pb-12 relative overflow-hidden"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
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
              />
            </div>

            <h3 className="text-sm font-bold text-white tracking-wider uppercase mt-2 mb-3">
              CONTACT US
            </h3>

            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
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

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 mt-6">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0077b5] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
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
                  <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.906.531 3.687 1.453 5.219L2 22l4.906-1.422c1.469.844 3.172 1.344 5.125 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.688 0-3.266-.469-4.609-1.281l-.328-.188-3.047.891.891-2.969-.219-.344C3.844 14.984 3.375 13.562 3.375 12c0-4.766 3.891-8.625 8.656-8.625 4.766 0 8.625 3.859 8.625 8.625 0 4.781-3.859 8.625-8.625 8.625z" />
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
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
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
            <h3 className="text-base font-semibold text-white tracking-tight mb-4">
              Website Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              {websiteServices.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Marketing Services */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-tight mb-4">
              Marketing Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              {marketingServices.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CRM Solutions */}
          <div>
            <div className="relative inline-block mb-4">
              <h3 className="text-base font-semibold text-white tracking-tight">
                CRM Solutions
              </h3>
              <div className="w-full h-0.5 bg-blue-600 mt-1" />
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              {crmSolutions.map((solution) => (
                <li key={solution} className="flex items-center gap-2">
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
