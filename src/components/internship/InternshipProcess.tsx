"use client";

import React from "react";

export default function InternshipProcess() {
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
        "Welcome to Duhzine! Once you accept the offer and complete the internship fee payment, our onboarding process ensures a smooth transition into your new role.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f8faff] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-4 hover:scale-[1.02] transition-transform">
            <span>Intern Hiring Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-snug [text-wrap:balance]">
            Our Simple &amp; Transparent Hiring Process
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-neutral-600 font-normal leading-relaxed max-w-3xl [text-wrap:balance] italic">
            We believe in hiring talented individuals through a fair, efficient, and
            candidate-friendly process. From your application to joining our team, every step is
            designed to help you showcase your skills and find the right opportunity at Duhzine.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="relative mt-8">
          {/* Continuous blue connecting line behind the numbered circles */}
          <div className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-0.5 bg-blue-600 z-0 pointer-events-none" />

          <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="stagger-item group flex flex-col items-center text-center bg-white sm:bg-transparent p-6 sm:p-2 rounded-2xl border border-neutral-100 sm:border-0 shadow-sm sm:shadow-none hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                {/* Numbered Indicator Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-extrabold text-lg flex items-center justify-center shadow-md mb-6 relative group-hover:scale-110 group-hover:shadow-[0px_0px_0px_6px_rgba(37,99,235,0.25)] transition-all duration-300">
                  <span>{step.number}</span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg lg:text-xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
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

