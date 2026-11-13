"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "team">("all");

  const services = [
    {
      id: "web-dev",
      badge: "Web development",
      title: "High-Performance Websites",
      description:
        "Build a professional digital presence with fast, responsive, user-friendly websites designed for performance, search visibility, and business growth. From corporate websites and business websites to customized web platforms, we create digital experiences that work seamlessly across devices.",
      linkText: "Explore Web Development",
      image: "/images/service_mockup_web_hq.png",
      align: "image-left",
    },
    {
      id: "ecommerce-mobile",
      badge: "E-Commerce Website Development",
      title: "Smart Mobile Experiences",
      description:
        "Develop high-performance mobile solutions that combine modern UX, speed, and rock-solid stability to keep users engaged and coming back. Whether iOS, Android, or customized responsive store, we craft digital experiences that work seamlessly across devices.",
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
    <section id="services" className="w-full py-16 md:py-24 relative bg-[#f4f7ff] overflow-hidden">
      {/* 3D Faceted Sphere floating on the left edge (exactly like Figma reference) */}
      <div className="absolute -left-3 top-16 sm:top-24 w-16 sm:w-20 md:w-24 lg:w-28 select-none pointer-events-none z-10">
        <Image
          src="/images/service_sphere_faceted_clean.png"
          alt="3D Geometric Artwork"
          width={112}
          height={280}
          className="w-full h-auto object-contain drop-shadow-md opacity-90"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header Matching Third Figma Reference Exactly */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Exact 'Service' pill badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-600 text-white text-xs sm:text-[13px] font-semibold tracking-wide mb-3 shadow-sm">
            Service
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0b0f19] tracking-tight mb-4 leading-tight">
            Our Core Digital Services
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We design, develop, and scale digital solutions that help businesses improve
            their online presence, streamline operations, engage customers, and achieve
            measurable growth.
          </p>

          {/* Action Pills: 'View all services ↗' and 'Talk to Our Team' */}
          <div className="flex items-center justify-center gap-3.5 mt-7">
            <button
              onClick={() => {
                setActiveTab("all");
                onServiceSelect("All Services");
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-blue-500/25 hover:bg-blue-700"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400"
              }`}
            >
              <span>View all services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setActiveTab("team");
                onServiceSelect("Talk to Team");
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm ${
                activeTab === "team"
                  ? "bg-white text-blue-600 border border-blue-500 hover:bg-blue-50/50"
                  : "bg-white text-blue-600 border border-blue-400 hover:bg-blue-50/50"
              }`}
            >
              <span>Talk to Our Team</span>
            </button>
          </div>
        </div>

        {/* 4 Alternating Service Cards */}
        <div className="space-y-12 md:space-y-16">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`flex flex-col ${
                svc.align === "image-left" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-14 bg-white/80 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-blue-100/70 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300`}
            >
              {/* Graphic Mockup Container */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-lg h-60 sm:h-72 md:h-80 rounded-2xl bg-gradient-to-tr from-blue-50/90 via-white to-sky-50/60 p-4 sm:p-6 border border-blue-100/80 shadow-md flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-radial from-blue-400/10 to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={500}
                    height={300}
                    className="object-contain max-h-full w-auto drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Description Container */}
              <div className="w-full lg:w-1/2 text-left">
                {/* Blue Badge Pill */}
                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-600 text-white text-[11px] font-semibold tracking-wide mb-3 shadow-xs">
                  {svc.badge}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0b0f19] tracking-tight mb-4 leading-tight">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {svc.description}
                </p>

                {/* Action Link */}
                <button
                  onClick={() => onServiceSelect(svc.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group transition-colors cursor-pointer"
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
