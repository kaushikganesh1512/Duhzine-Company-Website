"use client";

import React from "react";
import Image from "next/image";

export default function StatsBar() {
  return (
    <section className="w-full py-8 sm:py-12 bg-[#f4f7ff] relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Exact 800+ Stats & 18 Global Client Logos (from user image) */}
        <div className="w-full max-w-[1020px] transition-transform duration-300">
          <Image
            src="/images/stats_and_logos.png"
            alt="800+ Completed Projects, 4+ Years of Experience, 60+ Global Customers, 2+ Countries Clients Served - Over 50+ Business Trust Us"
            width={1021}
            height={286}
            className="w-full h-auto object-contain select-none mx-auto drop-shadow-xs"
            priority
          />
        </div>
      </div>
    </section>
  );
}
