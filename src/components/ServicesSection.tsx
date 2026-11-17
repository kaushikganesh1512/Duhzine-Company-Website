"use client";

import React from "react";
import Image from "next/image";

interface ServicesSectionProps {
  onServiceSelect?: (serviceName: string) => void;
}

type Service = {
  category: string;
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName: string;
  linkLabel: string;
  imagePosition: "left" | "right";
};

const services: Service[] = [
  {
    category: "Web development",
    title: "High-Performance Websites",
    description: (
      <>
        Build a professional digital presence with fast, responsive,
        user-friendly websites designed for performance, search visibility, and
        business growth.
        <br />
        <br />
        From corporate websites and business websites to customized web
        platforms, we create digital experiences that work seamlessly across
        devices.
      </>
    ),
    image: "/images/drive/Core Digital Services image 1.jpg",
    imageAlt: "High-performance website design displayed across multiple devices",
    imageWidth: 376,
    imageHeight: 254,
    imageClassName: "w-full max-w-[440px] lg:max-w-[480px] xl:max-w-[500px] h-auto object-contain rounded-2xl drop-shadow-sm",
    linkLabel: "Explore Web Development",
    imagePosition: "left",
  },
  {
    category: "E-Commerce Website Development",
    title: "Smart Mobile Experiences",
    description: (
      <>
        Transform your business ideas into powerful mobile experiences with
        smart, scalable, and user-friendly applications. At Duhzine IT
        Solutions, we develop high-performance mobile solutions that combine
        modern design, seamless functionality, and intuitive user experiences to
        help your business grow, engage customers, and stay ahead in the digital
        world.
      </>
    ),
    image: "/images/drive/Core Digital Services image 2.jpg",
    imageAlt: "E-commerce mobile application displayed on a smartphone",
    imageWidth: 628,
    imageHeight: 508,
    imageClassName: "w-full max-w-[350px] lg:max-w-[380px] xl:max-w-[400px] h-auto object-contain rounded-2xl drop-shadow-sm",
    linkLabel: "View our work",
    imagePosition: "right",
  },
  {
    category: "A to Z Digital Marketing Services",
    title: "Data-Driven Growth Strategies",
    description: (
      <>
        We deliver results-focused digital marketing solutions that help
        businesses reach the right audience, increase brand visibility, and
        drive measurable growth. From strategic campaign planning and creative
        advertising to performance tracking and continuous optimization, our
        data-driven approach helps you attract potential customers, generate
        quality leads, and achieve better conversions.
      </>
    ),
    image: "/images/drive/Core Digital Services image 3.jpg",
    imageAlt: "Mobile analytics and digital marketing dashboard",
    imageWidth: 305,
    imageHeight: 254,
    imageClassName: "w-full max-w-[340px] lg:max-w-[370px] xl:max-w-[390px] h-auto object-contain rounded-2xl drop-shadow-sm",
    linkLabel: "View our work",
    imagePosition: "left",
  },
  {
    category: "SaaS & Cloud Solutions",
    title: "CRM & Business Management Software",
    description: (
      <>
        All-in-one CRM software designed for gyms, salons, clinics, and
        service-based businesses. Manage customers, appointments, memberships,
        payments, staff, and daily operations from one simple, powerful
        platform.
      </>
    ),
    image: "/images/drive/Core Digital Services image 4.jpg",
    imageAlt: "CRM and business management software dashboard",
    imageWidth: 524,
    imageHeight: 266,
    imageClassName: "w-full max-w-[460px] lg:max-w-[500px] xl:max-w-[530px] h-auto object-contain rounded-2xl drop-shadow-sm",
    linkLabel: "View our work",
    imagePosition: "right",
  },
];

const ArrowLink = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center gap-1.5 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
  >
    <span className="font-semibold text-blue-600 text-sm sm:text-base tracking-tight leading-normal group-hover:underline">
      {label}
    </span>
    <span className="text-blue-600 text-base font-semibold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
      ↗
    </span>
  </button>
);

