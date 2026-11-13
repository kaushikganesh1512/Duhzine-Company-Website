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
  imageClassName: string;
  imageWidth: number;
  imageHeight: number;
  linkLabel: string;
  imagePosition: "left" | "right";
  containerClassName?: string;
  contentClassName?: string;
  descriptionClassName?: string;
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
        From corporate websites and business websites to customized web
        platforms, we create digital experiences that work seamlessly across
        devices.
      </>
    ),
    image: "/images/service_figma_card_1.png",
    imageAlt:
      "High-performance website design displayed across multiple devices",
    imageClassName: "relative w-[376px] h-auto max-h-[254px] object-contain drop-shadow-md",
    imageWidth: 376,
    imageHeight: 254,
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
    image: "/images/service_figma_card_2.png",
    imageAlt: "E-commerce mobile application displayed on a smartphone",
    imageClassName: "relative w-[314px] h-auto max-h-[254px] object-contain drop-shadow-md",
    imageWidth: 314,
    imageHeight: 254,
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
    image: "/images/service_figma_card_3.png",
    imageAlt: "Mobile analytics and digital marketing dashboard",
    imageClassName: "relative w-[305px] h-auto max-h-[254px] object-contain drop-shadow-md",
    imageWidth: 305,
    imageHeight: 254,
    linkLabel: "View our work",
    imagePosition: "left",
    contentClassName: "lg:w-[457px]",
    descriptionClassName: "lg:w-[423px]",
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
    image: "/images/service_figma_card_4.png",
    imageAlt: "CRM and business management software dashboard",
    imageClassName: "relative w-[524px] h-auto max-h-[266px] object-contain drop-shadow-md",
    imageWidth: 524,
    imageHeight: 266,
    linkLabel: "View our work",
    imagePosition: "right",
    containerClassName: "lg:h-[290px] px-6 sm:px-10 lg:pl-[120px] lg:pr-8 py-0",
  },
];

const ArrowLink = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}): React.ReactNode => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 relative flex-[0_0_auto] group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007aff]"
      aria-label={label}
    >
      <span className="relative flex items-center justify-center w-fit font-semibold text-[#007aff] hover:text-blue-700 text-[15px] text-center tracking-[-0.60px] leading-[18px] underline whitespace-nowrap transition-colors">
        {label}
      </span>
      <span className="relative w-4 h-4 flex items-center justify-center text-[#007aff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
        </svg>
      </span>
    </button>
  );
};

