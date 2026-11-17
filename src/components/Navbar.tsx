"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

export default function Navbar({ onBookCall }: NavbarProps) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isServicesPage = pathname === "/services";
  const isCrmPage = pathname === "/crm";
  const isPortfolioPage = pathname === "/portfolio";
  const isContactPage = pathname === "/contact";
  const isInternshipPage = pathname === "/internship";
  const isFullTimePage = pathname === "/careers" || pathname === "/careers/full-time";
  const isCareersPage = isInternshipPage || isFullTimePage;

  const activeNavigation = (() => {
    if (isAboutPage) return "About";
    if (isServicesPage) return "Services";
    if (isCrmPage) return "CRM";
    if (isPortfolioPage) return "Portfolio";
    if (isContactPage) return "Contact";
    if (isCareersPage) return "Careers";
    return "Home";
  })();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterCareers = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setCareersDropdownOpen(true);
  };

  const handleMouseLeaveCareers = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setCareersDropdownOpen(false);
    }, 180);
  };

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "CRM", href: "/crm" },
    {
      label: "Careers",
      href: "/careers",
      isDropdown: true,
      children: [
        { label: "Full time", href: "/careers" },
        { label: "Internship", href: "/internship" },
      ],
    },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`w-full bg-black sticky top-0 z-50 transition-all duration-300 border-b border-neutral-900 ${
        scrolled ? "shadow-lg shadow-black/50 bg-black/95 backdrop-blur-md" : ""
      }`}
      aria-label="Primary navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-[64px] flex items-center justify-between">
        {/* Duhzine Brand Logo (White with Blue dot on Black Navbar) */}
        <Link href="/" className="flex items-center select-none py-1 group">
          <Image
            src="/images/duhzine_logo_v3.png"
            alt="Duhzine IT Solutions"
            width={140}
            height={42}
            className="h-[34px] md:h-[38px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
            quality={100}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationItems.map((item) => {
            const isActive = activeNavigation === item.label;

            if (item.isDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative py-1 group"
                  onMouseEnter={handleMouseEnterCareers}
                  onMouseLeave={handleMouseLeaveCareers}
                >
                  <button
                    type="button"
                    onClick={() => setCareersDropdownOpen((prev) => !prev)}
                    aria-expanded={careersDropdownOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center text-sm md:text-base font-medium font-['Figtree',sans-serif] leading-4 transition-colors relative py-1 focus:outline-none cursor-pointer ${
                      isActive || isCareersPage
                        ? "text-blue-500 font-semibold"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    <span>{item.label}</span>
                    {(isActive || isCareersPage) && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Menu - appears on hover */}
                  <div
                    className={`absolute top-full left-0 pt-2 w-36 z-50 transition-all duration-150 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 ${
                      careersDropdownOpen ? "block" : "hidden group-hover:block"
                    }`}
                    role="menu"
                  >
                    <div className="bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl py-1.5 px-1">
                      <Link
                        href="/careers"
                        onClick={() => {
                          setCareersDropdownOpen(false);
                        }}
                        className={`block px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isFullTimePage
                            ? "text-blue-400 bg-blue-950/60 font-semibold"
                            : "text-neutral-300 hover:text-white hover:bg-neutral-900"
                        }`}
                        role="menuitem"
                      >
                        Full time
                      </Link>

                      <Link
                        href="/internship"
                        onClick={() => {
                          setCareersDropdownOpen(false);
                        }}
                        className={`block px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isInternshipPage
                            ? "text-blue-400 bg-blue-950/60 font-semibold"
                            : "text-neutral-300 hover:text-white hover:bg-neutral-900"
                        }`}
                        role="menuitem"
                      >
                        Internship
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm md:text-base font-medium font-['Figtree',sans-serif] leading-4 transition-colors relative py-1 ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-white hover:text-blue-400"
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
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium font-['Figtree',sans-serif] leading-4 transition-colors shadow-xs cursor-pointer active:scale-[0.98]"
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
        <div className="md:hidden bg-neutral-950 border-b border-neutral-900 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileCareersOpen((prev) => !prev)}
                      className={`w-full flex items-center justify-between text-base font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                        activeNavigation === item.label || isCareersPage
                          ? "text-blue-400 bg-blue-950/50 font-semibold"
                          : "text-neutral-200 hover:text-white hover:bg-neutral-900"
                      }`}
                      aria-expanded={mobileCareersOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileCareersOpen ? "rotate-180 text-blue-400" : "text-neutral-400"
                        }`}
                      />
                    </button>

                    {mobileCareersOpen && (
                      <div className="pl-6 pt-1 pb-1 flex flex-col space-y-1">
                        <Link
                          href="/careers"
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                          className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                            isFullTimePage
                              ? "text-blue-400 bg-blue-950/60 font-semibold"
                              : "text-neutral-300 hover:text-white hover:bg-neutral-900"
                          }`}
                        >
                          Full time
                        </Link>
                        <Link
                          href="/internship"
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                          className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                            isInternshipPage
                              ? "text-blue-400 bg-blue-950/50 font-semibold"
                              : "text-neutral-300 hover:text-white hover:bg-neutral-900"
                          }`}
                        >
                          Internship
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    activeNavigation === item.label
                      ? "text-blue-400 bg-blue-950/50 font-semibold"
                      : "text-neutral-200 hover:text-white hover:bg-neutral-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm text-center shadow-xs transition-colors"
            >
              Book a call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
