"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const [activeNavigation, setActiveNavigation] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`w-full bg-black sticky top-0 z-50 transition-all duration-300 border-b border-neutral-800/80 ${
        scrolled ? "shadow-xl shadow-black/30 backdrop-blur-md" : ""
      }`}
      aria-label="Primary navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-[68px] flex items-center justify-between">
        {/* Duhzine Brand Logo (Left aligned with equal padding) */}
        <a href="#home" className="flex items-center select-none py-1 group">
          <Image
            src="/images/header_logo.png"
            alt="Duhzine agency logo"
            width={154}
            height={48}
            className="h-[44px] md:h-[48px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </a>

        {/* Desktop Navigation Links (Center aligned with equal spacing) */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navigationItems.map((item) => {
            const isActive = activeNavigation === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNavigation(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm lg:text-[15px] font-bold tracking-[-0.25px] transition-all relative py-1 ${
                  isActive
                    ? "text-blue-500 font-extrabold"
                    : "text-neutral-200 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Book a Call Button (Right aligned with equal padding) */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={onBookCall}
            className="box-border flex h-[38px] items-center justify-center rounded-md border border-[#787878] bg-blue-600 hover:bg-blue-700 px-4 py-2 transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Book a call"
          >
            <span className="text-sm font-bold text-white tracking-[-0.28px] whitespace-nowrap">
              Book a call
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2.5">
          <button
            type="button"
            onClick={onBookCall}
            className="h-[34px] px-3.5 rounded-md bg-blue-600 text-white text-xs font-bold"
          >
            Book a call
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden w-full bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveNavigation(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm py-1.5 font-bold transition-colors ${
                  activeNavigation === item.label ? "text-blue-500" : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
