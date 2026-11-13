"use client";

import React from "react";

export default function WhyUsSection() {
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
      className="flex flex-col w-full max-w-7xl mx-auto items-center gap-14 relative bg-[#f4f7ff] px-6 sm:px-10 lg:px-16 py-20 md:py-28 overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-5 relative self-stretch w-full text-center">
        {/* Pill Badge */}
        <div className="flex w-fit items-center justify-center gap-2.5 px-6 py-2 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
          <span className="relative font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
            Mission &amp; Vision
          </span>
        </div>

        {/* Heading */}
        <h2
          id="why-us-heading"
          className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-2px] leading-tight"
        >
          Why Businesses Choose{" "}
          <span className="text-blue-600">Duhzine IT Solutions ?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-medium text-black text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl">
          We design, develop, and implement digital solutions that help businesses
          work smarter, operate efficiently, and grow with confidence.
        </p>
      </div>

      {/* 3 Cards Grid (Spacious, balanced, consistent) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative self-stretch w-full mt-2 z-20">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-5 p-9 sm:p-11 bg-white rounded-3xl shadow-xs border border-gray-100 hover:shadow-lg transition-all relative"
          >
            {/* Person Icon in soft light-blue circle matching design */}
            <div className="w-14 h-14 rounded-full bg-[#edf5ff] flex items-center justify-center text-blue-600 mb-2 shadow-xs">
              <svg
                className="w-7 h-7 text-blue-600"
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

            <h3 className="font-semibold text-black text-2xl tracking-tight leading-snug">
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
