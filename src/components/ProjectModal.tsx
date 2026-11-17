"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Rocket, ArrowRight, Code2, Smartphone, BarChart3, Database, MessageCircle } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Website Development");
  const [budget, setBudget] = useState("₹1L - ₹3L ($1.5k - $4k)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  if (!isOpen) return null;

  const services = [
    { name: "Website Development", icon: Code2 },
    { name: "Mobile App", icon: Smartphone },
    { name: "Custom Software", icon: Database },
    { name: "Digital Marketing", icon: BarChart3 },
  ];

  const budgets = [
    "< ₹1 Lakh ($1.2k)",
    "₹1L - ₹3L ($1.5k - $4k)",
    "₹3L - ₹10L ($4k - $12k)",
    "₹10L+ ($12k+)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageLines = [
      `*New Project Inquiry - Duhzine IT Solutions*`,
      `---------------------------------`,
      `*Project Type:* ${selectedService}`,
      `*Estimated Budget Range:* ${budget}`,
      `*Client Name:* ${formData.name}`,
      `*Email Address:* ${formData.email}`,
      `*Phone Number:* ${formData.phone || "Not provided"}`,
      `*Project Scope / Vision:* ${formData.description || "None provided"}`,
      `---------------------------------`,
      `_Sent from Duhzine Project Inquiry Portal_`,
    ];

    const message = messageLines.join("\n");
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919841483195?text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#070b14] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Start Your Project</h3>
              <p className="text-xs text-slate-300">
                Tell us about your requirements to get an estimate within 24 hours.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Project Inquiry Received!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                Thanks, <span className="font-semibold text-slate-900">{formData.name}</span>. Your project specifications have been forwarded to our technical team via WhatsApp at <span className="font-semibold text-emerald-600">+91 98414 83195</span>.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919841483195?text=${encodeURIComponent(
                    [
                      `*New Project Inquiry - Duhzine IT Solutions*`,
                      `---------------------------------`,
                      `*Project Type:* ${selectedService}`,
                      `*Estimated Budget Range:* ${budget}`,
                      `*Client Name:* ${formData.name}`,
                      `*Email Address:* ${formData.email}`,
                      `*Phone Number:* ${formData.phone || "Not provided"}`,
                      `*Project Scope / Vision:* ${formData.description || "None provided"}`,
                      `---------------------------------`,
                      `_Sent from Duhzine Project Inquiry Portal_`,
                    ].join("\n")
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold transition-all shadow-md shadow-emerald-500/20 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-semibold transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  What kind of project do you need?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {services.map((svc) => {
                    const Icon = svc.icon;
                    const isSel = selectedService === svc.name;
                    return (
                      <button
                        type="button"
                        key={svc.name}
                        onClick={() => setSelectedService(svc.name)}
                        className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                          isSel
                            ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSel ? "text-blue-600" : "text-slate-500"}`} />
                        <span className="text-xs font-semibold">{svc.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Select Budget */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Estimated Budget Range
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium text-center transition-all ${
                        budget === b
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Kaushik Ganesh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98414 83195"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Describe what you want to achieve
                </label>
                <textarea
                  rows={3}
                  placeholder="E.g., We need a modern, responsive website with online booking, fast page loads, and CRM integration..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white text-slate-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Submit Project Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

