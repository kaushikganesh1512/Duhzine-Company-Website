"use client";

import React from "react";

interface HeroProps {
  onStartProject: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full bg-[#f4f7ff] pt-12 pb-14 md:pt-16 md:pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Left Decoration: High-Performance Architecture & Software Engineering (Neat, Crystal-Clear Vector Glassmorphism, Flush to Left Edge) */}
      <div className="hidden lg:block absolute left-0 top-8 xl:top-12 pointer-events-auto select-none z-10">
        <div className="animate-float-vertical">
          <div className="relative group cursor-default">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/15 via-blue-500/10 to-indigo-500/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glassmorphic Panel Pinned Flush to Left Screen Border */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_15px_40px_rgba(37,99,235,0.12)] rounded-r-3xl rounded-l-none border-l-0 p-5 w-[210px] xl:w-[240px] 2xl:w-[260px] text-left">
              {/* Header Status */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-slate-700 uppercase font-['Figtree',sans-serif]">
                    Live Architecture
                  </span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/50">
                  99.9%
                </span>
              </div>

              {/* Vector 3D Chrome Torus Motif */}
              <div className="relative my-2 flex items-center justify-center py-1">
                <svg
                  className="w-24 h-24 drop-shadow-sm"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="chromeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="25%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="75%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                    <linearGradient id="chromeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.9" />
                    </linearGradient>
                    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {/* Orbiting thin ring */}
                  <ellipse
                    cx="50"
                    cy="50"
                    rx="42"
                    ry="22"
                    transform="rotate(-28 50 50)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    opacity="0.6"
                  />
                  {/* Outer Torus Body */}
                  <path
                    d="M20 50 C20 32, 35 22, 55 24 C72 26, 82 38, 80 54 C78 70, 62 78, 44 76 C26 74, 20 64, 20 50 Z"
                    fill="url(#chromeGrad1)"
                    filter="url(#softGlow)"
                  />
                  {/* Inner Torus Hole */}
                  <path
                    d="M36 50 C36 42, 44 38, 54 39 C62 40, 66 45, 65 52 C64 59, 57 62, 48 61 C40 60, 36 56, 36 50 Z"
                    fill="#f4f7ff"
                  />
                  {/* Chrome Specular Shine Highlight */}
                  <path
                    d="M26 44 C28 36, 38 29, 52 30 C50 34, 42 38, 32 44 Z"
                    fill="url(#chromeGrad2)"
                  />
                </svg>
              </div>

              {/* Core Feature Lines */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Custom Web &amp; Apps</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Scalable Cloud Native</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-slate-100/80">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  Next.js
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">
                  React
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700">
                  SaaS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Decoration: High-Converting Web & Growth Dashboard (Neat, Crystal-Clear Vector Glassmorphism, Flush to Right Edge) */}
      <div className="hidden lg:block absolute right-0 top-8 xl:top-12 pointer-events-auto select-none z-10">
        <div className="animate-float-vertical-reverse">
          <div className="relative group cursor-default">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-l from-blue-600/15 via-sky-500/10 to-indigo-500/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glassmorphic Panel Pinned Flush to Right Screen Border */}
            <div className="relative bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_15px_40px_rgba(37,99,235,0.12)] rounded-l-3xl rounded-r-none border-r-0 p-5 w-[220px] xl:w-[250px] 2xl:w-[270px] text-left">
              {/* macOS Window Controls */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">duhzine-growth.app</span>
              </div>

              {/* Conversion Stat */}
              <div className="flex items-baseline justify-between mb-1.5">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-['Figtree',sans-serif]">
                    Conversion Rate
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-blue-600 mt-0.5">
                    +185%
                  </div>
                </div>
                <span className="inline-flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  ↑ 3.8x
                </span>
              </div>

              {/* Smooth Vector Area Sparkline Chart */}
              <div className="relative h-12 w-full my-2.5">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 180 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroGrowthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 45 Q 25 40, 50 28 T 100 20 T 140 10 T 180 4 L 180 50 L 0 50 Z"
                    fill="url(#heroGrowthGradient)"
                  />
                  <path
                    d="M0 45 Q 25 40, 50 28 T 100 20 T 140 10 T 180 4"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="180" cy="4" r="3.5" fill="#2563eb" />
                </svg>
              </div>

              {/* Live Metric Badge */}
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-700 bg-slate-50/80 px-2.5 py-1.5 rounded-xl border border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Lead Generation
                </span>
                <span className="font-semibold text-blue-600">Active</span>
              </div>

              {/* Rating / Guarantee */}
              <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-slate-100/80 text-[10px] text-slate-500 font-medium">
                <span className="text-amber-400">★★★★★</span>
                <span>Top Rated Agency Chennai</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Central Content (Scaled up, beautifully centered with generous responsive padding) */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-20">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-8 hover:scale-[1.02] transition-transform">
          <span>Best Software Development Company in Chennai</span>
        </div>

        {/* Main Headline (Larger, bold, professional) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold text-black tracking-[-2px] leading-[1.12] mb-7">
          Build a Website That Attracts,<br />
          <span className="text-[#2563eb]">Engages &amp; Converts.</span>
        </h1>

        {/* Subtitle description - EXACT words on each line */}
        <p className="text-gray-700 text-base sm:text-lg md:text-[18px] lg:text-[19px] leading-[28px] sm:leading-[32px] max-w-[940px] mx-auto mb-10 font-normal">
          Duhzine IT Solutions Pvt. Ltd. is a software and digital technology company helping<br className="hidden md:inline" />{" "}
          businesses build, launch, and grow through custom software, high-performance websites,<br className="hidden md:inline" />{" "}
          mobile apps, SaaS solutions, cloud technologies, and digital marketing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-md shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Start your project</span>
            <span className="text-base font-normal">↗</span>
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50/70 bg-white font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
