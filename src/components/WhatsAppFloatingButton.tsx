"use client";

import React from "react";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "919841483195";
  const defaultText = encodeURIComponent(
    "Hi Duhzine Team, I am interested in your services and would like to discuss my project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Duhzine on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none -z-10" />

        {/* WhatsApp Icon SVG */}
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.3-.776.978-.951 1.178-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.784-1.674-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.35.451-.526.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.633-.927-2.235-.244-.587-.492-.507-.677-.516-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.375-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.078 2.908 1.229 3.109.15.2 2.121 3.238 5.138 4.54 2.146.927 2.973.914 4.027.757.72-.108 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.95.56 3.77 1.54 5.31L2 22l4.82-1.52c1.48.88 3.2 1.39 5.22 1.39 5.53 0 10.02-4.49 10.02-10.02C22.06 6.49 17.57 2 12.04 2zm0 18.33c-1.75 0-3.37-.5-4.75-1.37l-.34-.22-2.87.9 1.02-2.79-.24-.37c-.98-1.53-1.5-3.32-1.5-5.18 0-4.6 3.74-8.34 8.34-8.34 4.6 0 8.34 3.74 8.34 8.34 0 4.6-3.74 8.34-8.34 8.34z" />
        </svg>
      </a>

      {/* Floating Tooltip on Hover */}
      <div className="hidden sm:block absolute left-16 ml-2 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp
      </div>
    </div>
  );
}

