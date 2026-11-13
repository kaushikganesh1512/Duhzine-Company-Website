"use client";

import React, { useState } from "react";
import {
  Building2,
  Home,
  HeartPulse,
  GraduationCap,
  CreditCard,
  Layers,
  UtensilsCrossed,
  Sprout,
  ShoppingBag,
} from "lucide-react";

interface TechGridSectionProps {
  onIndustryClick?: (industry: string) => void;
}

export default function TechGridSection({ onIndustryClick }: TechGridSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    {
      id: "enterprise",
      name: "Enterprise Apps",
      icon: Building2,
      desc: "Custom ERP, supply chain, and business automation platforms.",
    },
    {
      id: "realestate",
      name: "Real estate",
      icon: Home,
      desc: "Property listing portals, virtual tours, and CRM management.",
    },
    {
      id: "healthcare",
      name: "Health care",
      icon: HeartPulse,
      desc: "Telehealth apps, EHR solutions, and patient portal ecosystems.",
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      desc: "E-learning platforms, LMS integration, and student portals.",
    },
    {
      id: "fintech",
      name: "Fintech",
      icon: CreditCard,
      desc: "Secure banking apps, payment gateways, and trading analytics.",
    },
    {
      id: "crossindustry",
      name: "Cross-Industry",
      icon: Layers,
      desc: "Flexible modular microservices and multi-tenant architectures.",
    },
    {
      id: "foodtech",
      name: "Food Tech",
      icon: UtensilsCrossed,
      desc: "Kitchen display systems, online ordering, and delivery tracking.",
    },
    {
      id: "agritech",
      name: "Agri Tech",
      icon: Sprout,
      desc: "Precision farming platforms, crop telemetry, and farm marketplaces.",
    },
    {
      id: "retail",
      name: "Retail",
      icon: ShoppingBag,
      desc: "Omnichannel e-commerce stores, POS sync, and customer loyalty.",
    },
  ];

  return (
    <section className="w-full pt-2 pb-20 md:pb-28 bg-[#f4f7ff] relative overflow-hidden">
      {/* Subtle Iridescent Side Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-gradient-to-r from-blue-300/20 via-indigo-200/10 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Big Dark Card Container with Equal Margins */}
        <div className="max-w-4xl mx-auto bg-[#05070f] rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl border border-neutral-800">
          {/* Bottom Right Glowing Blue Accent */}
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

          {/* 3x3 Grid of 9 White Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 relative z-10">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedIndustry(item.name);
                    if (onIndustryClick) onIndustryClick(item.name);
                  }}
                  className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-md transition-all duration-300 cursor-pointer ${
                    selectedIndustry === item.name
                      ? "ring-4 ring-blue-500 scale-105"
                      : "hover:scale-[1.04] hover:shadow-xl"
                  }`}
                >
                  {/* Blue Circular Icon Container */}
                  <div className="w-13 h-13 rounded-full bg-blue-600 flex items-center justify-center text-white mb-4 shadow-md shadow-blue-600/30">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0b0f19] tracking-tight">
                    {item.name}
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
