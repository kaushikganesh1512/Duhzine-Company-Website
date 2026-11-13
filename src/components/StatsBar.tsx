"use client";

import React from "react";

export default function StatsBar() {
  const stats = [
    { value: "300+", label: "Completed Projects" },
    { value: "4+", label: "Global Offices" },
    { value: "60+", label: "Happy Clients" },
    { value: "2+", label: "Years of Experience" },
  ];

  // 16 stylized partner / client logos matching the grid in the screenshot
  const logosRow1 = [
    {
      id: "brand-1",
      name: "NEXA",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white font-extrabold text-[11px] tracking-wider shadow-sm">
          NEXA
        </div>
      ),
    },
    {
      id: "brand-2",
      name: "RingLink",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
          <div className="flex -space-x-1.5">
            <span className="w-4 h-4 rounded-full border-2 border-blue-500"></span>
            <span className="w-4 h-4 rounded-full border-2 border-cyan-400"></span>
            <span className="w-4 h-4 rounded-full border-2 border-indigo-600"></span>
          </div>
        </div>
      ),
    },
    {
      id: "brand-3",
      name: "Aura Luxe",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-xs shadow-sm">
          AL
        </div>
      ),
    },
    {
      id: "brand-4",
      name: "Flora Bloom",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-rose-500 to-red-400 flex items-center justify-center text-white text-[10px] font-bold">
            ✿
          </div>
        </div>
      ),
    },
    {
      id: "brand-5",
      name: "EduKids",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm">
          <span className="text-[10px] font-black text-amber-600 tracking-tighter">
            KiDS
          </span>
        </div>
      ),
    },
    {
      id: "brand-6",
      name: "BioGreen",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm">
          <div className="w-5 h-5 text-emerald-600 font-bold text-sm">🍃</div>
        </div>
      ),
    },
    {
      id: "brand-7",
      name: "CrownShield",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-[#0b132b] flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-[10px] font-black">
            🛡️
          </div>
        </div>
      ),
    },
    {
      id: "brand-8",
      name: "Golden Laurel",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-amber-50/50 border border-amber-300/60 flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-full border border-dashed border-amber-500 flex items-center justify-center text-amber-600 text-[10px] font-bold">
            ★
          </div>
        </div>
      ),
    },
  ];

  const logosRow2 = [
    {
      id: "brand-9",
      name: "Cobalt Core",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-blue-200 text-xs font-bold shadow-sm">
          CC
        </div>
      ),
    },
    {
      id: "brand-10",
      name: "Solaris",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-full bg-amber-400/80 flex items-center justify-center text-white text-xs">
            ☀️
          </div>
        </div>
      ),
    },
    {
      id: "brand-11",
      name: "Vibe Health",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
          <span className="text-[10px] font-extrabold text-blue-600">VIBE</span>
        </div>
      ),
    },
    {
      id: "brand-12",
      name: "Prism Tech",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 flex items-center justify-center text-white text-[10px]">
            ◆
          </div>
        </div>
      ),
    },
    {
      id: "brand-13",
      name: "Swift Logistics",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shadow-sm">
          <div className="text-blue-600 font-bold text-xs tracking-tighter">
            SL&gt;
          </div>
        </div>
      ),
    },
    {
      id: "brand-14",
      name: "Mandala Group",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-red-900/10 border border-red-200 flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] font-bold">
            ☸
          </div>
        </div>
      ),
    },
    {
      id: "brand-15",
      name: "Terra Earth",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">
            🌐
          </div>
        </div>
      ),
    },
    {
      id: "brand-16",
      name: "RedTree Global",
      render: () => (
        <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shadow-sm">
          <div className="text-rose-600 font-bold text-sm">🌳</div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white/60 border-y border-slate-100/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center mb-12">
          {stats.map((item, idx) => (
            <div key={idx} className="px-4 py-2">
              <div className="text-3xl md:text-4xl font-extrabold text-[#2563eb] tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Header */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Trusted by Leading Global Brands
          </span>
        </div>

        {/* Client Logos Grid */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {logosRow1.map((logo) => (
              <div
                key={logo.id}
                className="transition-transform duration-200 hover:scale-110 cursor-pointer"
                title={logo.name}
              >
                {logo.render()}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {logosRow2.map((logo) => (
              <div
                key={logo.id}
                className="transition-transform duration-200 hover:scale-110 cursor-pointer"
                title={logo.name}
              >
                {logo.render()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