const ServiceContent = ({
  service,
  onSelect,
}: {
  service: Service;
  onSelect?: () => void;
}): React.ReactNode => {
  const isRightAligned = service.imagePosition === "left";

  return (
    <div
      className={`flex flex-col ${
        isRightAligned ? "items-start lg:items-end" : "items-start"
      } justify-center gap-6 relative flex-1 grow w-full ${
        service.contentClassName ?? ""
      }`}
    >
      <div
        className={`flex flex-col ${
          isRightAligned ? "items-start lg:items-end" : "items-start"
        } gap-4 relative self-stretch w-full flex-[0_0_auto]`}
      >
        <div
          className={`flex flex-col ${
            isRightAligned ? "items-start lg:items-end" : "items-start"
          } gap-2 relative self-stretch w-full flex-[0_0_auto]`}
        >
          <div className="inline-flex items-center justify-center pt-[3px] pb-1 px-3 relative flex-[0_0_auto] bg-[#2563eb] rounded-xl overflow-hidden shadow-xs">
            <span className="relative flex items-center w-fit font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px] whitespace-nowrap">
              {service.category}
            </span>
          </div>

          <div className={`flex items-start ${isRightAligned ? "justify-start lg:justify-end" : "justify-start"} relative self-stretch w-full flex-[0_0_auto]`}>
            <h2
              className={`relative flex items-center ${
                isRightAligned ? "justify-start lg:justify-end text-left lg:text-right" : "text-left"
              } flex-1 font-semibold text-black text-[28px] sm:text-[32px] tracking-[-1.5px] lg:tracking-[-2.00px] leading-[1.2]`}
            >
              {service.title}
            </h2>
          </div>
        </div>

        <div
          className={`${
            service.descriptionClassName ?? ""
          } self-stretch flex items-start ${isRightAligned ? "justify-start lg:justify-end" : "justify-start"} relative flex-[0_0_auto]`}
        >
          <p
            className={`relative flex-1 font-normal text-black/90 text-[13px] tracking-[0] leading-[16.4px] ${
              isRightAligned ? "text-left lg:text-right" : "text-left"
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>

      <ArrowLink label={service.linkLabel} onClick={onSelect} />
    </div>
  );
};

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps): React.ReactNode {
  return (
    <section
      id="services"
      className="w-full bg-[#f4f7ff] py-14 sm:py-20 relative overflow-hidden flex flex-col items-center gap-12"
      aria-labelledby="services-heading"
    >
      {/* 3D Faceted Sphere floating on the left edge (Figma artwork) */}
      <div className="absolute -left-2 top-20 sm:top-28 w-16 sm:w-20 md:w-24 lg:w-28 select-none pointer-events-none z-10 opacity-90">
        <Image
          src="/images/service_sphere_faceted_clean.png"
          alt="3D Geometric Artwork"
          width={112}
          height={280}
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </div>

      {/* 3D Translucent Rainbow Ribbon artwork on right margin (Figma artwork) */}
      <div className="absolute right-0 bottom-44 sm:bottom-56 w-16 sm:w-20 md:w-24 select-none pointer-events-none z-10 opacity-80">
        <Image
          src="/images/service_ribbon_clean.png"
          alt="3D Ribbon Artwork"
          width={96}
          height={160}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Section Header */}
      <header className="flex flex-col items-center gap-6 relative self-stretch w-full max-w-5xl mx-auto px-6 z-20">
        <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          {/* Service badge */}
          <div className="flex w-[148px] items-center justify-center gap-2.5 px-3 py-2 relative flex-[0_0_auto] bg-[#007aff] rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
            <span className="relative flex items-center justify-center w-fit text-white text-[15px] text-center font-medium leading-[18px] whitespace-nowrap tracking-[-0.6px]">
              Service
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8 lg:px-[120px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <h1
                id="services-heading"
                className="relative flex items-center justify-center flex-1 font-semibold text-black text-[32px] sm:text-[40px] text-center tracking-[-2.00px] leading-[44px] sm:leading-[61px]"
              >
                Our Core Digital Services
              </h1>
            </div>

            <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex items-center justify-center flex-1 font-normal text-black text-base sm:text-lg text-center tracking-[0] leading-[23px] max-w-2xl">
                We design, develop, and scale digital solutions that help
                businesses improve their online presence, streamline operations,
                engage customers, and achieve measurable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <nav
          className="inline-flex items-center gap-4 sm:gap-6 relative flex-[0_0_auto]"
          aria-label="Service actions"
        >
          <button
            type="button"
            onClick={() => onServiceSelect && onServiceSelect("All Services")}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 relative flex-[0_0_auto] bg-[#007aff] hover:bg-blue-700 text-white rounded-[22px] overflow-hidden shadow-[0px_4px_4px_#00000040] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007aff] transition-colors cursor-pointer"
          >
            <span className="relative flex items-center justify-center w-fit font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
              View all services
            </span>
            <span className="relative w-4 h-4 flex items-center justify-center" aria-hidden="true">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" />
              </svg>
            </span>
          </button>

          <button
            type="button"
            onClick={() => onServiceSelect && onServiceSelect("Talk to Our Team")}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 relative flex-[0_0_auto] rounded-[22px] overflow-hidden border border-solid border-[#007aff] bg-white hover:bg-blue-50/50 shadow-[0px_4px_4px_#00000040] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007aff] transition-colors cursor-pointer"
          >
            <span className="relative flex items-center justify-center w-fit font-medium text-[#007aff] text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
              Talk to Our Team
            </span>
          </button>
        </nav>
      </header>

      {/* Services List matching Figma exactly */}
      <div
        id="services-list"
        className="flex flex-col items-start gap-12 sm:gap-14 relative self-stretch w-full max-w-[1280px] mx-auto z-20"
      >
        {services.map((service) => {
          const isImageLeft = service.imagePosition === "left";

          return (
            <article
              key={service.title}
              className={`${
                service.containerClassName ?? "justify-center px-6 sm:px-12 lg:px-[120px] py-0"
              } flex-[0_0_auto] flex flex-col ${
                isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12 relative self-stretch w-full`}
            >
              {/* Image Container */}
              <div className="flex items-center justify-center shrink-0">
                <Image
                  className={service.imageClassName}
                  alt={service.imageAlt}
                  src={service.image}
                  width={service.imageWidth}
                  height={service.imageHeight}
                  priority={isImageLeft}
                />
              </div>

              {/* Service Text Content */}
              <ServiceContent
                service={service}
                onSelect={() => onServiceSelect && onServiceSelect(service.title)}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
