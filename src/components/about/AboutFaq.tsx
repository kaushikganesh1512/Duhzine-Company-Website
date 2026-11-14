"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "1. What services does Duhzine IT Solutions offer in Chennai?",
      a: "Duhzine IT Solutions provides custom website development, UI/UX design, mobile applications (iOS & Android), digital marketing (SEO, Google Ads, SMM), e-commerce development, and customized technology solutions for growing businesses.",
    },
    {
      q: "2. Why choose Duhzine for website development?",
      a: "We deliver modern, mobile-responsive, lightning-fast, and SEO-optimized websites built with scalable technologies. Our customer-centric approach guarantees transparent communication, on-time delivery, and ongoing technical support.",
    },
    {
      q: "3. Does Duhzine offer mobile app development?",
      a: "Yes! We design and develop cross-platform and native mobile applications with intuitive UI/UX, robust security, high performance, and seamless backend API integrations for both iOS and Android.",
    },
    {
      q: "4. Can Duhzine improve my online visibility?",
      a: "Absolutely. Our expert digital marketing team creates tailored growth strategies including search engine optimization (SEO), high-ROI Google Ads campaigns, targeted social media marketing, and conversion rate optimization to drive qualified leads.",
    },
    {
      q: "5. Does Duhzine provide UI/UX design services?",
      a: "Yes, our dedicated design team crafts intuitive user experiences, interactive prototypes, design systems, and modern pixel-perfect interfaces in Figma focused on maximum user engagement and usability.",
    },
    {
      q: "6. Can Duhzine develop e-commerce websites?",
      a: "Yes, we build secure, scalable e-commerce platforms using Shopify, WooCommerce, and custom headless tech stacks with integrated payment gateways, inventory management, and smooth checkout flows.",
    },
    {
      q: "7. Does Duhzine offer custom CRM software?",
      a: "Yes, we engineer bespoke CRM and enterprise workflow systems including industry-specific solutions like Salon OS, Gym OS, and Clinic OS to automate client management, billing, and scheduling.",
    },
    {
      q: "8. How does Duhzine help startups and small businesses?",
      a: "We offer end-to-end guidance from initial concept to rapid MVP launch, cost-effective digital marketing, and agile development to help startups scale quickly and sustainably within budget.",
    },
    {
      q: "9. Where is Duhzine located?",
      a: "Our registered office is located at OMR, Navalur, Chennai - 600130, Tamil Nadu, India. We serve clients across Chennai, India, and internationally.",
    },
    {
      q: "10. How can I contact Duhzine?",
      a: "You can reach us directly via phone at +91 98414 83195 or 9566123876, chat with our experts on WhatsApp, or email us at info@duhzineitsolutions.com. We are available 24/7 for project enquiries.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f4f7ff] py-16 md:py-24">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-blue-500/20 mb-6">
            <span>FAQs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services and digital solutions
          </p>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden transition-all duration-200 hover:border-blue-400"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium text-gray-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-sm sm:text-base text-gray-600 font-normal leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
