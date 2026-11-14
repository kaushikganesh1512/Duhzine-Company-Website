"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServicesRecentWorksProps {
  onProjectClick?: (title: string) => void;
}

export default function ServicesRecentWorks({
  onProjectClick,
}: ServicesRecentWorksProps) {
  const projects = [
    {
      image: "/images/services/work_1.jpg",
      category: "Business Website Development",
      title: "Building Trust Through Digital Presence",
      description:
        "A responsive business website designed to showcase company offerings, strengthen brand credibility, and simplify customer enquiries",
    },
    {
      image: "/images/services/work_2.jpg",
      category: "E-Commerce Development",
      title: "Commerce That Converts",
      description:
        "Secure, scalable online stores built to maximize sales and customer satisfaction.",
    },
    {
      image: "/images/services/work_3.jpg",
      category: "Restaurant Website Development",
      title: "Bringing Authentic Flavours Online",
      description:
        "A responsive restaurant website designed to showcase authentic Arabian Mandi and biryani dishes, highlight the food menu, and simplify customer enquiries.",
    },
    {
      image: "/images/services/work_4.jpg",
      category: "Preschool Website Development",
      title: "Little Minds, Bright Futures",
      description:
        "A responsive preschool website designed to showcase early learning programs, build parent trust, and simplify school admission enquiries in Chennai",
    },
    {
      image: "/images/services/work_5.jpg",
      category: "School Website Development",
      title: "Inspiring Young Learners",
      description:
        "A modern, responsive school website designed to highlight nursery and primary education, showcase learning programs, and make admission enquiries easier for parents",
    },
    {
      image: "/images/services/work_6.jpg",
      category: "Preschool & Daycare Website Development",
      title: "Where Learning Meets Care",
      description:
        "A responsive preschool website designed to highlight play-based learning, showcase childcare programs, build parent trust, and simplify admission enquiries in Chennai.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="reveal-on-scroll text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
            <span>Recent Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 [text-wrap:balance]">
            Recent Works
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            A showcase of impactful digital solutions crafted to drive growth, enhance user experience, and deliver measurable results.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="stagger-item interactive-card bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              {/* Image Preview */}
              <div className="w-full h-56 sm:h-64 relative overflow-hidden bg-gray-50 border-b border-gray-100">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={680}
                  height={508}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-tight mb-3">
                    {proj.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-snug tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="mt-5 pt-3">
                  <button
                    type="button"
                    onClick={() => onProjectClick?.(proj.title)}
                    className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm underline cursor-pointer group-hover:translate-x-1 transition-transform"
                  >
                    <span>View our work</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

