"use client";

import React from "react";
import Image from "next/image";

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
        <div className="stagger-container grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-8 md:gap-0 pb-10">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`stagger-item group flex flex-col items-center justify-center text-center px-4 transition-transform duration-300 hover:-translate-y-1 cursor-default ${
                idx < stats.length - 1 ? "md:border-r md:border-gray-300" : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-blue-600 tracking-tight leading-none mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-medium text-gray-700 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="reveal-on-scroll text-center pt-2 pb-8">
          <p className="text-base sm:text-lg font-semibold text-gray-700 tracking-tight">
            Over 50+ Business Trust Us
          </p>
        </div>

        {/* Partner Logos: Mobile 4-in-a-row + 2-centered, Desktop 2 rows of 9 */}
        <div className="stagger-container w-full flex flex-col items-center">
          {/* Mobile Layout (< md): 4 per line continuously + last 2 centered in final line */}
          <div className="flex md:hidden flex-col items-center w-full max-w-[340px] sm:max-w-[400px] mx-auto">
            {/* First 16 logos (4 rows of 4) */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3 justify-items-center w-full">
              {[...row1Logos, ...row2Logos].slice(0, 16).map((logo, idx) => (
                <div
                  key={`m-grid-${idx}`}
                  className="stagger-item interactive-card w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-2xl bg-white flex items-center justify-center p-2 shadow-xs border border-gray-100/90 active:scale-95 transition-all cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={76}
                    height={76}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              ))}
            </div>

            {/* Last 2 logos centered in the last line */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 w-full mt-2.5 sm:mt-3">
              {[...row1Logos, ...row2Logos].slice(16, 18).map((logo, idx) => (
                <div
                  key={`m-last-${idx}`}
                  className="stagger-item interactive-card w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-2xl bg-white flex items-center justify-center p-2 shadow-xs border border-gray-100/90 active:scale-95 transition-all cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={76}
                    height={76}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout (>= md): 2 Rows of 9 Partner Logos */}
          <div className="hidden md:flex flex-col gap-5 sm:gap-6 items-center w-full">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 w-full">
              {row1Logos.map((logo, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="stagger-item interactive-card w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-gray-100/90 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={88}
                    height={88}
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
                  className="stagger-item interactive-card w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-gray-100/90 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={88}
                    height={88}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
