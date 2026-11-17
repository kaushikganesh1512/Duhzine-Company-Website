"use client";

import React from "react";

interface CtaSectionProps {
  onStartProject?: () => void;
  onBookCall?: () => void;
}

export default function CtaSection({}: CtaSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f4f7ff] relative overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        {/* Custom Quote / Callback Block */}
        <div className="relative rounded-2xl bg-[#05070f] p-8 sm:p-12 text-white overflow-hidden border border-neutral-800 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Ambient blue glows */}
          <div className="absolute -top-24 -left-20 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl sm:text-[30px] font-semibold text-white tracking-tight leading-snug mb-3 [text-wrap:balance]">
              Need a custom quotation or have questions?
            </h2>
            <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed font-normal [text-wrap:balance]">
              Not sure which package fits your requirements? Talk to our web design
              experts directly and get a quick custom quote.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 shrink-0">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919841483195"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-[205px] sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-medium text-xs sm:text-sm whitespace-nowrap transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* WhatsApp Icon */}
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.906.531 3.687 1.453 5.219L2 22l4.906-1.422c1.469.844 3.172 1.344 5.125 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.688 0-3.266-.469-4.609-1.281l-.328-.188-3.047.891.891-2.969-.219-.344C3.844 14.984 3.375 13.562 3.375 12c0-4.766 3.891-8.625 8.656-8.625 4.766 0 8.625 3.859 8.625 8.625 0 4.781-3.859 8.625-8.625 8.625zm4.734-6.453c-.266-.125-1.547-.766-1.781-.844-.25-.094-.438-.141-.625.141-.188.266-.719.891-.875 1.078-.172.188-.328.203-.594.078-.266-.125-1.125-.422-2.141-1.328-.797-.703-1.328-1.578-1.484-1.844-.156-.266-.016-.406.109-.547.125-.109.266-.281.391-.422.141-.141.188-.25.281-.422.094-.172.047-.328-.016-.453-.078-.141-.625-1.516-.859-2.078-.219-.547-.453-.469-.625-.469-.156 0-.344-.016-.531-.016-.188 0-.5.078-.766.359-.266.281-1.016.984-1.016 2.406 0 1.422 1.047 2.797 1.188 2.984.156.203 2.062 3.141 5 4.406.703.297 1.25.484 1.688.625.719.219 1.375.188 1.891.109.578-.078 1.766-.719 2.016-1.422.25-.688.25-1.281.172-1.406-.062-.141-.25-.219-.516-.344z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            {/* Call Us Button */}
            <a
              href="tel:+919841483195"
              className="inline-flex items-center justify-center gap-2.5 w-[205px] sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm whitespace-nowrap transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Phone Icon */}
              <svg
                className="w-5 h-5 fill-none stroke-currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Us: 98414 83195</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
