"use client";

import React from "react";
import {
  Code2,
  Globe,
  Megaphone,
  Boxes,
  ShoppingCart,
  Smartphone,
  ShieldCheck,
  Palette,
} from "lucide-react";

interface ServicesGridProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailor-made software solutions built to meet your unique business requirements and scale with growth.",
      icon: Code2,
    },
    {
      title: "Web Development",
      description:
        "High-performance, responsive websites designed for seamless user experience and business impact.",
      icon: Globe,
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing strategies designed to boost online visibility, attract the right audience, and generate quality leads",
      icon: Megaphone,
    },
    {
      title: "Product Development",
      description:
        "End-to-end product engineering from concept to launch with scalable architecture.",
      icon: Boxes,
    },
    {
      title: "E-Commerce",
      description:
        "Secure and conversion-focused online stores designed to maximize sales and customer engagement.",
      icon: ShoppingCart,
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications built for performance and intuitive user experience.",
      icon: Smartphone,
    },
    {
      title: "Testing & QA",
      description:
        "Comprehensive quality assurance to ensure reliability, security, and flawless performance",
      icon: ShieldCheck,
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive, research-driven user interface and experience design crafted for effortless engagement and conversion.",
      icon: Palette,
    },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] pb-20 md:pb-28">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => onSelectService?.(service.title)}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 hover:bg-white border border-gray-200/60 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group"
              >
                {/* Blue Circular Icon Container */}
                <div className="w-14 h-14 rounded-full bg-indigo-50/90 text-blue-600 flex items-center justify-center mb-5 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
