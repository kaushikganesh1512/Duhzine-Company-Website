"use client";

import React, { useState, useEffect } from "react";
import DuhzineLogo from "./DuhzineLogo";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Services", href: "#services", active: false },
    { name: "Portfolio", href: "#portfolio", active: false },
    { name: "Blogs", href: "#blogs", active: false },
    { name: "Contact", href: "#contact", active: false },
    { name: "About", href: "#about", active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 pt-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#05070f]/95 shadow-xl shadow-black/20 backdrop-blur-md border border-slate-800/80"
            : "bg-[#05070f] border border-slate-800"
        } px-5 md:px-8 py-2.5 flex items-center justify-between`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center">
          <DuhzineLogo theme="dark" showTagline={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.active
                  ? "text-[#2563eb] font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onBookCall}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs md:text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-md shadow-blue-500/20 hover:scale-[1.03] active:scale-[0.98]"
          >
            Book a call
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onBookCall}
            className="bg-[#2563eb] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            Book a call
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-1.5 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-[#070b14]/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-1.5 px-3 rounded-lg font-medium transition-colors ${
                  link.active
                    ? "text-[#2563eb] bg-blue-950/40 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookCall();
                }}
                className="w-full py-2.5 bg-[#2563eb] text-white rounded-full text-xs font-semibold text-center"
              >
                Book a call
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

