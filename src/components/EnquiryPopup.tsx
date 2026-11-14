"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { X, ArrowRight } from "lucide-react";

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDiscussProject: () => void;
}

const emptySubscribe = () => () => {};

export default function EnquiryPopup({
  isOpen,
  onClose,
  onDiscussProject,
}: EnquiryPopupProps) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-[2px] transition-all duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
      onClick={(e) => {
        // Close if clicking outside the modal card
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Modal Card - Appears gracefully above the home page */}
      <div className="relative w-full max-w-[430px] bg-gradient-to-br from-[#0c1222] via-[#090f20] to-[#040713] rounded-[24px] p-6 sm:p-7 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.12)] shadow-[0px_25px_60px_0px_rgba(0,0,0,0.65)] overflow-hidden text-left animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Top-Right Warm Orange/Amber Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-orange-500/35 via-amber-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Ambient Deep Blue Underglow */}
        <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button (Top Right) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer z-20 group"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 transition-transform group-hover:scale-110" />
        </button>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-300 shadow-sm mb-4 sm:mb-5">
            <span className="text-emerald-950 text-xs font-bold tracking-tight">
              Chennai’s Best Software Development Company
            </span>
          </div>

          {/* Heading */}
          <h2
            id="enquiry-popup-title"
            className="text-white text-xl sm:text-[22px] font-bold tracking-tight leading-snug mb-3"
          >
            Your Website Starts With an Enquiry!!!
          </h2>

          {/* Description */}
          <p className="text-white/75 text-sm font-normal leading-relaxed mb-6 sm:mb-7">
            Whether you need a business website, e-commerce store, or a custom
            web solution, we’re here to turn your ideas into a powerful online
            presence..
          </p>

          {/* CTA Button with warm orange underglow shadow matching the design */}
          <div className="w-full relative mb-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                onDiscussProject();
              }}
              className="w-full h-13 sm:h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-200 shadow-[0px_12px_24px_0px_rgba(255,106,43,0.35)] shadow-[inset_0px_-3px_0px_0px_rgba(0,0,0,0.18)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.40)] flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.01] active:scale-[0.99] group"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="w-full text-center">
            <p className="text-white/40 text-xs font-light tracking-wide">
              Duhzine IT Solutions Pvt Ltd. 24hrs Available!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