export default function ServicesSection({
  onServiceSelect,
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="flex flex-col w-full max-w-7xl mx-auto items-center gap-14 relative bg-[#f4f7ff] px-4 sm:px-6 lg:px-8 py-12 md:py-16 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Header */}
      <div className="reveal-on-scroll flex flex-col items-center gap-6 relative self-stretch w-full text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-2 hover:scale-[1.02] transition-transform">
          <span>Service</span>
        </div>

        {/* Heading & Subtitle */}
        <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
          <h2
            id="services-heading"
            className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[-2px] leading-tight"
          >
            Our Core Digital Services
          </h2>
          <p className="text-gray-700 font-normal text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl italic">
            We design, develop, and scale digital solutions that help businesses
            improve their online presence, streamline operations, engage
            customers, and achieve measurable growth.
          </p>
        </div>

        {/* Action Buttons (Strictly single line on all devices) */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 relative w-full flex-wrap">
          <button
            type="button"
            onClick={() => onServiceSelect?.("All Services")}
            className="interactive-btn inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-xs sm:text-base whitespace-nowrap transition-all shadow-xs cursor-pointer active:scale-[0.98]"
          >
            <span>View all services</span>
            <span className="text-xs sm:text-sm font-normal">↗</span>
          </button>
          <a
            href="#contact"
            className="interactive-btn inline-flex items-center justify-center px-4 sm:px-7 py-2.5 sm:py-3 bg-white hover:bg-blue-50/50 text-blue-600 border border-blue-600 rounded-full font-medium text-xs sm:text-base whitespace-nowrap transition-all shadow-xs active:scale-[0.98]"
          >
            Talk to Our Team
          </a>
        </div>
      </div>

      {/* 4 Cards Stack with spacious edge-curved outer boxes and smooth hover states */}
      <div className="stagger-container flex flex-col items-center gap-10 lg:gap-14 relative self-stretch w-full mt-4">
        {services.map((service) => {
          const isImageLeft = service.imagePosition === "left";

          return (
            <article
              key={service.title}
              className="stagger-item hover-expand-card group flex flex-col lg:flex-row items-center justify-between relative self-stretch w-full p-8 sm:p-10 lg:p-12 xl:p-14 gap-8 lg:gap-12 xl:gap-16 cursor-pointer"
              aria-label={`${service.category} - ${service.title}`}
            >
              {/* Left Column */}
              {isImageLeft ? (
                /* Card 1 & 3: Image on Left */
                <div className="flex-1 flex justify-center lg:justify-start items-center w-full max-w-[480px] xl:max-w-[520px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={service.imageWidth}
                    height={service.imageHeight}
                    className={service.imageClassName}
                    quality={100}
                  />
                </div>
              ) : (
                /* Card 2 & 4: Content on Left (All left-aligned: badge, title, desc, link) */
                <div className="flex-1 flex flex-col items-start gap-4 text-left w-full max-w-[540px] xl:max-w-[580px]">
                  <div className="flex items-center justify-start w-full">
                    <span className="inline-flex items-center px-4 py-1.5 bg-blue-600 rounded-[22px] font-medium text-white text-[13px] sm:text-sm tracking-tight leading-none shadow-xs">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-black text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-snug sm:leading-[42px] text-left">
                    {service.title}
                  </h3>
                  <div className="font-normal text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                    {service.description}
                  </div>
                  <div className="pt-2 flex justify-start w-full">
                    <ArrowLink
                      label={service.linkLabel}
                      onClick={() => onServiceSelect?.(service.title)}
                    />
                  </div>
                </div>
              )}

              {/* Right Column */}
              {isImageLeft ? (
                /* Card 1 & 3: Content on Right (Badge RIGHT, Title & Desc LEFT, Link RIGHT) */
                <div className="flex-1 flex flex-col gap-4 w-full max-w-[540px] xl:max-w-[580px]">
                  <div className="flex items-center justify-end w-full">
                    <span className="inline-flex items-center px-4 py-1.5 bg-blue-600 rounded-[22px] font-medium text-white text-[13px] sm:text-sm tracking-tight leading-none shadow-xs">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-black text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-snug sm:leading-[42px] text-left">
                    {service.title}
                  </h3>
                  <div className="font-normal text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                    {service.description}
                  </div>
                  <div className="flex justify-end pt-2 w-full">
                    <ArrowLink
                      label={service.linkLabel}
                      onClick={() => onServiceSelect?.(service.title)}
                    />
                  </div>
                </div>
              ) : (
                /* Card 2 & 4: Image on Right */
                <div className="flex-1 flex justify-center lg:justify-end items-center w-full max-w-[480px] xl:max-w-[520px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={service.imageWidth}
                    height={service.imageHeight}
                    className={service.imageClassName}
                    quality={100}
                  />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
