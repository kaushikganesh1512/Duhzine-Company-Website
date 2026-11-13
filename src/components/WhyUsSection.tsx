"use client";

import React from "react";
import Image from "next/image";

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
      className="flex flex-col w-full max-w-[1280px] mx-auto items-center gap-10 relative bg-[#f4f7ff] px-4 sm:px-8 lg:px-[120px] py-16 overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* 3D Faceted Sphere floating on the right border */}
      <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-[180px] h-[180px] pointer-events-none select-none z-10 opacity-90">
        <Image
          src="/images/service_sphere_faceted_clean.png"
          alt="3D Faceted sphere"
          width={180}
          height={180}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center gap-4 relative self-stretch w-full text-center">
        {/* Pill Badge */}
        <div className="flex w-fit items-center justify-center gap-2.5 px-4 py-1.5 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
          <span className="relative font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
            Mission &amp; Vision
          </span>
        </div>

        {/* Heading */}
        <h2
          id="why-us-heading"
          className="font-semibold text-black text-[32px] sm:text-[40px] tracking-[-2.00px] leading-[39px] sm:leading-[48px]"
        >
          Why Businesses Choose{" "}
          <span className="text-blue-600">Duhzine IT Solutions ?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-medium text-black text-base sm:text-lg tracking-[-0.36px] leading-[27px] max-w-3xl">
          We design, develop, and implement digital solutions that help businesses
          work smarter, operate efficiently, and grow with confidence.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative self-stretch w-full mt-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-4 p-7 bg-white rounded-2xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow relative"
          >
            {/* Person Icon in soft light-blue circle */}
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-1">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <h3 className="font-semibold text-black text-xl tracking-tight leading-snug">
              {item.title}
            </h3>

            <p className="font-normal text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
