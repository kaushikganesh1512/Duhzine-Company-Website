"use client";

import React from "react";

const stats = [
  { value: "800+", label: "Completed Projects" },
  { value: "4+", label: "Years of Experience" },
  { value: "60+", label: "Global Customers" },
  { value: "2+", label: "Countries Clients Served" },
];

const row1Logos = [
  { src: "/images/drive/Trust Partner image 1.jpg", alt: "PAGE3 Salon" },
  { src: "/images/drive/Trust Partner image 2.jpg", alt: "OOS" },
  { src: "/images/drive/Trust Partner image 3.jpg", alt: "VJ Unique Properties" },
  { src: "/images/drive/Trust Partner image 4.jpg", alt: "BK Packers & Movers" },
  { src: "/images/drive/Trust Partner image 5.jpg", alt: "Abudras Pre-School" },
  { src: "/images/drive/Trust Partner image 6.jpg", alt: "LegalFiles" },
  { src: "/images/drive/Trust Partner image 7.jpg", alt: "Maruti Suzuki" },
  { src: "/images/drive/Trust Partner image 8.jpg", alt: "D Luxury Salon" },
  { src: "/images/drive/Trust Partner image 9.jpg", alt: "Pro Plus Smart Salon" },
];

const row2Logos = [
  { src: "/images/drive/Trust Partner image 7.jpg", alt: "Maruti Suzuki" },
  { src: "/images/drive/Trust Partner image 8.jpg", alt: "D Luxury Salon" },
  { src: "/images/drive/Trust Partner image 10.jpg", alt: "Qurious Lil'Mindz" },
  { src: "/images/drive/Trust Partner image 11.jpg", alt: "Little Star" },
  { src: "/images/drive/Trust Partner image 12.jpg", alt: "M5 Mindset Fitness Studio" },
  { src: "/images/drive/Trust Partner image 13.jpg", alt: "Varunkutty Mandhi Biriyani" },
  { src: "/images/drive/Trust Partner image 14.jpg", alt: "ST" },
  { src: "/images/drive/Trust Partner image 15.jpg", alt: "Pranav Kid's Play School" },
  { src: "/images/drive/Trust Partner image 4.jpg", alt: "BK Packers & Movers" },
];

export default function StatsBar() {
  return (
    <section className="w-full py-10 md:py-14 bg-[#f4f7ff] relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Key Numerical Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-8 md:gap-0 pb-10">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                idx < stats.length - 1 ? "md:border-r md:border-gray-300" : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-blue-600 tracking-tight leading-none mb-3">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-medium text-gray-700 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center pt-2 pb-8">
          <p className="text-base sm:text-lg font-semibold text-gray-700 tracking-tight">
            Over 50+ Business Trust Us
          </p>
        </div>

        {/* 2 Rows of 9 Partner Logos from Google Drive */}
        <div className="flex flex-col gap-5 sm:gap-6 items-center">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 w-full">
            {row1Logos.map((logo, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-gray-100/90 hover:scale-105 transition-transform"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 w-full">
            {row2Logos.map((logo, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-gray-100/90 hover:scale-105 transition-transform"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
