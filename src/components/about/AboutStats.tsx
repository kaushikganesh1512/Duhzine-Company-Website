"use client";

import React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutStats() {
  const row1 = [
    { number: "4+", label: "Year of Foundation" },
    { number: "100+", label: "Global Customers" },
    { number: "40+", label: "IT Professionals" },
    { number: "2+", label: "Countries Clients Served" },
  ];

  const row2 = [
    { number: "150+", label: "Completed Projects" },
    { number: "5+", label: "Global Presence" },
    { number: "90%", label: "Customer Retention" },
    { number: "15+", label: "Industries Served" },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] pb-12 md:pb-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 sm:gap-14">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {row1.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center px-4 ${
                  index !== row1.length - 1 ? "md:border-r md:border-slate-300/80" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 tracking-tight font-sans">
                  <AnimatedCounter value={item.number} duration={1800} />
                </div>
                <div className="text-xs sm:text-sm md:text-base font-medium text-gray-800 mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {row2.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center px-4 ${
                  index !== row2.length - 1 ? "md:border-r md:border-slate-300/80" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 tracking-tight font-sans">
                  <AnimatedCounter value={item.number} duration={1800} />
                </div>
                <div className="text-xs sm:text-sm md:text-base font-medium text-gray-800 mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

