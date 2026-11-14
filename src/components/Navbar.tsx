"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  const [activeNavigation, setActiveNavigation] = useState(isAboutPage ? "About" : "Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isAboutPage) {
      setActiveNavigation("About");
    } else {
      setActiveNavigation("Home");
    }
  }, [isAboutPage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", href: isAboutPage ? "/" : "#home" },
    { label: "Services", href: isAboutPage ? "/#services" : "#services" },
    { label: "Portfolio", href: isAboutPage ? "/#portfolio" : "#portfolio" },
    { label: "Blogs", href: isAboutPage ? "/#blogs" : "#blogs" },
    { label: "Contact", href: isAboutPage ? "/#contact" : "#contact" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`w-full bg-black sticky top-0 z-50 transition-all duration-300 border-b border-neutral-800/80 ${
        scrolled ? "shadow-xl shadow-black/30 backdrop-blur-md" : ""
      }`}
      aria-label="Primary navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        {/* Duhzine Brand Logo */}
        <Link href="/" className="flex items-center select-none py-1 group">
          <Image
            src="/images/header_logo.png"
            alt="Duhzine agency logo"
            width={160}
            height={50}
            className="h-[46px] md:h-[50px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
            quality={100}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navigationItems.map((item) => {
            const isActive = activeNavigation === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveNavigation(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={`text-[15px] lg:text-base font-bold tracking-[-0.25px] transition-all relative py-1 ${
                  isActive
                    ? "text-blue-500 font-extrabold"
                    : "text-[#fefefe] hover:text-blue-400"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={onBookCall}
            className="px-5 py-2.5 rounded-lg border border-neutral-700 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-tight transition-all shadow-sm hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            aria-label="Book a call"
          >
            Book a call
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveNavigation(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                  activeNavigation === item.label
                    ? "text-blue-400 bg-blue-950/40"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm text-center shadow-md transition-colors"
            >
              Book a call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
