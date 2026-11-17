"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface InternshipStudentsProps {
  onJoinClick?: () => void;
}

export default function InternshipStudents({ onJoinClick }: InternshipStudentsProps) {
  const students = [
    { src: "/images/internship/student-1.jpg", alt: "Duhzine Intern Student 1" },
    { src: "/images/internship/student-2.jpg", alt: "Duhzine Intern Student 2" },
    { src: "/images/internship/student-3.jpg", alt: "Duhzine Intern Student 3" },
    { src: "/images/internship/student-4.jpg", alt: "Duhzine Intern Student 4" },
    { src: "/images/internship/student-5.jpg", alt: "Duhzine Intern Student 5" },
    { src: "/images/internship/student-6.jpg", alt: "Duhzine Intern Student 6" },
    { src: "/images/internship/student-7.jpg", alt: "Duhzine Intern Student 7" },
    { src: "/images/internship/student-8.jpg", alt: "Duhzine Intern Student 8" },
    { src: "/images/internship/student-9.jpg", alt: "Duhzine Intern Student 9" },
    { src: "/images/internship/student-10.jpg", alt: "Duhzine Intern Student 10" },
    { src: "/images/internship/student-11.jpg", alt: "Duhzine Intern Student 11" },
    { src: "/images/internship/student-12.jpg", alt: "Duhzine Intern Student 12" },
    { src: "/images/internship/student-13.jpg", alt: "Duhzine Intern Student 13" },
    { src: "/images/internship/student-14.jpg", alt: "Duhzine Intern Student 14" },
    { src: "/images/internship/student-15.jpg", alt: "Duhzine Intern Student 15" },
  ];

  // Repeat for continuous seamless marquee
  const marqueeStudents = [...students, ...students];

  return (
    <section className="py-12 md:py-16 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-4 hover:scale-[1.02] transition-transform">
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-snug [text-wrap:balance]">
            Helping 1,000+ Students Build Successful Careers
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-gray-700 font-normal leading-relaxed max-w-3xl [text-wrap:balance] italic">
            Over 1,000 students have successfully completed their internships at Duhzine,
            gaining hands-on experience, expert mentorship, and industry-ready skills to launch
            successful careers in technology.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onJoinClick}
              className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Join Our Innovative Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-900 font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee of Intern Portraits */}
      <div className="w-full relative overflow-hidden py-8">
        {/* Subtle Edge Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8faff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8faff] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-5 px-4 flex items-center">
          {marqueeStudents.map((student, idx) => (
            <div
              key={idx}
              className="w-20 sm:w-24 h-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-neutral-200/80 bg-white relative group"
            >
              <Image
                src={student.src}
                alt={student.alt}
                width={96}
                height={112}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

