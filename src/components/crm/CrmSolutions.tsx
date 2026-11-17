"use client";

import React from "react";
import { Scissors, Dumbbell, Stethoscope, CheckCircle2, ArrowUpRight } from "lucide-react";

interface CrmSolutionsProps {
  onContactClick?: (solutionName: string) => void;
}

export default function CrmSolutions({ onContactClick }: CrmSolutionsProps) {
  const solutions = [
    {
      category: "Salon Management Software",
      title: "All-in-One Salon Management System",
      icon: Scissors,
      description:
        "Manage your salon operations with an easy-to-use CRM designed for modern beauty and wellness businesses. Manage appointments, customers, staff schedules, services, billing, memberships, and customer engagement from one centralized platform.",
      benefits: [
        "Appointment management",
        "Customer management",
        "Staff scheduling",
        "Service management",
        "Membership management",
        "Billing and payments",
        "Customer follow-ups",
        "Business reports",
      ],
    },
    {
      category: "Gym Management Software",
      title: "Smart Fitness Business Management",
      icon: Dumbbell,
      description:
        "Simplify your gym and fitness center operations with CRM software designed to help you manage members, trainers, schedules, payments, attendance, and customer relationships. Get a centralized view of your fitness business and spend less time managing administrative tasks.",
      benefits: [
        "Member management",
        "Membership plans",
        "Trainer management",
        "Attendance tracking",
        "Payment management",
        "Renewal reminders",
        "Customer follow-ups",
        "Business performance insights",
      ],
    },
    {
      category: "Clinic Management Software",
      title: "Complete Digital Clinic Solution",
      icon: Stethoscope,
      description:
        "Manage your clinic's everyday operations with a secure and user-friendly digital platform designed for modern healthcare practices. Organize appointments, patient information, billing, follow-ups, and other administrative activities from one centralized system.",
      benefits: [
        "Appointment management",
        "Patient/customer records",
        "Follow-up management",
        "Billing and payments",
        "Staff management",
        "Schedule management",
        "Digital records",
        "Business reports",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="reveal-on-scroll text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
            <span>Product Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 max-w-4xl mx-auto [text-wrap:balance]">
            Business Management Software Built for Your Industry
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed [text-wrap:balance] italic">
            Every business has different workflows and customer management requirements. Our industry-focused CRM solutions provide the tools you need to manage everyday operations from one centralized platform.
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="stagger-container grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="stagger-item interactive-card bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-gray-200/90 shadow-sm flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  {/* Top Icon and Category Pill */}
                  <div className="flex flex-col items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-tight">
                      {item.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Benefits Header */}
                  <div className="text-base font-bold text-gray-900 mb-3">
                    Key Benefits:
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-2.5 mb-8">
                    {item.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2.5 text-sm sm:text-base text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 stroke-[2.2]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Talk to Our Team CTA */}
                <button
                  type="button"
                  onClick={() => onContactClick?.(item.title)}
                  className="w-full py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Talk to Our Team</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

