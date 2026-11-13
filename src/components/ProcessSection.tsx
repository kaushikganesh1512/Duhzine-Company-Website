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
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#2563eb] text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
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
        <div className="bg-[#f8faff] rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-sm relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[74px] left-[10%] right-[10%] h-0.5 bg-blue-300 -z-0" />

          {/* 4 Process Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  {/* Circular Node with Icon & Ring */}
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#2563eb] flex items-center justify-center text-[#2563eb] mb-5 shadow-md shadow-blue-500/10 group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0b0f19] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
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

