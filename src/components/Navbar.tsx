"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Compass, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO, createWhatsAppUrl } from "@/data/travelData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Packages", href: "#packages" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Plan Trip", href: "#trip-planner" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappNavUrl = createWhatsAppUrl(
    "Hello AR Travels, I am visiting your website and would like to enquire about your travel packages and services."
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#101B2D]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-white/10"
            : "bg-gradient-to-b from-[#101B2D]/80 via-[#101B2D]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Wordmark */}
            <Link
              href="#hero"
              onClick={(e) => handleNavLinkClick(e, "#hero")}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C7B8] rounded-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1769AA] to-[#22C7B8] flex items-center justify-center text-white shadow-md shadow-[#22C7B8]/20 group-hover:scale-105 transition-transform duration-200">
                <Compass className="w-5 h-5 text-white animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#22C7B8] transition-colors">
                  AR Travels
                </span>
                <span className="text-[10px] tracking-widest text-[#22C7B8] uppercase font-medium -mt-1 hidden sm:block">
                  Your Journey, Our Responsibility
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="px-3.5 py-1.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C7B8]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone1Raw}`}
                className="flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-full border border-white/15 hover:border-white/30 transition-colors"
                title="Call AR Travels"
              >
                <Phone className="w-3.5 h-3.5 text-[#22C7B8]" />
                <span>+91 88660 22341</span>
              </a>

              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-semibold text-sm px-4 py-2 rounded-full shadow-md shadow-[#22C7B8]/25 hover:shadow-lg hover:shadow-[#22C7B8]/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 text-[#101B2D] fill-current" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Enquiry"
                className="p-2 rounded-full bg-[#22C7B8] text-[#101B2D] shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C7B8]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#101B2D] text-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out border-l border-white/10 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1769AA] to-[#22C7B8] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white leading-none">AR Travels</h3>
                  <span className="text-[10px] text-[#22C7B8] tracking-wider uppercase font-medium">
                    Ahmedabad, India
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-white/90 hover:text-[#22C7B8] hover:bg-white/5 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone1Raw}`}
              className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm py-3 px-4 rounded-xl font-medium transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#22C7B8]" />
              <span>Call: +91 88660 22341</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-xs text-white/50">{BUSINESS_INFO.location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
