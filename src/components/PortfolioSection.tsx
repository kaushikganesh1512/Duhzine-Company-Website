"use client";

import React from "react";
import Image from "next/image";

interface PortfolioSectionProps {
  onProjectClick?: (projectName: string) => void;
}

type Project = {
  category: string;
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imageClassName: string;
  imagePosition: "left" | "right";
  contentClassName?: string;
  descriptionClassName?: string;
  link?: string;
};

const projects: Project[] = [
  {
    category: "Danny Enterprises",
    title: "Agri-Tech Industry Website Development",
    description: (
      <>
        We created a modern, professional, and responsive website for Danny
        Enterprises, a business specializing in Cocopeat and Coconut Fiber
        Products.
        <br />
        <br />
        The website was designed to present their products and business
        offerings clearly while providing customers with a simple and engaging
        online experience.
      </>
    ),
    image: "/images/drive/Real Projects image 1.jpg",
    imageAlt: "Danny Enterprises Agri-Tech responsive website presentation",
    imageClassName: "w-[460px] lg:w-[500px] xl:w-[540px] max-w-full h-auto object-contain rounded-2xl drop-shadow-sm",
    imagePosition: "left",
  },
  {
    category: "Quriouslilmindz - Preschool",
    title: "Ed-Tech Industry Website Development",
    description: (
      <>
        We developed a vibrant and engaging digital presence for Qurious Little
        Mindz Preschool, designed to reflect the school&apos;s creativity,
        curiosity, and joyful learning environment.
        <br />
        <br />
        The website provides an approachable online experience for parents while
        communicating the school&apos;s identity and offerings.
      </>
    ),
    image: "/images/drive/Real Projects image 2.jpg",
    imageAlt: "Qurious Little Mindz preschool educational website interface",
    imageClassName: "w-[420px] lg:w-[460px] xl:w-[500px] max-w-full h-auto object-contain rounded-2xl drop-shadow-sm",
    imagePosition: "right",
    link: "https://www.quriouslilmindz.com/",
  },
  {
    category: "Varankutty Mandhi Biriyani",
    title: "Food Industry Website Development",
    description: (
      <>
        We designed and developed a modern, responsive website for Varunkutty
        Mandhi Biriyani, showcasing its menu, food offerings, brand identity, and
        dining experience through an engaging digital platform.
        <br />
        <br />
        The website provides customers with an easy way to explore the restaurant
        and discover its offerings while creating a professional and engaging
        online presence for the brand.
      </>
    ),
    image: "/images/drive/Real Projects image 3.jpg",
    imageAlt: "Varunkutty Mandhi Biriyani restaurant website and menu interface",
    imageClassName: "w-[360px] lg:w-[400px] xl:w-[440px] max-w-full h-auto object-contain rounded-2xl drop-shadow-sm",
    imagePosition: "left",
    link: "https://www.varunkuttymandhibiriyani.in/",
  },
];

const ArrowLink = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
      >
        <span className="font-semibold text-blue-600 text-sm sm:text-base tracking-tight leading-normal group-hover:underline">
          {label}
        </span>
        <span className="text-blue-600 text-base font-semibold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
          ↗
        </span>
      </a>
    );
  }

  return (
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
};

