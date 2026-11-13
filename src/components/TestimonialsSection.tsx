"use client";

import React from "react";
import Image from "next/image";

interface TestimonialsSectionProps {
  onActionClick?: () => void;
}

const testimonials = [
  {
    name: "Danny",
    role: "Founder Of Danny Enterprises",
    avatar: "/images/drive/Testimonals 1.jpg",
    content:
      "“Working with Duhzine IT Solutions Pvt. Ltd. was a smooth and professional experience. They understood our requirements clearly and delivered a high-quality website on time. We’re very satisfied with the final outcome.”",
  },
  {
    name: "Joseph Vijay",
    role: "Owner of Vj Unique Properties",
    avatar: "/images/drive/Testimonals 2 (2).jpg",
    content:
      '“We had a great experience working with Duhzine IT Solutions Pvt Ltd. The team delivered a well-designed, user-friendly website that meets our expectations perfectly. Highly recommended. "Thanks Gopinath!!!"”',
  },
  {
    name: "Seran",
    role: "Seran Fitness Studio",
    avatar: "/images/drive/Testimonals 3.png",
    content:
      "“Thanks to Santhosh and the team at Duhzine IT Solutions Pvt Ltd, our digital marketing performance has improved significantly. Their strategies are effective and result-driven. Highly recommended.”",
  },
  {
    name: "Bharathi & Team",
    role: "Founder of Bk Packers & Movers",
    avatar: "/images/drive/Testimonals 4.jpg",
    content:
      "“Saran and the team at Duhzine IT Solutions Pvt Ltd did an excellent job on our website. The process was smooth, and the final result exceeded our expectations. Highly recommended.”",
  },
];

export default function TestimonialsSection({
  onActionClick,
}: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="flex flex-col w-full max-w-[1280px] mx-auto items-center gap-12 relative bg-[#f4f7ff] px-4 sm:px-8 lg:px-[120px] pt-12 pb-20 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-6 relative self-stretch w-full text-center">
        {/* Pill Badge matching Figma */}
        <div className="flex w-fit items-center justify-center gap-2.5 px-4 py-1.5 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
          <span className="relative font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
            Testimonals
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
          <h2
            id="testimonials-heading"
            className="font-semibold text-black text-[32px] sm:text-[40px] tracking-[-2.00px] leading-[39px] sm:leading-[48px]"
          >
            What Our Clients Say
          </h2>
          <p className="font-medium text-black text-base sm:text-lg tracking-[-0.36px] leading-[27px] max-w-3xl">
            Our clients value our professional approach, understanding of their
            requirements, quality of delivery, and commitment to creating
            practical digital solutions.
          </p>
        </div>

        {/* Buttons */}
        <div className="inline-flex items-center gap-4 relative">
          <button
            type="button"
            onClick={onActionClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-sm transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View all services</span>
            <span className="text-sm font-normal">↗</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-white hover:bg-blue-50/50 text-blue-600 border border-blue-600 rounded-full font-medium text-sm transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98]"
          >
            Talk to Our Team
          </a>
        </div>
      </div>

      {/* 2x2 Dark Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative self-stretch w-full mt-2">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="relative flex flex-col justify-between p-8 rounded-2xl bg-[#0b0e17] border border-neutral-800/80 shadow-xl overflow-hidden group hover:border-blue-900 transition-all"
          >
            {/* Ambient blue glow on right edge inside card */}
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-blue-600/25 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Top row: Avatar + Name/Role */}
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-700 shrink-0 bg-black flex items-center justify-center">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-white text-[17px] tracking-tight leading-snug">
                      {t.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-normal leading-snug mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* 5 Bright Blue Stars */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-blue-500 text-blue-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                {t.content}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
