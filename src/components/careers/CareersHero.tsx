"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, GraduationCap, Users, TrendingUp } from "lucide-react";
import TypingHeroTitle from "@/components/TypingHeroTitle";

interface CareersHeroProps {
  onViewRolesClick?: () => void;
}

export default function CareersHero({ onViewRolesClick }: CareersHeroProps) {
  const highlights = [
    {
      icon: Layers,
      title: "Real Projects",
      subtitle: "Work on live client projects.",
    },
    {
      icon: GraduationCap,
      title: "Growth & Learning",
      subtitle: "Upskill with industry exposure.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      subtitle: "Work with a passionate team.",
    },
    {
      icon: TrendingUp,
      title: "Career Progression",
      subtitle: "Build a long-term career with us.",
    },
  ];

  const handleScrollToRoles = () => {
    if (onViewRolesClick) {
      onViewRolesClick();
      return;
    }
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f5f8ff] via-[#f8faff] to-[#f4f7fc]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-20">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform whitespace-nowrap">
          <span>WE&apos;RE HIRING</span>
        </div>

        {/* Main Headline with Layout-Preserving Typing Effect */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-6 max-w-5xl mx-auto [text-wrap:balance]">
          <TypingHeroTitle>
            Build Your <span className="text-blue-600">Future With Us</span>
          </TypingHeroTitle>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-gray-700 font-normal leading-relaxed max-w-3xl mx-auto mb-10 [text-wrap:balance] italic">
          Join a team of creative thinkers, passionate designers, and innovative professionals. Work on meaningful projects, grow your skills, and create digital experiences that make an impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          <button
            type="button"
            onClick={handleScrollToRoles}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-base whitespace-nowrap shadow-md shadow-blue-500/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>View Open Roles</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-white hover:bg-blue-50/50 text-blue-600 font-semibold text-xs sm:text-base whitespace-nowrap border border-blue-600 shadow-xs transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Duhzine
          </Link>
        </div>

        {/* 4 Feature Columns Bar (No top horizontal line per Image 4) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 max-w-6xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center px-3 py-2 ${
                  idx < 3 ? "lg:border-r lg:border-gray-200/80" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#edf5ff] flex items-center justify-center text-blue-600 mb-3 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed italic">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

