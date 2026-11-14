"use client";

import React from "react";
import Image from "next/image";

interface WhyUsSectionProps {
  title?: string;
  highlight?: string;
}

export default function WhyUsSection({ title, highlight }: WhyUsSectionProps) {
  const displayTitle = title || "Why Businesses Choose";
  const displayHighlight = highlight !== undefined ? highlight : "Duhzine IT Solutions ?";
  const features = [
    {
      title: "One-Stop Solution",
      description:
        "From strategy and design to development and quality assurance, we offer end-to-end technology services under one roof.",
    },
    {
      title: "Customer-Centric",
      description:
        "We prioritize your goals, ensuring tailored solutions, transparent communication, and long-term partnership.",
    },
    {
      title: "Leverage Expertise",
      description:
        "We combine deep industry experience and a skilled global team to deliver reliable, high-quality IT solutions that businesses trust.",
    },
  ];

  return (
    <section
      className="flex flex-col w-full max-w-7xl mx-auto items-center gap-12 relative bg-[#f4f7ff] px-6 sm:px-10 lg:px-16 py-12 md:py-16 overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Right 3D Faceted Sphere (Interactive, strictly positioned at right edge) */}
      <div className="hidden xl:block absolute -right-6 2xl:right-0 top-1/2 -translate-y-1/2 w-[130px] 2xl:w-[170px] pointer-events-auto select-none z-10 opacity-90 hover:opacity-100">
        <div className="animate-float-slow transition-all duration-700 ease-out hover:scale-110 hover:rotate-6 cursor-pointer">
          <Image
            src="/images/side_why_us_sphere.png"
            alt="3D Faceted Sphere Artwork"
            width={220}
            height={500}
            quality={100}
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* Header */}
      <div className="reveal-on-scroll flex flex-col items-center gap-5 relative self-stretch w-full text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-2 hover:scale-[1.02] transition-transform">
          <span>Mission &amp; Vision</span>
        </div>

        {/* Heading */}
        <h2
          id="why-us-heading"
          className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-2px] leading-tight [text-wrap:balance]"
        >
          {displayTitle}{" "}
          {displayHighlight && (
            <span className="text-blue-600">{displayHighlight}</span>
          )}
        </h2>

        {/* Subtitle */}
        <p className="font-medium text-black text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl [text-wrap:balance]">
          We design, develop, and implement digital solutions that help businesses
          work smarter, operate efficiently, and grow with confidence.
        </p>
      </div>

      {/* 3 Cards Grid (Spacious, balanced, consistent) */}
      <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-8 relative self-stretch w-full mt-2 z-20">
        {features.map((item) => (
          <div
            key={item.title}
            className="stagger-item interactive-card group flex flex-col items-start gap-5 p-9 sm:p-11 bg-white rounded-3xl shadow-xs border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all relative cursor-pointer"
          >
            {/* Person Icon in soft light-blue circle matching design */}
            <div className="w-14 h-14 rounded-full bg-[#edf5ff] group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white mb-2 shadow-xs group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-7 h-7 currentColor transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <h3 className="font-semibold text-black text-2xl tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-200">
              {item.title}
            </h3>

            <p className="font-normal text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
