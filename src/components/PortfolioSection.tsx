"use client";

import React, { useState } from "react";
import Image from "next/image";
import WireframeGlobe from "./WireframeGlobe";
import { ArrowUpRight } from "lucide-react";

interface PortfolioSectionProps {
  onProjectClick: (projectName: string) => void;
}

export default function PortfolioSection({ onProjectClick }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "case_studies">("all");

  const projects = [
    {
      id: "agri-tech",
      badge: "Agriculture Website",
      title: "Agri-Tech Industry Website Development",
      description1:
        "Empowering agriculture companies with tailored digital solutions, responsive website architecture, and optimized interfaces that connect farmers, suppliers, and buyers seamlessly.",
      description2:
        "Engineered for speed and accessibility across rural and urban markets, driving customer inquiries and establishing a robust online presence.",
      image: "/images/portfolio_agri.png",
      align: "image-left",
    },
    {
      id: "ed-tech",
      badge: "Educational Platform",
      title: "Ed-Tech Industry Website Development",
      description1:
        "Delivering intuitive, interactive e-learning solutions that engage learners and streamline educational management across web and mobile platforms.",
      description2:
        "Engineered with video streaming, course dashboards, and automated certifications for modern learning providers.",
      image: "/images/portfolio_edtech.png",
      align: "image-right",
    },
    {
      id: "food-industry",
      badge: "Ordering & Delivery Platform",
      title: "Food Industry Website Development",
      description1:
        "Developing seamless food ordering websites and digital menus designed to increase dine-in and delivery conversions for restaurant chains.",
      description2:
        "Integrated with live order tracking, table booking, and customer loyalty rewards to maximize operational efficiency.",
      image: "/images/portfolio_food.png",
      align: "image-left",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#f8faff] relative overflow-hidden">
      {/* Wireframe globe bottom-right like in screenshot */}
      <div className="absolute -right-12 bottom-12 hidden lg:block opacity-65 pointer-events-none">
        <WireframeGlobe size={220} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#2563eb] text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b0f19] tracking-tight mb-4">
            Real Projects. Digital Solutions.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Explore our latest work delivering measurable impact through intuitive
            design, custom engineering, and scalable web solutions.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                activeFilter === "all"
                  ? "bg-[#2563eb] text-white shadow-md shadow-blue-500/25"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400"
              }`}
            >
              <span>All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveFilter("case_studies")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                activeFilter === "case_studies"
                  ? "bg-[#2563eb] text-white shadow-md shadow-blue-500/25"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400"
              }`}
            >
              <span>Case Studies</span>
            </button>
          </div>
        </div>

        {/* 3 Alternating Project Showcase Cards */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`flex flex-col ${
                proj.align === "image-left" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-14 bg-white/40 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300`}
            >
              {/* Graphic Mockup Container */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-md h-64 md:h-72 rounded-2xl bg-gradient-to-tr from-slate-50 via-white to-blue-50/50 p-4 border border-slate-200/70 shadow-lg shadow-slate-900/5 flex items-center justify-center overflow-hidden group">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={420}
                    height={280}
                    className="object-contain max-h-full w-auto drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Description Container */}
              <div className="w-full lg:w-1/2 text-left">
                {/* Pill Badge */}
                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#2563eb] text-white text-[11px] font-semibold tracking-wide mb-3 shadow-sm">
                  {proj.badge}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0f19] tracking-tight mb-4">
                  {proj.title}
                </h3>

                {/* Description 1 */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                  {proj.description1}
                </p>

                {/* Description 2 */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {proj.description2}
                </p>

                {/* Action Link */}
                <button
                  onClick={() => onProjectClick(proj.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] group transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

