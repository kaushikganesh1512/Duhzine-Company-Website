"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TypingHeroTitle from "@/components/TypingHeroTitle";

interface PortfolioHeroProps {
  onContactClick: () => void;
  onViewWorksClick: () => void;
}

export default function PortfolioHero({
  onContactClick,
  onViewWorksClick,
}: PortfolioHeroProps) {
  const stats = [
    { number: "150+", label: "Completed Projects" },
    { number: "4+", label: "Years of Experience" },
    { number: "80+", label: "Global Customers" },
    { number: "2+", label: "Countries Clients Served" },
  ];

  const partners = [
    "/images/portfolio/partner_1.jpg",
    "/images/portfolio/partner_2.jpg",
    "/images/portfolio/partner_3.jpg",
    "/images/portfolio/partner_4.jpg",
    "/images/portfolio/partner_5.jpg",
    "/images/portfolio/partner_6.jpg",
    "/images/portfolio/partner_7.jpg",
    "/images/portfolio/partner_8.jpg",
    "/images/portfolio/partner_9.jpg",
  ];

  return (
    <section className="relative w-full bg-[#f4f7ff] pt-14 pb-16 md:pt-20 md:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-8 hover:scale-[1.02] transition-transform max-w-full">
          <span>Website Development Projects That Drive Business Growth</span>
        </div>

        {/* Main Headline with Typing Effect */}
        <TypingHeroTitle
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-black tracking-[-1.5px] leading-[1.12] mb-6 max-w-5xl mx-auto [text-wrap:balance]"
          segments={[
            { text: "Creative Web Design & Custom Digital " },
            { text: "Solutions for Modern Businesses", highlight: true, className: "text-[#2563eb]" },
          ]}
        />

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-normal leading-relaxed max-w-4xl mx-auto mb-10 italic [text-wrap:balance]">
          At Duhzine IT Solutions, we create professional, responsive, and SEO-friendly websites for diverse industries. Our portfolio showcases business and e-commerce projects, combining creative design and modern technology to help brands grow digitally.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <button
            type="button"
            onClick={onViewWorksClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>View all works</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-blue-50/50 text-blue-600 font-semibold text-sm sm:text-base border border-blue-600 shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Contact us
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 max-w-5xl mx-auto mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                index !== stats.length - 1 ? "md:border-r md:border-slate-300/80" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 tracking-tight font-sans">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-gray-800 mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Over 50+ Business Trust Us */}
        <div className="flex flex-col items-center gap-6 mt-14">
          <p className="text-sm font-semibold text-gray-700 tracking-normal">
            Over 50+ Business Trust Us
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
            {partners.map((src, index) => (
              <div
                key={index}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center p-1 hover:scale-105 transition-transform"
              >
                <Image
                  src={src}
                  alt={`Client Partner Logo ${index + 1}`}
                  width={64}
                  height={64}
                  unoptimized
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

