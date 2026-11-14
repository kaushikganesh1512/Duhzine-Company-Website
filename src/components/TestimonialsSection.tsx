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
      className="flex flex-col w-full max-w-7xl mx-auto items-center gap-12 relative bg-[#f4f7ff] px-6 sm:px-10 lg:px-16 py-12 md:py-16 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-6 relative self-stretch w-full text-center">
        {/* Pill Badge matching Figma */}
        <div className="flex w-fit items-center justify-center gap-2.5 px-6 py-2 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
          <span className="relative font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
            Testimonals
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
          <h2
            id="testimonials-heading"
            className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] tracking-[-2px] leading-tight"
          >
            What Our Clients Say
          </h2>
          <p className="font-medium text-black text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl">
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
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-sm sm:text-base transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View all services</span>
            <span className="text-sm font-normal">↗</span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 bg-white hover:bg-blue-50/50 text-blue-600 border border-blue-600 rounded-full font-medium text-sm sm:text-base transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98]"
          >
            Talk to Our Team
          </a>
        </div>
      </div>

      {/* 2x2 Dark Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative self-stretch w-full mt-2">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="relative flex flex-col justify-between p-9 sm:p-11 rounded-3xl bg-[#0b0e17] border border-neutral-800/90 shadow-xl overflow-hidden group hover:border-blue-900 transition-all"
          >
            {/* Ambient blue glow on right edge inside card */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Top row: Avatar + Name/Role */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-neutral-700 shrink-0 bg-black flex items-center justify-center shadow-xs">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-white text-lg sm:text-xl tracking-tight leading-snug">
                      {t.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-snug mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* 5 Bright Electric Blue Stars matching third image */}
                <div className="flex items-center gap-1.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-[#2563eb] text-[#2563eb]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-neutral-200 leading-[26px] sm:leading-[28px] font-normal">
                {t.content}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
