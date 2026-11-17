"use client";

import React from "react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business goals, challenges, and user needs to define a clear project roadmap.",
    connectorBefore: false,
    connectorAfter: true,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft intuitive user experiences and modern interfaces focused on usability and impact.",
    connectorBefore: true,
    connectorAfter: true,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team builds scalable, secure, and high-performance solutions using the latest technologies.",
    connectorBefore: true,
    connectorAfter: true,
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We deploy, monitor, and continuously improve to ensure long-term success and measurable growth.",
    connectorBefore: true,
    connectorAfter: false,
  },
];

const ProcessStep = ({
  number,
  title,
  description,
  connectorBefore,
  connectorAfter,
}: (typeof processSteps)[number]): React.ReactNode => {
  return (
    <article className="stagger-item group flex flex-col items-center gap-2.5 sm:gap-4 py-4 sm:pt-6 sm:pb-8 flex-1 grow bg-white hover:bg-blue-50/30 transition-colors duration-300 relative self-stretch cursor-pointer">
      {/* Connector line and step circle row (Fixed 28px height, seamless edge-to-edge connection on desktop, centered circle without connecting lines on mobile) */}
      <div className="flex items-center self-stretch w-full relative h-7">
        <div className="hidden sm:flex flex-1 h-0.5 items-center">
          {connectorBefore && <div className="w-full h-0.5 bg-blue-600" />}
        </div>

        <div className="inline-flex flex-col items-center justify-center relative shrink-0 mx-auto sm:mx-0">
          <div
            className="relative w-8 h-8 bg-white rounded-full border-2 border-solid border-blue-600 shadow-[0px_0px_0px_4px_rgba(225,225,254,0.7)] group-hover:scale-110 group-hover:shadow-[0px_0px_0px_6px_rgba(37,99,235,0.25)] flex items-center justify-center z-10 transition-all duration-300"
            aria-label={`Step ${number}: ${title}`}
          >
            <span className="text-blue-600 text-[13px] font-semibold text-center tracking-tight leading-none">
              {number}
            </span>
          </div>
        </div>

        <div className="hidden sm:flex flex-1 h-0.5 items-center">
          {connectorAfter && <div className="w-full h-0.5 bg-blue-600" />}
        </div>
      </div>

      {/* Step Title & Description */}
      <div className="flex flex-col items-center gap-1.5 px-3 sm:px-4 text-center w-full">
        <h3 className="font-semibold text-black text-base sm:text-[17px] tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="font-normal text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-[240px] sm:max-w-[210px] mx-auto">
          {description}
        </p>
      </div>
    </article>
  );
};

export default function ProcessSection(): React.ReactNode {
  return (
    <section
      className="flex flex-col w-full max-w-7xl mx-auto items-center gap-10 relative bg-[#f4f7ff] px-6 sm:px-10 lg:px-16 py-12 md:py-16 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="flex flex-col items-center gap-8 relative self-stretch w-full">
        <div className="reveal-on-scroll flex flex-col items-center gap-4 relative self-stretch w-full">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-2 hover:scale-[1.02] transition-transform">
            <span>Our Simple, Smart &amp; Scalable Process</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full text-center">
            <h2
              id="process-heading"
              className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-2.00px] leading-tight max-w-[960px] [text-wrap:balance]"
            >
              From Idea to Launch - A Clear Development Process
            </h2>
            <p className="text-gray-700 font-normal text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl [text-wrap:balance] italic">
              We follow a structured approach that keeps your project
              focused, transparent, and aligned with your business
              objectives.
            </p>
          </div>
        </div>

        {/* 4 Process Steps Bar with items-stretch ensuring perfectly aligned horizontal line */}
        <div className="w-full max-w-5xl flex flex-col items-center justify-center relative">
          <div
            className="stagger-container flex flex-col sm:flex-row items-stretch justify-center relative self-stretch w-full bg-white rounded-2xl shadow-xs border border-gray-100/90 overflow-hidden"
            role="list"
            aria-label="Development process steps"
          >
            {/* Continuous unbroken line behind all circles */}
            <div className="hidden sm:block absolute top-[38px] left-[12.5%] right-[12.5%] h-0.5 bg-blue-600 z-0 pointer-events-none" />

            {processSteps.map((step) => (
              <div className="contents" role="listitem" key={step.number}>
                <ProcessStep {...step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
