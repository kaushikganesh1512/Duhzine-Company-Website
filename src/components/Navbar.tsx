"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const isServicesPage = pathname === "/services";
  const isCrmPage = pathname === "/crm";
  const isPortfolioPage = pathname === "/portfolio";
  const isContactPage = pathname === "/contact";
  const isInternshipPage = pathname === "/internship";

  const getInitialNav = () => {
    if (isAboutPage) return "About";
    if (isServicesPage) return "Services";
    if (isCrmPage) return "CRM";
    if (isPortfolioPage) return "Portfolio";
    if (isContactPage) return "Contact";
    if (isInternshipPage) return "Careers";
    return "Home";
  };

  const [activeNavigation, setActiveNavigation] = useState(getInitialNav);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(true);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAboutPage) {
      setActiveNavigation("About");
    } else if (isServicesPage) {
      setActiveNavigation("Services");
    } else if (isCrmPage) {
      setActiveNavigation("CRM");
    } else if (isPortfolioPage) {
      setActiveNavigation("Portfolio");
    } else if (isContactPage) {
      setActiveNavigation("Contact");
    } else if (isInternshipPage) {
      setActiveNavigation("Careers");
    } else {
      setActiveNavigation("Home");
    }
  }, [isAboutPage, isServicesPage, isCrmPage, isPortfolioPage, isContactPage, isInternshipPage]);

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
      href: "/internship",
      isDropdown: true,
      children: [
        { label: "Full time", href: "#" },
        { label: "Internship", href: "/internship" },
      ],
    },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 border-b border-neutral-200/80 ${
        scrolled ? "shadow-md shadow-neutral-900/5 backdrop-blur-md bg-white/95" : ""
      }`}
      aria-label="Primary navigation"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-[68px] flex items-center justify-between">
        {/* Duhzine Brand Logo from Image 2 */}
        <Link href="/" className="flex items-center select-none py-1 group">
          <Image
            src="/images/logo_dark.png"
            alt="Duhzine IT Solutions"
            width={140}
            height={42}
            className="h-[36px] md:h-[40px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
            quality={100}
          />
        </Link>

        {/* Desktop Navigation Links - Styled exactly per Image 1 and Figma snippet */}
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
                  {/* Careers as a normal word without drop down icon */}
                  <button
                    type="button"
                    onClick={() => setCareersDropdownOpen((prev) => !prev)}
                    aria-expanded={careersDropdownOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center text-sm font-medium font-['Figtree',sans-serif] leading-4 transition-colors relative py-1 focus:outline-none cursor-pointer ${
                      isActive || isInternshipPage
                        ? "text-blue-600 font-semibold"
                        : "text-black hover:text-blue-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    {(isActive || isInternshipPage) && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Menu - appears automatically on hover */}
                  <div
                    className={`absolute top-full left-0 pt-2 w-36 z-50 transition-all duration-150 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 ${
                      careersDropdownOpen ? "block" : "hidden group-hover:block"
                    }`}
                    role="menu"
                  >
                    <div className="bg-white border border-neutral-200 rounded-xl shadow-xl py-1.5 px-1">
                      {/* Full time - stays on same page */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setCareersDropdownOpen(false);
                        }}
                        className="w-full text-left block px-3.5 py-2 text-sm font-medium text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                        role="menuitem"
                      >
                        Full time
                      </button>

                      <Link
                        href="/internship"
                        onClick={() => {
                          setActiveNavigation("Careers");
                          setCareersDropdownOpen(false);
                        }}
                        className={`block px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isInternshipPage
                            ? "text-blue-600 bg-blue-50 font-semibold"
                            : "text-neutral-700 hover:text-black hover:bg-neutral-100"
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
                onClick={() => setActiveNavigation(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium font-['Figtree',sans-serif] leading-4 transition-colors relative py-1 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-black hover:text-blue-600"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button - Styled per Image 1 & Figma: bg-blue-600 rounded-md */}
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
            className="p-2 rounded-lg text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileCareersOpen((prev) => !prev)}
                      className={`flex items-center justify-between text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                        activeNavigation === item.label || isInternshipPage
                          ? "text-blue-600 bg-blue-50 font-semibold"
                          : "text-neutral-800 hover:text-black hover:bg-neutral-100"
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>

                    {mobileCareersOpen && (
                      <div className="pl-6 pt-1 pb-1 flex flex-col space-y-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left text-sm font-medium py-2 px-3 rounded-md text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
                        >
                          Full time
                        </button>
                        <Link
                          href="/internship"
                          onClick={() => {
                            setActiveNavigation("Careers");
                            setMobileMenuOpen(false);
                          }}
                          className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                            isInternshipPage
                              ? "text-blue-600 bg-blue-50 font-semibold"
                              : "text-neutral-700 hover:text-black hover:bg-neutral-100"
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
                    setActiveNavigation(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    activeNavigation === item.label
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-neutral-800 hover:text-black hover:bg-neutral-100"
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
