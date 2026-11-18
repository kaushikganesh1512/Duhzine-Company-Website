"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServicesRecentWorksProps {
  onProjectClick?: (title: string) => void;
}

export default function ServicesRecentWorks({
  onProjectClick,
}: ServicesRecentWorksProps) {
  const projects = [
    {
      image: "/images/services/work_1.jpg",
      category: "Business Website Development",
      title: "Delivering Sustainable Cocopeat Solutions for Global Agriculture",
      description:
        "A professional business website designed to showcase premium cocopeat products, strengthen brand credibility, highlight product offerings, and connect agricultural businesses with global markets",
      link: "https://dannyenterprises.co.in",
    },
    {
      image: "/images/services/bk_packers_mockup.jpg",
      category: "Packers & Movers Website Development",
      title: "Moving Your Belongings Safely, Smoothly, and Stress-Free.",
      description:
        "A responsive website designed to showcase professional packing and moving services, build customer trust, highlight service offerings, and simplify relocation enquiries through clear navigation and engaging visuals",
      link: "https://bkpackersandmovers.in",
    },
    {
      image: "/images/services/work_3.jpg",
      category: "Restaurant Website Development",
      title: "Showcasing Authentic Cuisine Through Engaging Digital Experiences",
      description:
        "A responsive restaurant website designed to showcase authentic cuisine, highlight signature dishes, present restaurant menus, and simplify customer enquiries through an engaging digital experience",
      link: "https://www.varunkuttymandhibiriyani.in/",
    },
    {
      image: "/images/services/work_4.jpg",
      category: "Preschool Website Development",
      title: "Nurturing Young Minds Through Engaging Learning Experiences",
      description:
        "A responsive preschool website designed to showcase early learning programs, highlight creative activities, build parent trust, and simplify school admission enquiries through accessible navigation",
      link: "https://www.quriouslilmindz.com/",
    },
    {
      image: "/images/services/work_5.jpg",
      category: "School Website Development",
      title: "Building Brighter Futures Through Quality Education",
      description:
        "A modern school website designed to highlight academic excellence, showcase educational programs, communicate institutional values, and strengthen parent engagement through accessible information and responsive layouts",
      link: "https://littel-star-nursery-and-primary-sch.vercel.app/",
    },
    {
      image: "/images/services/work_6.jpg",
      category: "Preschool & Daycare Website Development",
      title: "Creating Safe Spaces for Learning and Growth",
      description:
        "A responsive preschool and daycare website designed to showcase childcare programs, highlight learning activities, build parent confidence, and simplify admissions through intuitive navigation and engaging visuals",
      link: "https://arudra-s-six.vercel.app/",
    },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="reveal-on-scroll text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
            <span>Our Design</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 [text-wrap:balance]">
            Recent Works
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-2xl mx-auto leading-relaxed [text-wrap:balance] italic">
            A showcase of impactful digital solutions crafted to drive growth, enhance user experience, and deliver measurable results.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              onClick={() => {
                if (proj.link) {
                  window.open(proj.link, "_blank", "noopener,noreferrer");
                } else {
                  onProjectClick?.(proj.title);
                }
              }}
              className="stagger-item interactive-card bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              {/* Image Preview */}
              <div className="w-full h-52 sm:h-60 relative overflow-hidden border-b border-gray-100 bg-white">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={680}
                  height={508}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category Pill */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-tight mb-3">
                    {proj.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 leading-snug tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="mt-5 pt-3">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm underline cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>View our work</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onProjectClick?.(proj.title)}
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm underline cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>View our work</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

