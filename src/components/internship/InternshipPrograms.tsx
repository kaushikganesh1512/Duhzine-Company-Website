"use client";

import React from "react";
import { PenTool, Megaphone, Code2, Check, ArrowUpRight } from "lucide-react";

interface InternshipProgramsProps {
  onPayNow: (programTitle: string) => void;
  onTalkToTeam: (programTitle: string) => void;
}

export default function InternshipPrograms({
  onPayNow,
  onTalkToTeam,
}: InternshipProgramsProps) {
  const programs = [
    {
      title: "UI/UX Designer Intern",
      icon: PenTool,
      description:
        "Learn to create visually appealing, user-friendly and responsive digital experiences. Gain hands-on experience in designing websites and applications while working on real-time projects using industry-standard design tools.",
      highlights: [
        "UI/UX design principles",
        "Wireframing and prototyping",
        "Figma and design tools",
        "Responsive web and app design",
        "Industry Mentorship",
        "Real-time client projects",
        "Portfolio development",
        "Internship Completion Certificate",
        "Letter Of Recommendation",
      ],
      fee: "₹1,000 / month",
    },
    {
      title: "Digital Marketing Intern",
      icon: Megaphone,
      description:
        "Explore the world of digital marketing by working on real campaigns and business projects. Develop practical skills in SEO, social media marketing, content creation and online brand promotion to build a strong foundation for your marketing career.",
      highlights: [
        "Search engine optimization (SEO)",
        "Social media management",
        "Content creation and marketing",
        "Google Ads and campaign basics",
        "Industry Mentorship",
        "Lead generation strategies",
        "Real-time marketing projects",
        "Internship Completion Certificate",
        "Letter Of Recommendation",
      ],
      fee: "₹1,000 / month",
    },
    {
      title: "Full Stack Developer Intern",
      icon: Code2,
      description:
        "Build your technical expertise by developing modern, responsive and dynamic web applications. Gain hands-on experience in frontend and backend development, database management and deployment to real-time software projects..",
      highlights: [
        "HTML, CSS and JavaScript",
        "React.js and Frontend",
        "Node.js and Backend",
        "Database management",
        "API integration, Git Control",
        "Industry Mentorship",
        "Real-time application developed",
        "Internship Completion Certificate",
        "Letter Of Recommendation",
      ],
      fee: "₹1,000 / month",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f8faff] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-4 hover:scale-[1.02] transition-transform">
            <span>Our Internship Programs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-snug [text-wrap:balance]">
            Build Your Skills. Gain Real-World Experience. Shape Your Future.
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-gray-700 font-normal leading-relaxed max-w-3xl [text-wrap:balance] italic">
            Kickstart your career with industry-focused internship programs at Duhzine IT
            Solutions. Work on real-time projects, gain practical experience, learn from industry
            professionals and develop the skills needed to succeed in your chosen field.
          </p>
        </div>

        {/* 3 Program Cards Grid */}
        <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const IconComponent = program.icon;
            return (
              <div
                key={idx}
                className="stagger-item interactive-card bg-white rounded-2xl p-7 lg:p-8 border border-neutral-100 shadow-[0_2px_10px_rgba(16,24,40,0.06)] hover:shadow-[0_20px_40px_-6px_rgba(37,99,235,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Top Domain Icon */}
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-blue-600 mb-5">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Domain Title Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-xl bg-blue-600 text-white text-sm font-medium mb-5 shadow-xs">
                    <span>{program.title}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal mb-6 min-h-[72px]">
                    {program.description}
                  </p>

                  {/* Highlights Subheading */}
                  <h4 className="text-sm font-bold text-neutral-900 tracking-tight mb-4">
                    Internship Highlights:
                  </h4>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 mb-8">
                    {program.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs sm:text-sm text-neutral-600">
                        <div className="w-4 h-4 rounded-sm border border-blue-600 flex items-center justify-center mr-2.5 mt-0.5 shrink-0 bg-blue-50/40">
                          <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Fee & CTAs */}
                <div className="pt-6 border-t border-neutral-100">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm font-bold text-neutral-900">Internship Fee :</span>
                    <span className="text-sm font-semibold text-neutral-700">{program.fee}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://razorpay.me/@duhzineitsolutionsprivatelimi"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onPayNow?.(program.title)}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>Pay Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => onTalkToTeam(program.title)}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-900 font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <span>Talk to Our Team</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

