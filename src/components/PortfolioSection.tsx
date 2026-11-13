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
    imageClassName: "relative w-[426px] max-w-full h-auto object-contain rounded-2xl drop-shadow-sm",
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
    imageClassName: "relative w-[381px] max-w-full h-auto object-contain rounded-2xl drop-shadow-sm",
    imagePosition: "right",
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
    imageClassName: "relative w-[305px] max-w-full h-auto object-contain rounded-2xl drop-shadow-sm",
    imagePosition: "left",
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
    <span className="font-semibold text-blue-600 text-sm tracking-tight leading-normal group-hover:underline">
      {label}
    </span>
    <span className="text-blue-600 text-base font-semibold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
      ↗
    </span>
  </button>
);

export default function PortfolioSection({
  onProjectClick,
}: PortfolioSectionProps) {
  return (
    <section
      id="portfolio"
      className="flex flex-col w-full max-w-[1280px] mx-auto items-center gap-12 relative bg-[#f4f7ff] px-4 sm:px-8 lg:px-[120px] py-16 overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-6 relative self-stretch w-full">
        {/* Pill Badge */}
        <div className="flex w-fit items-center justify-center gap-2.5 px-4 py-1.5 relative bg-blue-600 rounded-[22px] overflow-hidden border-[0.2px] border-solid border-[#222222] shadow-sm">
          <span className="relative font-medium text-white text-[15px] text-center tracking-[-0.60px] leading-[18px] whitespace-nowrap">
            Our Recent Work
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full text-center">
          <h2
            id="portfolio-heading"
            className="font-semibold text-black text-[32px] sm:text-[40px] tracking-[-2.00px] leading-[39px] sm:leading-[48px]"
          >
            Real Projects. Digital Solutions.
          </h2>
          <p className="font-medium text-black text-base sm:text-lg tracking-[-0.36px] leading-[27px] max-w-3xl">
            Explore selected projects that demonstrate our experience in creating
            professional websites, e-commerce platforms, and digital experiences
            for businesses across different industries.
          </p>
        </div>

        {/* Top Header Action Buttons */}
        <div className="inline-flex items-center gap-4 relative">
          <button
            type="button"
            onClick={() => onProjectClick?.("All Projects")}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-sm transition-all shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View all works</span>
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

      {/* 3 Projects Stack matching exact Figma layout & alternating orientations */}
      <div className="flex flex-col items-center gap-9 relative self-stretch w-full mt-4">
        {projects.map((project, index) => {
          const isImageLeft = project.imagePosition === "left";

          return (
            <article
              key={project.title}
              className="flex flex-col lg:flex-row items-center justify-between relative self-stretch w-full min-h-[300px] px-6 sm:px-10 lg:px-12 py-8 bg-transparent rounded-2xl gap-8 transition-transform hover:-translate-y-0.5 duration-200"
              aria-label={`${project.category} - ${project.title}`}
            >
              {/* Left Column */}
              {isImageLeft ? (
                /* Card 1 & 3: Image on Left */
                <div className="flex-1 flex justify-center lg:justify-start items-center w-full max-w-[460px]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={460}
                    height={300}
                    className={project.imageClassName}
                    priority={index === 0}
                  />
                </div>
              ) : (
                /* Card 2: Content on Left (Left-aligned badge, title, desc, link) */
                <div className="flex-1 flex flex-col items-start gap-4 text-left w-full lg:max-w-[480px]">
                  <div className="flex items-center justify-start w-full">
                    <span className="inline-flex items-center px-3.5 py-1 bg-blue-600 rounded-[22px] font-medium text-white text-[13px] tracking-tight leading-none shadow-xs">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-black text-[26px] sm:text-[32px] tracking-tight leading-[32px] sm:leading-[38px]">
                    {project.title}
                  </h3>
                  <p className="font-normal text-gray-700 text-sm sm:text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-2">
                    <ArrowLink
                      label="View Project"
                      onClick={() => onProjectClick?.(project.title)}
                    />
                  </div>
                </div>
              )}

              {/* Right Column */}
              {isImageLeft ? (
                /* Card 1 & 3: Content on Right (Right badge, left text, right link) */
                <div className="flex-1 flex flex-col gap-4 w-full lg:max-w-[480px]">
                  <div className="flex items-center justify-end w-full">
                    <span className="inline-flex items-center px-3.5 py-1 bg-blue-600 rounded-[22px] font-medium text-white text-[13px] tracking-tight leading-none shadow-xs">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-black text-[26px] sm:text-[32px] tracking-tight leading-[32px] sm:leading-[38px] text-left">
                    {project.title}
                  </h3>
                  <p className="font-normal text-gray-700 text-sm sm:text-[15px] leading-relaxed text-left">
                    {project.description}
                  </p>
                  <div className="flex justify-end pt-2 w-full">
                    <ArrowLink
                      label="View Project"
                      onClick={() => onProjectClick?.(project.title)}
                    />
                  </div>
                </div>
              ) : (
                /* Card 2: Image on Right */
                <div className="flex-1 flex justify-center lg:justify-end items-center w-full max-w-[460px]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={460}
                    height={300}
                    className={project.imageClassName}
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
