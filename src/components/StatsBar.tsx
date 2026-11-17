"use client";

import React from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";

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
  // Repeat items for seamless continuous looping in infinite marquee
  const repeatedRow1 = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos];
  const repeatedRow2 = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section className="w-full py-12 md:py-16 bg-[#f4f7ff] relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Key Numerical Stats Row with Smooth Counted Effect on First View */}
        <div className="stagger-container grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-8 md:gap-0 pb-12">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`stagger-item group flex flex-col items-center justify-center text-center px-4 transition-transform duration-300 hover:-translate-y-1 cursor-default ${
                idx < stats.length - 1 ? "md:border-r md:border-gray-300" : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-blue-600 tracking-tight leading-none mb-3 group-hover:scale-105 transition-transform duration-300 inline-block font-sans">
                <AnimatedCounter value={stat.value} duration={1800} />
              </span>
              <span className="text-sm sm:text-base font-medium text-gray-700 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Subheading */}
        <div className="text-center pt-2 pb-8">
          <p className="text-base sm:text-lg font-semibold text-gray-700 tracking-tight">
            Over 50+ Business Trust Us
          </p>
        </div>
      </div>

      {/* Brand Logos Continuous Scrolling Motion Showcase */}
      <div className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-6 py-2">
        {/* Left & Right Gradient Shadows for Soft Fade Effect */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#f4f7ff] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#f4f7ff] to-transparent z-10" />

        {/* First Line: Scrolls continuously to the LEFT */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-3 sm:gap-5 lg:gap-6 shrink-0 pr-3 sm:pr-5 lg:pr-6">
            {repeatedRow1.map((logo, idx) => (
              <div
                key={`scroll-left-${idx}`}
                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-gray-100/90 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer"
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

        {/* Second Line: Scrolls continuously to the RIGHT */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-3 sm:gap-5 lg:gap-6 shrink-0 pr-3 sm:pr-5 lg:pr-6">
            {repeatedRow2.map((logo, idx) => (
              <div
                key={`scroll-right-${idx}`}
                className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-xs border border-gray-100/90 hover:scale-110 hover:shadow-md transition-all duration-300 cursor-pointer"
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
    </section>
  );
}
