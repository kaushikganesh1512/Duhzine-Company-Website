"use client";

import React from "react";
import { ArrowUpRight, PhoneCall } from "lucide-react";

interface CtaSectionProps {
  onStartProject: () => void;
  onBookCall: () => void;
}

export default function CtaSection({ onStartProject, onBookCall }: CtaSectionProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#f8faff] to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#05070f] p-8 sm:p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl border border-slate-800">
          {/* Glowing blue radial lighting */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Let&apos;s Build Together
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
              Ready to Build a Website That Attracts, Engages &amp; Converts?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-9">
              Partner with Duhzine IT Solutions to engineer your custom web platform,
              scalable mobile apps, and high-impact digital growth engines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/40 hover:scale-[1.03]"
              >
                <span>Start your project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBookCall}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all hover:scale-[1.02]"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Book a discovery call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

