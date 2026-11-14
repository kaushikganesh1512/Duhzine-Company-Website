"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface InternshipInstitutesProps {
  onPartnerClick?: () => void;
}

export default function InternshipInstitutes({ onPartnerClick }: InternshipInstitutesProps) {
  const institutes = [
    { src: "/images/internship/institute-1.jpg", alt: "Institute Partner 1" },
    { src: "/images/internship/institute-2.jpg", alt: "Institute Partner 2" },
    { src: "/images/internship/institute-3.jpg", alt: "Institute Partner 3" },
    { src: "/images/internship/institute-4.jpg", alt: "Institute Partner 4" },
    { src: "/images/internship/institute-5.jpg", alt: "Institute Partner 5" },
    { src: "/images/internship/institute-6.jpg", alt: "Institute Partner 6" },
    { src: "/images/internship/institute-7.jpg", alt: "Institute Partner 7" },
    { src: "/images/internship/institute-8.jpg", alt: "Institute Partner 8" },
  ];

  // Repeat for continuous seamless infinite marquee
  const marqueeInstitutes = [...institutes, ...institutes, ...institutes];

  return (
    <section className="py-16 md:py-24 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-4 hover:scale-[1.02] transition-transform whitespace-nowrap">
            <span className="hidden sm:inline">Internship Opportunities Through Institute Collaborations</span>
            <span className="sm:hidden">Institute Collaborations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-snug [text-wrap:balance]">
            Supporting Students Through Industry Exposure
          </h2>

          <div className="mt-4 space-y-3 text-sm sm:text-base lg:text-[17px] text-neutral-600 font-normal leading-relaxed max-w-3xl [text-wrap:balance]">
            <p>
              Duhzine IT Solutions collaborates with 20+ educational institutes to provide
              students with opportunities to gain practical exposure to technology and digital
              industry environments.
            </p>
            <p>
              Through institute collaborations, we aim to help students bridge the gap between
              academic learning and practical experience by introducing them to real-world project
              workflows, professional practices, and technology-focused learning.
            </p>
          </div>

          {/* Action CTA */}
          <div className="mt-8">
            {onPartnerClick ? (
              <button
                type="button"
                onClick={onPartnerClick}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Partner With Duhzine</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Partner With Duhzine</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee of Institute Logos */}
      <div className="w-full relative overflow-hidden py-6">
        {/* Subtle Edge Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8faff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8faff] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-4 flex items-center">
          {marqueeInstitutes.map((inst, idx) => (
            <div
              key={idx}
              className="w-32 sm:w-36 h-20 sm:h-24 rounded-2xl bg-white p-2.5 border border-neutral-200/90 shadow-sm flex items-center justify-center shrink-0 hover:shadow-md transition-shadow"
            >
              <Image
                src={inst.src}
                alt={inst.alt}
                width={125}
                height={104}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

