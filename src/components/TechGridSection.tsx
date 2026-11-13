"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section className="w-full py-12 sm:py-16 bg-[#f4f7ff] relative overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-[100px] relative">
        {/* 3D Decorative Torus Artwork on left border */}
        <div className="hidden lg:block absolute -left-12 xl:-left-16 top-1/2 -translate-y-1/2 w-[220px] h-[380px] pointer-events-none select-none z-20 opacity-95">
          <Image
            src="/images/hero_left_crisp.png"
            alt="3D Decorative artwork"
            width={280}
            height={734}
            className="w-full h-full object-contain object-left"
            quality={100}
          />
        </div>

        {/* 3x3 Dark Card Container */}
        <div className="relative rounded-3xl bg-[#05070f] p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden shadow-2xl border border-neutral-800 z-10">
          {/* Ambient blue lighting on right edge */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

          {/* 3x3 White Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 relative z-10 max-w-[860px] mx-auto">
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
                  className={`flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl bg-white text-black transition-all cursor-pointer shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] ${
                    isSelected ? "ring-4 ring-blue-600 shadow-blue-500/20" : ""
                  }`}
                >
                  {/* Blue Circular Icon Container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-4 shadow-sm">
                    <IconComp className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  {/* Industry Label */}
                  <span className="text-[17px] sm:text-[19px] font-semibold text-black tracking-tight leading-snug">
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