export default function PortfolioSection({
  onProjectClick,
}: PortfolioSectionProps) {
  return (
    <section
      id="portfolio"
      className="flex flex-col w-full max-w-7xl mx-auto items-center gap-12 relative bg-[#f4f7ff] px-4 sm:px-6 lg:px-8 py-12 md:py-16 overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Section Header */}
      <div className="reveal-on-scroll flex flex-col items-center gap-6 relative self-stretch w-full text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-2 hover:scale-[1.02] transition-transform">
          <span>Our Recent Work</span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
          <h2
            id="portfolio-heading"
            className="font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-[-2px] leading-tight"
          >
            Real Projects. Digital Solutions.
          </h2>
          <p className="text-gray-700 font-normal text-base sm:text-lg md:text-[19px] tracking-[-0.36px] leading-[28px] sm:leading-[30px] max-w-3xl italic">
            Explore selected projects that demonstrate our experience in creating
            professional websites, e-commerce platforms, and digital experiences
            for businesses across different industries.
          </p>
        </div>

        {/* Top Header Action Buttons (Strictly single line on all devices) */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 relative w-full flex-wrap">
          <button
            type="button"
            onClick={() => onProjectClick?.("All Projects")}
            className="interactive-btn inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-xs sm:text-base whitespace-nowrap transition-all shadow-xs cursor-pointer active:scale-[0.98]"
          >
            <span>View all works</span>
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

      {/* 3 Projects Stack matching exact Figma layout & alternating orientations */}
      <div className="stagger-container flex flex-col items-center gap-10 lg:gap-14 relative self-stretch w-full mt-4">
        {projects.map((project, index) => {
          const isImageLeft = project.imagePosition === "left";

          return (
            <article
              key={project.title}
              onClick={() => {
                if (project.link) {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                } else {
                  onProjectClick?.(project.title);
                }
              }}
              className="stagger-item hover-expand-card group flex flex-col lg:flex-row items-center justify-between relative self-stretch w-full p-8 sm:p-10 lg:p-12 xl:p-14 gap-8 lg:gap-12 xl:gap-16 cursor-pointer"
              aria-label={`${project.category} - ${project.title}`}
            >
              {/* Left Column */}
              {isImageLeft ? (
                /* Card 1 & 3: Image on Left */
                <div className="flex-1 flex justify-center lg:justify-start items-center w-full max-w-[480px] xl:max-w-[520px]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={500}
                    height={320}
                    className={project.imageClassName}
                    priority={index === 0}
                    quality={100}
                  />
                </div>
              ) : (
                /* Card 2: Content on Left (Left-aligned badge, title, desc, link) */
                <div className="order-2 lg:order-1 flex-1 flex flex-col items-start gap-4 text-left w-full max-w-[540px] xl:max-w-[580px]">
                  <div className="flex items-center justify-start w-full">
                    <span className="inline-flex items-center px-4 py-1.5 bg-blue-600 rounded-[22px] font-medium text-white text-[13px] sm:text-sm tracking-tight leading-none shadow-xs">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-black text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-snug sm:leading-[42px]">
                    {project.title}
                  </h3>
                  <div className="font-normal text-gray-700 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </div>
                  <div className="pt-2 flex justify-start w-full">
                    <ArrowLink
                      label="View Project"
                      href={project.link}
                      onClick={() => onProjectClick?.(project.title)}
                    />
                  </div>
                </div>
              )}

              {/* Right Column */}
              {isImageLeft ? (
                /* Card 1 & 3: Content on Right (Right badge, left text, right link) */
                <div className="flex-1 flex flex-col gap-4 w-full max-w-[540px] xl:max-w-[580px]">
                  <div className="flex items-center justify-end w-full">
                    <span className="inline-flex items-center px-4 py-1.5 bg-blue-600 rounded-[22px] font-medium text-white text-[13px] sm:text-sm tracking-tight leading-none shadow-xs">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-black text-2xl sm:text-3xl lg:text-[36px] tracking-tight leading-snug sm:leading-[42px] text-left">
                    {project.title}
                  </h3>
                  <div className="font-normal text-gray-700 text-sm sm:text-base leading-relaxed text-left">
                    {project.description}
                  </div>
                  <div className="flex justify-end pt-2 w-full">
                    <ArrowLink
                      label="View Project"
                      href={project.link}
                      onClick={() => onProjectClick?.(project.title)}
                    />
                  </div>
                </div>
              ) : (
                /* Card 2: Image on Right */
                <div className="order-1 lg:order-2 flex-1 flex justify-center lg:justify-end items-center w-full max-w-[480px] xl:max-w-[520px]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={500}
                    height={320}
                    className={project.imageClassName}
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
