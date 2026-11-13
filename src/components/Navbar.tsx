"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const [activeNavigation, setActiveNavigation] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "#about" },
  ];

  return (
    <div className="w-full flex justify-center pt-0 px-0 bg-[#f4f7ff] relative z-40">
      {/* Primary Navigation Header Container (1040px wide on desktop as per Figma) */}
      <header
        className="relative w-full max-w-[1040px] h-[65px] bg-black flex items-center justify-between px-4 sm:px-6 z-30"
        aria-label="Primary navigation"
      >
        {/* Duhzine Logo */}
        <a href="#home" className="flex items-center select-none py-1">
          <Image
            src="/images/header_logo.png"
            alt="Duhzine agency logo"
            width={148}
            height={47}
            className="h-[46px] w-auto object-contain"
            priority
          />
        </a>

        {/* Main Desktop Navigation Items */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationItems.map((item) => {
            const isActive = activeNavigation === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNavigation(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm lg:text-base font-bold leading-[16.8px] tracking-[-0.28px] transition-colors ${
                  isActive ? "text-blue-600" : "text-[#fefefe] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Book a Call Button (Exact Figma styling: rounded-md border border-[#787878] bg-blue-600) */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={onBookCall}
            className="box-border flex h-[35px] items-center justify-center rounded-md border border-solid border-[#787878] bg-blue-600 px-[13px] py-[9px] hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            aria-label="Book a call"
          >
            <span className="text-sm font-bold leading-[16.8px] tracking-[-0.28px] text-white whitespace-nowrap">
              Book a call
            </span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onBookCall}
            className="h-[32px] px-3 rounded-md bg-blue-600 text-white text-xs font-bold"
          >
            Book a call
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-[65px] left-0 right-0 bg-black/95 backdrop-blur-md border-b border-slate-800 p-5 z-40 text-white">
          <nav className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveNavigation(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm py-1.5 font-bold ${
                  activeNavigation === item.label ? "text-blue-500" : "text-slate-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
