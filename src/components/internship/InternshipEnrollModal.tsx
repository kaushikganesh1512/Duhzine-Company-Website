"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

interface InternshipEnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
}

export default function InternshipEnrollModal({
  isOpen,
  onClose,
  programTitle,
}: InternshipEnrollModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Registration Successful!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mb-6 leading-relaxed">
              Thank you for enrolling in{" "}
              <span className="font-semibold text-blue-600">{programTitle || "Internship"}</span>.
              Our HR &amp; onboarding team will email your welcome kit and payment verification receipt within 2 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Direct Enrollment
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Enroll in {programTitle || "Internship Program"}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Complete your details to secure your slot for the upcoming batch.
            </p>

            {/* Fee summary pill */}
            <div className="my-5 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Internship Fee</span>
                <span className="text-base font-extrabold text-blue-600">₹1,000 / month</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-emerald-600 font-semibold block flex items-center gap-1 justify-end">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Duhzine Certification
                </span>
                <span className="text-[11px] text-slate-500">Live Client Project Included</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kaushik Ganesh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  College / Institution Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SRM University / Anna University"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Proceed to Pay ₹1,000</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  🔒 Safe &amp; Encrypted UPI, Cards, NetBanking payment gateway
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

