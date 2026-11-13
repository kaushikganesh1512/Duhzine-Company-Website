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
    <article className="flex flex-col items-start gap-3 px-0 pt-4 pb-6 flex-1 grow bg-white relative self-stretch">
      {/* Connector line and step circle row (Fixed 28px height, perfectly centered across all 4 steps) */}
      <div className="flex items-center self-stretch w-full relative h-7">
        <div className="flex-1 h-0.5 flex items-center">
          {connectorBefore && <div className="w-full h-0.5 bg-blue-600" />}
        </div>

        <div className="inline-flex flex-col items-center justify-center relative shrink-0">
          <div
            className="relative w-7 h-7 bg-white rounded-full border-2 border-solid border-blue-600 shadow-[0px_0px_0px_4px_rgba(225,225,254,0.7)] flex items-center justify-center z-10"
            aria-label={`Step ${number}: ${title}`}
          >
            <span className="text-blue-600 text-[12px] font-medium text-center tracking-tight leading-none">
              {number}
            </span>
          </div>
        </div>

        <div className="flex-1 h-0.5 flex items-center">
          {connectorAfter && <div className="w-full h-0.5 bg-blue-600" />}
        </div>
      </div>

      {/* Step Title & Description */}
      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-1">
        <div className="flex flex-col items-start gap-1 px-4 sm:px-6 py-0 relative self-stretch w-full">
          <h3 className="relative self-stretch mt-[-1.00px] font-semibold text-black text-xs text-center tracking-[0] leading-[14px]">
            {title}
          </h3>
          <p className="relative self-stretch font-normal text-gray-500 text-xs text-center tracking-[0] leading-[14px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default function ProcessSection(): React.ReactNode {
  return (
    <section
      className="flex flex-col w-full max-w-[1058px] mx-auto items-center gap-9 relative bg-[#f4f7ff] pt-14 pb-8 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="flex flex-col items-center gap-9 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[362px] max-w-full items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
            <p className="relative flex items-center justify-center w-fit mt-[-0.20px] font-medium text-[#edf6fc] text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
              Our Simple, Smart &amp; Scalable Process
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8 lg:px-[120px] py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-full max-w-[904px] items-start justify-center relative flex-[0_0_auto]">
                <h2
                  id="process-heading"
                  className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-semibold text-black text-[32px] sm:text-[40px] text-center tracking-[-2.00px] leading-[39px] sm:leading-[48px]"
                >
                  From Idea to Launch - A Clear Development Process
                </h2>
              </div>
              <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-medium text-black text-base sm:text-lg text-center tracking-[-0.36px] leading-[27px] max-w-3xl">
                  We follow a structured approach that keeps your project
                  focused, transparent, and aligned with your business
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Process Steps Bar with items-stretch ensuring perfectly aligned horizontal line */}
        <div className="w-full max-w-[1076px] p-4 flex-[0_0_auto] flex flex-col items-center justify-center relative">
          <div
            className="flex flex-col sm:flex-row items-stretch justify-center relative self-stretch w-full bg-white rounded-xl shadow-xs overflow-hidden"
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

      {/* Digital Solutions Across Industries header */}
      <div className="flex w-[292px] max-w-full items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm mt-4">
        <div className="relative flex items-center justify-center w-fit mt-[-0.20px] font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
          Digital Solutions Across Industries
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8 lg:px-[120px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative flex items-center justify-center w-full max-w-[881px] mt-[-1.00px] font-semibold text-black text-[32px] sm:text-[40px] text-center tracking-[-2.00px] leading-[39px] sm:leading-[48px]">
              Technology That Adapts to Different Business Needs
            </h2>
          </div>
          <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-medium text-black text-base sm:text-lg text-center tracking-[-0.36px] leading-[27px] max-w-3xl">
              We provide digital solutions for businesses across multiple
              industries, helping organizations streamline operations, improve
              customer experiences, and strengthen their digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
