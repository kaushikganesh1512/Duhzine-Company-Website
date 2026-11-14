"use client";

import React from "react";
import Image from "next/image";

export default function AboutTeam() {
  const team = [
    {
      name: "Bhuvaneswari U",
      role: "Director of Duhzine",
      image: "/images/about/team_member_1.png",
    },
    {
      name: "Saran Madhivannan",
      role: "Co-Founder",
      image: "/images/about/team_member_2.png",
    },
    {
      name: "Santhosh Kumar",
      role: "Digital Marketing Manger",
      image: "/images/about/team_member_1.png",
    },
    {
      name: "Prathika Murugan",
      role: "Sr HR Recruiter",
      image: "/images/about/team_member_2.png",
    },
    {
      name: "Ajith P",
      role: "Sr HR Recruiter",
      image: "/images/about/team_member_2.png",
    },
    {
      name: "Gopinath",
      role: "Digital Marketing & Admin",
      image: "/images/about/team_member_1.png",
    },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Dark Container Box matching Figma */}
        <div className="reveal-scale w-full bg-neutral-950 rounded-[32px] sm:rounded-[40px] px-6 sm:px-12 py-16 sm:py-20 relative overflow-hidden shadow-2xl border border-neutral-900">
          {/* Bottom Right Blue Ambient Glow */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-14 relative z-10">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
              <span>Leadership Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
              Meet Our Core Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-normal mt-4 leading-relaxed [text-wrap:balance]">
              Our team of designers, developers, technology specialists, marketers, and business professionals works together to deliver practical digital solutions that help businesses grow.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto relative z-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="stagger-item interactive-card bg-white rounded-[32px] p-8 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
              >
                {/* Blue Container with Avatar */}
                <div className="w-28 h-32 bg-blue-600 rounded-[28px] relative flex items-end justify-center overflow-hidden mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    unoptimized
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm font-semibold text-gray-600 mt-1.5 leading-snug">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

