"use client";

import React from "react";
import { UserCheck, Award, TrendingUp } from "lucide-react";

export default function InternshipHero() {
  const stats = [
    { number: "5+", label: "Internship Domains" },
    { number: "50+", label: "Institute Tie-Up" },
    { number: "50+", label: "Monthly Interns Hired" },
    { number: "1000+", label: "Internship Completed Candidates" },
  ];

  const valueCards = [
    {
      icon: UserCheck,
      title: "Hands-on Experience",
      description:
        "Work on live projects and gain practical experience in web development, UI/UX, AI, SaaS, and digital technologies while building real-world problem-solving skills.",
    },
    {
      icon: Award,
      title: "Expert Mentorship",
      description:
        "Learn from experienced professionals through one-on-one guidance, code reviews, and continuous feedback to strengthen your technical and professional skills.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Develop in-demand skills, earn an internship certificate, build an impressive portfolio, and prepare yourself for exciting career opportunities in the IT industry.",
    },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-[#f5f8ff] via-[#f8faff] to-[#f4f7fc]">
      {/* Background Decorative Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Top Centered Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform whitespace-nowrap">
            <span>Internship Program for Students &amp; Freshers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] [text-wrap:balance]">
            Launch Your <span className="text-blue-600">Career with Duhzine</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm sm:text-base lg:text-[17px] text-gray-700 font-normal leading-relaxed max-w-3xl [text-wrap:balance] italic">
            Gain practical industry exposure by working on real-world technology projects at
            Duhzine IT Solutions. Our internship programs are designed for college students,
            recent graduates, and freshers who want to develop practical skills, gain
            professional experience, and understand how technology projects are delivered in a
            real business environment.
          </p>
        </div>

        {/* Stats Row - Same Numbers & Text Style as Portfolio and other pages */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 max-w-5xl mx-auto mt-14 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                index !== stats.length - 1 ? "md:border-r md:border-slate-300/80" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 tracking-tight font-sans">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-gray-800 mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Value Benefit Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="stagger-item interactive-card group bg-white rounded-3xl p-7 lg:p-9 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#edf5ff] group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white mb-6 shadow-xs group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 stroke-[1.8] transition-colors duration-300" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed italic">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
