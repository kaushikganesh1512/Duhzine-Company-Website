"use client";

import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: 1,
      title: "Discovery",
      desc: "In-depth research to understand your requirements, business goals, and target audience.",
      icon: Search,
    },
    {
      num: 2,
      title: "Design",
      desc: "Creating intuitive UI/UX wireframes and interactive prototypes that bring concepts to life.",
      icon: PenTool,
    },
    {
      num: 3,
      title: "Develop",
      desc: "Clean, secure, and scalable coding with rigorous testing across devices and environments.",
      icon: Code2,
    },
    {
      num: 4,
      title: "Launch & Beyond",
      desc: "Smooth deployment, post-launch optimization, ongoing support, and proactive maintenance.",
      icon: Rocket,
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-100/90">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Our Agile Step-By-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b0f19] tracking-tight mb-4">
            From Idea to Launch – A Clear Development Process
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We follow a structured, agile approach to turn your vision into high-impact digital solutions on time and within budget.
          </p>
        </div>

        {/* Timeline Process Card */}
        <div className="bg-[#f8faff] rounded-3xl p-8 sm:p-12 md:p-14 border border-slate-200/80 shadow-sm relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[80px] left-[12%] right-[12%] h-0.5 bg-blue-300 -z-0" />

          {/* 4 Process Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  {/* Circular Node with Icon & Ring */}
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 mb-5 shadow-md shadow-blue-500/10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 cursor-pointer">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0b0f19] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs font-normal">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
