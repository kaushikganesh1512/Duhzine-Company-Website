"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Palette,
  Code2,
  BarChart3,
  Briefcase,
  Video,
  UserCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface JobRole {
  id: string;
  title: string;
  experience: string;
  icon: React.ElementType;
  description: string;
  responsibilities: string[];
  tools: string;
}

const jobRoles: JobRole[] = [
  {
    id: "ui-ux",
    title: "UI/UX Designer",
    experience: "3+ Years",
    icon: Palette,
    description:
      "Design user-centered, high-quality digital experiences for web and mobile platforms. Turn complex business requirements into simple, intuitive, and visually engaging solutions that improve usability and deliver meaningful experiences to users.",
    responsibilities: [
      "User research and analysis",
      "Wireframing and prototyping",
      "UI design for web and mobile",
      "Responsive web and app design",
      "Usability testing",
      "Team collaboration",
    ],
    tools: "Figma, FigJam, Adobe XD, Photoshop, Illustrator, Framer, Canva.",
  },
  {
    id: "no-code",
    title: "No-Code Developer",
    experience: "2+ Years",
    icon: Code2,
    description:
      "Build modern, responsive, and scalable websites using no-code and low-code platforms. Transform design concepts into functional digital experiences while ensuring performance, usability, and seamless integrations.",
    responsibilities: [
      "Website development",
      "Responsive website creation",
      "Third-party tool integration",
      "Workflow automation",
      "Website performance optimization",
      "Website maintenance and updates",
    ],
    tools:
      "Webflow, Framer, WordPress, Figma, Zapier, Make, Airtable, HTML, CSS, JavaScript.",
  },
  {
    id: "marketer",
    title: "Performance Marketer",
    experience: "3+ Years",
    icon: BarChart3,
    description:
      "Plan and execute data-driven digital marketing campaigns to generate quality leads, increase conversions, and improve business growth. Manage advertising platforms and optimize campaigns to achieve measurable marketing results.",
    responsibilities: [
      "Search engine optimization (SEO)",
      "Meta and Google Ads management",
      "Campaign planning and execution",
      "Lead generation strategies",
      "Performance analysis",
      "ROI tracking and reporting",
    ],
    tools:
      "Meta Ads Manager, Google Ads, Google Analytics 4, Google Tag Manager, Google Search Console, SEMrush, Ahrefs, Canva, Excel.",
  },
  {
    id: "bdm",
    title: "Business Development Manager",
    experience: "4+ Years",
    icon: Briefcase,
    description:
      "Drive business growth by identifying new opportunities, building strong client relationships, and developing effective sales strategies. Work closely with internal teams to understand client requirements and deliver suitable business solutions.",
    responsibilities: [
      "New business lead generation",
      "Client relationship management",
      "Business strategy development",
      "Client requirement analysis",
      "Sales and revenue growth",
      "Team collaboration",
    ],
    tools:
      "HubSpot CRM, Salesforce, LinkedIn Sales Navigator, Microsoft Excel, Google Sheets, PowerPoint, Google Workspace, Slack.",
  },
  {
    id: "video-editor",
    title: "Video Editor",
    experience: "Freshers",
    icon: Video,
    description:
      "Create engaging and high-quality video content for digital marketing campaigns, social media platforms, and brand communication. Transform raw footage into compelling visual stories using creative editing, motion graphics, and storytelling techniques.",
    responsibilities: [
      "Social media video editing",
      "Promotional video creation",
      "Motion graphics and animations",
      "Audio and sound editing",
      "Creative storytelling",
      "Video quality optimization",
    ],
    tools:
      "Adobe Premiere Pro, After Effects, CapCut, DaVinci Resolve, Photoshop, Illustrator, Canva.",
  },
  {
    id: "hr-recruiter",
    title: "HR Recruiter",
    experience: "Freshers",
    icon: UserCheck,
    description:
      "Support recruitment and talent acquisition activities by identifying suitable candidates, coordinating interviews, and managing hiring processes. Help build a talented team while ensuring a smooth and professional candidate experience.",
    responsibilities: [
      "Candidate sourcing and screening",
      "Resume shortlisting",
      "Interview scheduling",
      "Recruitment process management",
      "Employee onboarding support",
      "Candidate communication",
    ],
    tools:
      "LinkedIn Recruiter, Naukri, Indeed, Google Forms, Microsoft Excel, Google Sheets, Google Workspace, HRMS, ATS platforms.",
  },
];

interface CareersOpenPositionsProps {
  onApply: (jobTitle: string) => void;
}

export default function CareersOpenPositions({
  onApply,
}: CareersOpenPositionsProps) {
  // Synchronized view state across all cards
  const [isExpandedAll, setIsExpandedAll] = useState(false);

  const toggleExpandAll = () => {
    setIsExpandedAll((prev) => !prev);
  };

  return (
    <section
      id="open-positions"
      className="relative w-full bg-[#f4f7fc] py-12 md:py-16 overflow-hidden"
    >
      {/* Decorative 3D Crystal Disco Sphere (Right Side - Matching Image 3 Reference) */}
      <div className="hidden xl:block absolute right-0 bottom-10 w-[180px] 2xl:w-[220px] pointer-events-none select-none z-10 scale-x-[-1] opacity-90">
        <Image
          src="/images/services_disco_left.png"
          alt="Decorative 3D Crystal Disco Sphere"
          width={200}
          height={570}
          className="w-full h-auto object-contain object-left block"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform whitespace-nowrap">
            <span>Open Positions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-snug mb-4 [text-wrap:balance]">
            Full-Time Opportunities at Duhzine
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-gray-700 font-normal leading-relaxed max-w-3xl [text-wrap:balance] italic">
            Explore our current openings and find a role that matches your skills and career goals.
          </p>
        </div>

        {/* 6 Role Cards Grid - Equal height cards aligned at start and end */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {jobRoles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.id}
                className="h-full flex flex-col justify-between bg-white rounded-3xl p-7 lg:p-8 border border-neutral-100 shadow-[0_2px_12px_-2px_rgba(16,24,40,0.06)] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-1 flex flex-col">
                  {/* Icon & Title Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#edf5ff] flex items-center justify-center text-blue-600 shadow-xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-blue-600 text-white text-xs font-semibold tracking-tight shadow-xs">
                      {role.experience}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">
                    {role.title}
                  </h3>

                  {/* Short Summary Description with consistent height across rows */}
                  <p className="text-sm text-gray-700 font-normal leading-relaxed mb-4 italic min-h-[72px] sm:min-h-[80px]">
                    {role.description}
                  </p>

                  {/* Expanded Breakdown (Synchronized across all cards) */}
                  {isExpandedAll && (
                    <div className="pt-4 border-t border-gray-100 space-y-4 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-xs uppercase font-bold text-gray-900 tracking-wider mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1.5">
                          {role.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 leading-snug"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase font-bold text-gray-900 tracking-wider mb-1.5">
                          Tools &amp; Technologies:
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed min-h-[36px]">
                          {role.tools}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions - Aligned at same bottom baseline */}
                <div className="mt-auto pt-6 flex flex-col gap-3">
                  {/* View More / View Less Link (Synchronized) */}
                  <button
                    type="button"
                    onClick={toggleExpandAll}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 underline cursor-pointer self-start transition-colors"
                  >
                    <span>{isExpandedAll ? "View less" : "View more"}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpandedAll ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Apply Now Button */}
                  <button
                    type="button"
                    onClick={() => onApply(role.title)}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-md shadow-blue-500/25 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
