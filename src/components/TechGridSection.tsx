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
    <section className="py-20 md:py-28 bg-[#f8faff] relative overflow-hidden">
      {/* Iridescent Accent on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-96 bg-gradient-to-r from-blue-300/20 via-indigo-200/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#2563eb] text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b0f19] tracking-tight mb-4">
            Technology That Adapts to Different Business Needs
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Every business is unique. We build tailored software and scalable digital
            platforms engineered to adapt to your specific workflow, industry standards,
            and long-term goals.
          </p>
        </div>

        {/* Big Dark Card Container */}
        <div className="bg-[#05070f] rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Bottom Right Glowing Blue Orb */}
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
                  <div className="w-12 h-12 rounded-full bg-[#2563eb] flex items-center justify-center text-white mb-4 shadow-md shadow-blue-600/30">
                    <Icon className="w-5 h-5" />
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

