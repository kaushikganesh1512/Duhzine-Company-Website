"use client";

import React from "react";
import {
  ShoppingCart,
  Building2,
  HeartPulse,
  GraduationCap,
  Landmark,
  Calendar,
  Car,
  Sprout,
  Store,
} from "lucide-react";

interface ServicesTechGridProps {
  onIndustryClick?: (industry: string) => void;
}

export default function ServicesTechGrid({
  onIndustryClick,
}: ServicesTechGridProps) {
  const industries = [
    { title: "E-commerce", icon: ShoppingCart },
    { title: "Real estate", icon: Building2 },
    { title: "Health care", icon: HeartPulse },
    { title: "Ed tech", icon: GraduationCap },
    { title: "Fintech", icon: Landmark },
    { title: "Event Industry", icon: Calendar },
    { title: "Automobile", icon: Car },
    { title: "Agri-Tech", icon: Sprout },
    { title: "Retail", icon: Store },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
            <span>Digital Solutions Across Industries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 max-w-4xl mx-auto [text-wrap:balance]">
            Technology That Adapts to Different Business Needs
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            We provide digital solutions for businesses across multiple industries, helping organizations streamline operations, improve customer experiences, and strengthen their digital presence.
          </p>
        </div>

        {/* Dark Card Container */}
        <div className="w-full bg-neutral-950 rounded-[32px] sm:rounded-[40px] px-6 sm:px-12 py-16 sm:py-20 relative overflow-hidden shadow-2xl border border-neutral-900">
          {/* Ambient Blue Radial Glow at Bottom Right */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

          {/* 9 White Industry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto relative z-10">
            {industries.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={() => onIndustryClick?.(item.title)}
                  className="bg-white rounded-[32px] p-8 shadow-md flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer group"
                >
                  {/* Blue Circular Icon Container */}
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

