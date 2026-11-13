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
      className="flex flex-col w-full max-w-[1280px] mx-auto items-center gap-12 relative bg-[#f4f7ff] px-6 sm:px-12 lg:px-16 xl:px-[100px] py-20 overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* 3D Faceted Sphere floating prominently on the right border */}
      <div className="hidden lg:block absolute -right-20 xl:-right-24 top-[50%] -translate-y-1/2 w-[240px] xl:w-[280px] h-[240px] xl:h-[280px] pointer-events-none select-none z-10 opacity-95">
        <Image
          src="/images/service_sphere_faceted_clean.png"
          alt="3D Faceted sphere"
          width={280}
          height={280}
          className="w-full h-full object-contain"
          quality={100}
        />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center gap-4 relative self-stretch w-full text-center">
        {/* Pill Badge */}
        <div className="flex w-fit items-center justify-center gap-2.5 px-5 py-1.5 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
          <span className="relative font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
            Mission &amp; Vision
          </span>
        </div>

        {/* Heading */}
        <h2
          id="why-us-heading"
          className="font-semibold text-black text-[34px] sm:text-[42px] lg:text-[46px] tracking-[-2.00px] leading-[42px] sm:leading-[52px]"
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

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 relative self-stretch w-full mt-2 z-20">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-4 p-8 sm:p-9 bg-white rounded-2xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow relative"
          >
            {/* Person Icon in soft light-blue circle matching third image */}
            <div className="w-12 h-12 rounded-full bg-[#edf5ff] flex items-center justify-center text-blue-600 mb-1">
              <svg
                className="w-6 h-6 text-blue-600"
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

            <h3 className="font-semibold text-black text-[22px] tracking-tight leading-snug">
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
