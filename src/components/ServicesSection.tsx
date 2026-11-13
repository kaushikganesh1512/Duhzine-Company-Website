"use client";

import React, { useState } from "react";
import Image from "next/image";
import WireframeGlobe from "./WireframeGlobe";
import { ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<"dev" | "design">("dev");

  const services = [
    {
      id: "web-dev",
      badge: "Web Development",
      title: "High-Performance Websites",
      description:
        "Delivering fast, modern, and SEO-optimized web experiences designed to engage visitors, boost credibility, and accelerate your business growth across all digital channels.",
      linkText: "Explore Website Services",
      image: "/images/service_web.png",
      align: "image-left",
    },
    {
      id: "mobile-dev",
      badge: "Mobile App Development",
      title: "Smart Mobile Experiences",
      description:
        "Building intuitive, high-performance iOS and Android applications that empower users, streamline workflows, and unlock new customer engagement channels for your brand.",
      linkText: "Explore Mobile Apps",
      image: "/images/service_mobile.png",
      align: "image-right",
    },
    {
      id: "growth-marketing",
      badge: "SEO & Digital Marketing",
      title: "Data-Driven Growth Strategies",
      description:
        "Accelerate your visibility, drive high-intent traffic, and turn visitors into loyal customers with our targeted search optimization, paid media campaigns, and conversion rate engineering.",
      linkText: "Explore Growth Services",
      image: "/images/service_marketing.png",
      align: "image-left",
    },
    {
      id: "custom-software",
      badge: "Custom Software",
      title: "CRM & Business Management Software",
      description:
        "Empower your operations with custom CRM systems, ERP suites, and automated internal workflows tailored specifically to eliminate bottlenecks and optimize operational efficiency.",
      linkText: "Explore Custom Software",
      image: "/images/service_crm.png",
      align: "image-right",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative bg-[#f8faff] overflow-hidden">
      {/* Decorative Wireframe Globes */}
      <div className="absolute -left-16 top-48 hidden lg:block opacity-60">
        <WireframeGlobe size={180} />
      </div>
      <div className="absolute -right-16 top-3/4 hidden lg:block opacity-60">
        <WireframeGlobe size={190} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#2563eb] text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b0f19] tracking-tight mb-4">
            Our Core Digital Services
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We craft tailored digital solutions high-impact custom software,
            e-commerce, and web applications for businesses that want to scale
            seamlessly and lead their industries.
          </p>

          {/* Toggle Tabs */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("dev")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                activeTab === "dev"
                  ? "bg-[#2563eb] text-white shadow-md shadow-blue-500/25"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400"
              }`}
            >
              <span>Development Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab("design")}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                activeTab === "design"
                  ? "bg-[#2563eb] text-white shadow-md shadow-blue-500/25"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400"
              }`}
            >
              <span>Design and Marketing</span>
            </button>
          </div>
        </div>

        {/* 4 Alternating Service Cards */}
        <div className="space-y-16 md:space-y-24">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`flex flex-col ${
                svc.align === "image-left" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-14 bg-white/40 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300`}
            >
              {/* Graphic Mockup Container */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-md h-64 md:h-72 rounded-2xl bg-gradient-to-tr from-blue-50/80 via-white to-sky-50/60 p-4 border border-blue-100/60 shadow-lg shadow-blue-900/5 flex items-center justify-center overflow-hidden group">
                  {/* Subtle radial aura */}
                  <div className="absolute inset-0 bg-radial from-blue-400/10 to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                  
                  <Image
                    src={svc.image}
                    alt={svc.title}
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
                  {svc.badge}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0b0f19] tracking-tight mb-4">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Action Link */}
                <button
                  onClick={() => onServiceSelect(svc.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] group transition-colors"
                >
                  <span>{svc.linkText}</span>
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

