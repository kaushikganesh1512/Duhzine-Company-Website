"use client";

import React, { useState } from "react";
import { ArrowDown, Check, CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    company: "",
    phone: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(["CRM Software"]);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    "CRM Software",
    "Web Development",
    "Brand Strategy",
    "Digital Marketing",
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== sdc(srv)));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const sdc = (s: string) => s;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageLines = [
      `*New Project Inquiry - Duhzine IT Solutions*`,
      `---------------------------------`,
      `*Client Name:* ${formData.name}`,
      `*Company / Organization:* ${formData.company || "Not provided"}`,
      `*Phone Number:* ${formData.phone || "Not provided"}`,
      `*Estimated Budget:* ${formData.budget || "Not specified"}`,
      `*Services Needed:* ${selectedServices.join(", ") || "General Inquiry"}`,
      `*Message / Project Details:* ${formData.message || "None provided"}`,
      `---------------------------------`,
      `_Sent from Duhzine Contact Page_`,
    ];

    const message = messageLines.join("\n");
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919841483195?text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact-form-section" className="w-full bg-[#f4f7ff] py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="reveal-on-scroll text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4 [text-wrap:balance]">
            Tell Us About Your Project
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed [text-wrap:balance] italic">
            Whether you need a website, custom software, mobile application, CRM solution, e-commerce platform, or digital marketing service, tell us what you want to build.
          </p>
        </div>

        {/* Form Container */}
        <div className="reveal-scale interactive-card bg-white rounded-3xl p-7 sm:p-10 md:p-14 border border-gray-200/90 shadow-xl max-w-4xl mx-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center gap-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-900">
                Thank you for reaching out!
              </h3>
              <p className="text-base text-gray-600 max-w-md">
                We have received your project details and forwarded them directly to our technical consultants on WhatsApp at <span className="font-semibold text-emerald-600">+91 98414 83195</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                <a
                  href={`https://wa.me/919841483195?text=${encodeURIComponent(
                    [
                      `*New Project Inquiry - Duhzine IT Solutions*`,
                      `---------------------------------`,
                      `*Client Name:* ${formData.name}`,
                      `*Company / Organization:* ${formData.company || "Not provided"}`,
                      `*Phone Number:* ${formData.phone || "Not provided"}`,
                      `*Estimated Budget:* ${formData.budget || "Not specified"}`,
                      `*Services Needed:* ${selectedServices.join(", ") || "General Inquiry"}`,
                      `*Message / Project Details:* ${formData.message || "None provided"}`,
                      `---------------------------------`,
                      `_Sent from Duhzine Contact Page_`,
                    ].join("\n")
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", budget: "", company: "", phone: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
              {/* Row 1: Name & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm placeholder-gray-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Budget
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. 1Lakh"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company <span className="text-gray-400 font-normal">(If any)</span>
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Company XYZ"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm placeholder-gray-400 bg-white"
                />
              </div>

              {/* Row 3: Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <div className="flex rounded-lg shadow-sm border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                  <div className="px-3.5 py-2.5 bg-gray-50 border-r border-gray-200 flex items-center gap-2 text-sm font-medium text-gray-700 select-none">
                    <span className="text-base">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="00000 00000"
                    className="flex-1 px-4 py-2.5 focus:outline-none text-gray-900 text-sm placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              {/* Row 4: Services Checkboxes */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Choose the services that best fits your need.
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {availableServices.map((service) => {
                    const isChecked = selectedServices.includes(service);
                    return (
                      <label
                        key={service}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                          isChecked
                            ? "border-blue-600 bg-blue-50/40 text-blue-900 font-semibold"
                            : "border-gray-200 hover:border-gray-300 text-gray-700 font-medium"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleService(service)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-sm">{service}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Additional Message */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Additional Message
                  </label>
                  <span className="text-xs text-gray-400">
                    {formData.message.length}/240
                  </span>
                </div>
                <textarea
                  maxLength={240}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type a message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-sm placeholder-gray-400 bg-white resize-none"
                />
              </div>

              {/* Row 6: Submit Button & Disclaimer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="interactive-btn inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/25 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>Submit</span>
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </button>

                <p className="text-xs text-gray-500 font-normal leading-relaxed">
                  By submitting this form, you agree to be contacted by Duhzine via email or phone and acknowledge our Privacy Policy.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

