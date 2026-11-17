"use client";

import React from "react";
import { Laptop, TrendingUp, Award } from "lucide-react";

export default function CareersCulture() {
  const cards = [
    {
      icon: Laptop,
      title: "Full-Time Opportunities",
      description:
        "Explore exciting full-time roles across design, development, marketing, business, and operations.",
    },
    {
      icon: TrendingUp,
      title: "Growth & Learning",
      description:
        "Get hands-on experience, expert mentorship, and exposure to the latest industry tools and practices.",
    },
    {
      icon: Award,
      title: "Long-Term Career",
      description:
        "Work on meaningful projects, take ownership, and grow into higher roles as we grow together.",
    },
  ];

  return (
    <section className="relative w-full bg-[#f8faff] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-5 hover:scale-[1.02] transition-transform">
            <span>Work • Learn • Grow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Build a Meaningful Career at Duhzine
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed italic [text-wrap:balance]">
            More than just a job — it’s a place to gain real experience, learn from experts, and grow your career in the digital industry.
          </p>
        </div>

        {/* 3 Interactive Culture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="stagger-item interactive-card group bg-white rounded-3xl p-8 sm:p-9 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-[#edf5ff] group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white mb-6 shadow-xs group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 stroke-[1.8] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed italic">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
