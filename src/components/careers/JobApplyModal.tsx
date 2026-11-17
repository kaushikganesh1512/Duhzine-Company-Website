"use client";

import React, { useState } from "react";
import { X, CheckCircle2, User, Mail, Phone, Briefcase, Link2, Send } from "lucide-react";

interface JobApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function JobApplyModal({
  isOpen,
  onClose,
  jobTitle,
}: JobApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "3+ Years",
    portfolio: "",
    coverLetter: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageLines = [
      `*New Job Application - Duhzine IT Solutions*`,
      `---------------------------------`,
      `*Position:* ${jobTitle}`,
      `*Applicant Name:* ${formData.name}`,
      `*Email Address:* ${formData.email}`,
      `*Phone Number:* ${formData.phone}`,
      `*Experience Level:* ${formData.experience}`,
      `*Portfolio / Resume Link:* ${formData.portfolio}`,
      `*Message / Notes:* ${formData.coverLetter || "None"}`,
      `---------------------------------`,
      `_Sent from Duhzine Careers Portal_`,
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
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#070b14] p-6 text-white flex items-center justify-between relative">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-800/40">
              Careers at Duhzine
            </span>
            <h3 className="text-xl font-bold mt-2 text-white">Apply for {jobTitle}</h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Submit your application to join our fast-growing full-time team.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Your application for <span className="font-semibold text-blue-600">{jobTitle}</span> has been forwarded to our HR &amp; Hiring Team via WhatsApp at <span className="font-semibold text-emerald-600">+91 98414 83195</span>.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919841483195?text=${encodeURIComponent(
                    `*Job Application - Duhzine IT Solutions*\n---------------------------------\n*Position:* ${jobTitle}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Experience:* ${formData.experience}\n*Portfolio / Resume:* ${formData.portfolio}\n*Notes:* ${formData.coverLetter || "None"}\n---------------------------------\n_Sent from Duhzine Careers Portal_`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-semibold transition-all shadow-md shadow-emerald-500/20 inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Arvind Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="arvind@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="tel"
                      placeholder="+91 98414 83195"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Experience Level
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                    >
                      <option>Fresher / Graduate</option>
                      <option>1-2 Years Experience</option>
                      <option>2+ Years Experience</option>
                      <option>3+ Years Experience</option>
                      <option>4+ Years Experience</option>
                      <option>5+ Years Experience</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Resume / Portfolio / LinkedIn Link *
                </label>
                <div className="relative">
                  <Link2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    required
                    type="url"
                    placeholder="https://drive.google.com/... or linkedin.com/in/..."
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Why are you a good fit for this role? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a brief introduction or highlight of your relevant experience..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>Submit Application</span>
                  <span className="text-sm">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

