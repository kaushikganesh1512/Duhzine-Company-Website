"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

export default function ContactOffice() {
  const directionsUrl =
    "https://www.google.com/maps/dir//Duhzine+IT+Solutions+Private+Limited,+Gks+Complex,+Navalur,+Tamil+Nadu+600130/@12.8647168,80.2208208,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525b91275de61b:0xf821d17ca667095a!2m2!1d80.2270656!2d12.8434055";

  return (
    <section className="w-full bg-[#f4f7ff] py-14 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Our Office in Chennai
          </h2>

          <p className="text-base sm:text-lg text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed">
            Duhzine IT Solutions is based in Navalur, Chennai, Tamil Nadu, India. Visit or contact our team to discuss your software, website, mobile app, CRM, or digital marketing requirements.
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full max-w-5xl mx-auto h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/90 relative bg-white group">
          <iframe
            title="Duhzine IT Solutions Office Location"
            src="https://maps.google.com/maps?q=12.8434055,80.2270656&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-[1.1]"
          />

          {/* Floating Location Card */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-2.5 z-10 transition-transform group-hover:scale-[1.02]">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Duhzine IT Solutions Pvt Ltd</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-snug">
              Gks Complex, OMR, Navalur, Chennai, Tamil Nadu 600130, India
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 underline mt-1"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
