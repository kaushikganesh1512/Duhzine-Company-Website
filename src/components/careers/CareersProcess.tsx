"use client";

import React from "react";

export default function CareersProcess() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description:
        "Submit your application with your updated resume and portfolio. Our recruitment team carefully reviews every application to identify the best match for the role.",
    },
    {
      number: "02",
      title: "Screening & Interview",
      description:
        "Shortlisted candidates will have a brief HR discussion to understand their background, career goals, communication skills, and overall fit for the position.",
    },
    {
      number: "03",
      title: "Offer Releasing",
      description:
        "Once you successfully completed the interview process, we'll send your offer letter and guide you through the next step of onboarding process.",
    },
    {
      number: "04",
      title: "Onboarding Process",
      description:
        "Welcome to Duhzine! Once you accept the offer, our onboarding process ensures a smooth and professional transition into your new full-time role.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8faff] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-5 hover:scale-[1.02] transition-transform">
            <span>Hiring Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Our Simple &amp; Transparent Hiring Process
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed italic [text-wrap:balance]">
            We believe in hiring talented individuals through a fair, efficient, and candidate-friendly process. From your application to joining our team, every step is designed to help you showcase your skills and find the right opportunity at Duhzine.
          </p>
        </div>

        {/* 4-Step Stepper Progress Bar */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Blue Line behind steps on desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-0.5 bg-blue-600 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Number Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-extrabold text-base flex items-center justify-center shadow-md mb-6 relative group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <span>{step.number}</span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed italic">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
