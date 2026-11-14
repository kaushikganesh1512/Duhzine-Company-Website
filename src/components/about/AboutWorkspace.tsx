"use client";

import React from "react";
import Image from "next/image";

export default function AboutWorkspace() {
  const workspaceImages = [
    { src: "/images/about/workspace_1.jpg", alt: "Duhzine Modern Workstation & Team Collaboration" },
    { src: "/images/about/workspace_2.jpg", alt: "Creative Brainstorming & Conference Zone" },
    { src: "/images/about/workspace_3.jpg", alt: "Executive Meeting Space & Development Pod" },
    { src: "/images/about/workspace_4.jpg", alt: "High-Tech Development Floor & Open Layout" },
    { src: "/images/about/workspace_5.jpg", alt: "Relaxed Lounge & Innovation Hub" },
  ];

  // Repeat for continuous infinite marquee
  const marqueeList = [...workspaceImages, ...workspaceImages, ...workspaceImages];

  return (
    <section className="w-full bg-[#f4f7ff] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center mb-12">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
          <span>Designed for Creativity, Collaboration &amp; Growth</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
          A Space Where Innovation Happens
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed">
          At Duhzine IT Solutions, our workspace is more than just an office — it&apos;s a place where ideas come to life, creativity thrives, and innovation drives us forward.
        </p>
      </div>

      {/* Infinite Seamless Marquee Gallery */}
      <div className="w-full relative overflow-hidden py-4">
        {/* Subtle Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#f4f7ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#f4f7ff] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 sm:gap-8 px-4">
          {marqueeList.map((item, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] md:w-[360px] h-[180px] sm:h-[210px] md:h-[230px] rounded-[22px] overflow-hidden border border-black/15 shadow-md flex-shrink-0 bg-white group hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={360}
                height={230}
                unoptimized
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

