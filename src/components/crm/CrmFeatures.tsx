"use client";

import React from "react";
import {
  Users,
  Calendar,
  CreditCard,
  UserCog,
  Receipt,
  BarChart3,
  CheckSquare,
  Bell,
} from "lucide-react";

export default function CrmFeatures() {
  const features = [
    {
      title: "Customer Management",
      description:
        "Keep customer information organized and easily accessible so your team can manage relationships more effectively.",
      icon: Users,
    },
    {
      title: "Appointment Management",
      description:
        "Simplify bookings, schedules, appointments, and follow-ups from one centralized system.",
      icon: Calendar,
    },
    {
      title: "Membership Management",
      description:
        "Manage memberships, plans, renewals, and customer activity with greater visibility.",
      icon: CreditCard,
    },
    {
      title: "Staff Management",
      description:
        "Organize staff schedules, assignments, services, and day-to-day operational activities.",
      icon: UserCog,
    },
    {
      title: "Payments & Billing",
      description:
        "Manage payments, billing information, and transactions as part of your daily business workflow.",
      icon: Receipt,
    },
    {
      title: "Reports & Insights",
      description:
        "Access useful business information to understand operations, customer activity, and performance.",
      icon: BarChart3,
    },
    {
      title: "Attendance Management",
      description:
        "Track member attendance effortlessly with easy check-ins, attendance history, and accurate records.",
      icon: CheckSquare,
    },
    {
      title: "Notifications & Follow-Ups",
      description:
        "Stay connected with customers through reminders, follow-ups, and important business notifications.",
      icon: Bell,
    },
  ];

  return (
    <section className="w-full bg-[#f4f7ff] py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6 hover:scale-[1.02] transition-transform">
            <span>Everything You Need to Manage Your Business</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 max-w-4xl mx-auto [text-wrap:balance]">
            One Platform. Multiple Business Operations.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
            Duhzine&apos;s CRM solutions bring essential business operations together in one easy-to-use platform, helping teams reduce manual work and manage customer relationships more effectively.
          </p>
        </div>

        {/* 8 Feature Cards (2 rows of 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-black/15 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-blue-600 flex items-center justify-center mb-5 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

