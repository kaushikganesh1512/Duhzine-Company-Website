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
    <article className="flex flex-col items-center gap-4 px-2 pt-6 pb-8 flex-1 grow bg-white relative self-stretch">
      {/* Connector line and step circle row (Fixed 28px height, perfectly centered across all 4 steps) */}
      <div className="flex items-center self-stretch w-full relative h-7">
        <div className="flex-1 h-0.5 flex items-center">
          {connectorBefore && <div className="w-full h-0.5 bg-blue-600" />}
        </div>

        <div className="inline-flex flex-col items-center justify-center relative shrink-0">
          <div
            className="relative w-8 h-8 bg-white rounded-full border-2 border-solid border-blue-600 shadow-[0px_0px_0px_4px_rgba(225,225,254,0.7)] flex items-center justify-center z-10"
            aria-label={`Step ${number}: ${title}`}
          >
            <span className="text-blue-600 text-[13px] font-semibold text-center tracking-tight leading-none">
              {number}
            </span>
          </div>
        </div>

        <div className="flex-1 h-0.5 flex items-center">
          {connectorAfter && <div className="w-full h-0.5 bg-blue-600" />}
        </div>
      </div>

      {/* Step Title & Description */}
      <div className="flex flex-col items-center gap-1.5 px-3 sm:px-4 text-center w-full">
        <h3 className="font-semibold text-black text-base sm:text-[17px] tracking-tight leading-snug">
          {title}
        </h3>
        <p className="font-normal text-gray-600 text-xs sm:text-[13px] leading-relaxed max-w-[210px] mx-auto">
          {description}
        </p>
      </div>
    </article>
  );
};

export default function ProcessSection(): React.ReactNode {
  return (
    <section
      className="flex flex-col w-full max-w-7xl mx-auto items-center gap-14 relative bg-[#f4f7ff] px-6 sm:px-10 lg:px-16 py-16 md:py-24 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="flex flex-col items-center gap-10 relative self-stretch w-full">
        <div className="flex flex-col items-center gap-4 relative self-stretch w-full">
          <div className="flex w-fit items-center justify-center gap-2.5 px-6 py-2 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
            <p className="font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
              Our Simple, Smart &amp; Scalable Process
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full text-center">
            <h2
              id="process-heading"
              className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-2.00px] leading-tight max-w-[960px]"
            >
              From Idea to Launch - A Clear Development Process
            </h2>
            <p className="font-medium text-black text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl">
              We follow a structured approach that keeps your project
              focused, transparent, and aligned with your business
              objectives.
            </p>
          </div>
        </div>

        {/* 4 Process Steps Bar with items-stretch ensuring perfectly aligned horizontal line */}
        <div className="w-full max-w-5xl flex flex-col items-center justify-center relative">
          <div
            className="flex flex-col sm:flex-row items-stretch justify-center relative self-stretch w-full bg-white rounded-2xl shadow-xs border border-gray-100/90 overflow-hidden"
            role="list"
            aria-label="Development process steps"
          >
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
