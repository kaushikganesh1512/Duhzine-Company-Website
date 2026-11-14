"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Building,
  Heart,
  GraduationCap,
  Landmark,
  Calendar,
  Car,
  Wheat,
  ShoppingBag,
} from "lucide-react";

interface TechGridSectionProps {
  onIndustryClick?: (industry: string) => void;
}

export default function TechGridSection({ onIndustryClick }: TechGridSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
    { id: "realestate", name: "Real estate", icon: Building },
    { id: "healthcare", name: "Health care", icon: Heart },
    { id: "edtech", name: "Ed tech", icon: GraduationCap },
    { id: "fintech", name: "Fintech", icon: Landmark },
    { id: "event", name: "Event Industry", icon: Calendar },
    { id: "automobile", name: "Automobile", icon: Car },
    { id: "agritech", name: "Agri-Tech", icon: Wheat },
    { id: "retail", name: "Retail", icon: ShoppingBag },
  ];

  return (
    <section
      className="w-full py-12 md:py-16 bg-[#f4f7ff] relative overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col items-center gap-4 relative self-stretch w-full text-center">
          <div className="pill-badge flex w-fit items-center justify-center gap-2.5 px-6 py-2 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
            <span className="font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
              Digital Solutions Across Industries
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
            <h2
              id="industries-heading"
              className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-2.00px] leading-tight max-w-[960px]"
            >
              Technology That Adapts to Different Business Needs
            </h2>
            <p className="font-medium text-black text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl">
              We provide digital solutions for businesses across multiple
              industries, helping organizations streamline operations, improve
              customer experiences, and strengthen their digital presence.
            </p>
          </div>
        </div>

        {/* 3x3 Dark Card Container (No side images, clean and spacious) */}
        <div className="reveal-scale relative rounded-3xl bg-[#05070f] p-8 sm:p-14 lg:p-16 text-center text-white overflow-hidden shadow-2xl border border-neutral-800 z-10 w-full">
          {/* Ambient blue lighting on right edge */}
          <div className="absolute -bottom-28 -right-28 w-[450px] h-[450px] bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

          {/* 3x3 White Cards Grid */}
          <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10 max-w-[960px] mx-auto">
            {industries.map((item) => {
              const IconComp = item.icon;
              const isSelected = selectedIndustry === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedIndustry(item.id);
                    onIndustryClick?.(item.name);
                  }}
                  className={`stagger-item interactive-card group flex flex-col items-center justify-center p-9 sm:p-12 rounded-3xl bg-white text-black transition-all cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] ${
                    isSelected ? "ring-4 ring-blue-600 shadow-blue-500/20" : ""
                  }`}
                >
                  {/* Blue Circular Icon Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 group-hover:bg-blue-700 group-hover:scale-110 flex items-center justify-center text-white mb-5 shadow-sm transition-all duration-300">
                    <IconComp className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>

                  {/* Industry Label */}
                  <span className="text-lg sm:text-xl font-semibold text-black tracking-tight leading-snug">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
