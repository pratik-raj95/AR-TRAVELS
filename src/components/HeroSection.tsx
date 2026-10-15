"use client";

import React from "react";
import Image from "next/image";
import {
  Compass,
  ArrowDown,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { PACKAGES } from "@/data/travelData";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Featured highlight package: Manali or Kashmir
  const featuredPackage = PACKAGES[1]; // Kashmir package

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#101B2D]">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic coastal travel landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-subtle-zoom"
        />
        {/* Multi-layered cinematic gradient overlays for pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101B2D] via-[#101B2D]/75 to-[#101B2D]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101B2D]/90 via-[#101B2D]/60 to-transparent" />
      </div>

      {/* Decorative Light Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1769AA]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#22C7B8]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#22C7B8] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#22C7B8] animate-ping" />
              <span>YOUR NEXT JOURNEY STARTS HERE</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Your Journey, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0F2FE] to-[#22C7B8]">
                Our Responsibility.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl font-normal leading-relaxed">
              Flights, hotels, train tickets, Umrah assistance and thoughtfully planned holiday packages — with personal support from enquiry to journey.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo("packages")}
                className="group inline-flex items-center justify-center gap-3 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-base px-7 py-4 rounded-full shadow-lg shadow-[#22C7B8]/30 hover:shadow-xl hover:shadow-[#22C7B8]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Packages</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("trip-planner")}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-4 rounded-full border border-white/25 hover:border-white/40 backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <Compass className="w-5 h-5 text-[#22C7B8]" />
                <span>Plan Your Trip</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                <div className="w-6 h-6 rounded-full bg-[#22C7B8]/20 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-3.5 h-3.5 text-[#22C7B8]" />
                </div>
                <span className="font-medium">Personal Assistance</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                <div className="w-6 h-6 rounded-full bg-[#22C7B8]/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C7B8]" />
                </div>
                <span className="font-medium">Clear Quotations</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                <div className="w-6 h-6 rounded-full bg-[#22C7B8]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22C7B8]" />
                </div>
                <span className="font-medium">WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Destination Card (Desktop only & tablet) */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="relative max-w-md mx-auto lg:ml-auto">
              
              {/* Main Floating Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 p-5 shadow-2xl shadow-black/40 group hover:border-white/40 transition-all duration-300">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={featuredPackage.image}
                    alt={featuredPackage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#101B2D]/85 backdrop-blur-md text-[#22C7B8] text-xs font-bold px-3 py-1 rounded-full border border-white/15">
                    Featured Circuit
                  </div>

                  {/* Route & Price in image overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#22C7B8]" />
                      <span>{featuredPackage.route}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold leading-snug line-clamp-1">
                      {featuredPackage.destination}: {featuredPackage.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-xs text-slate-400 block">Offer Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">{featuredPackage.offerPrice}</span>
                      <span className="text-xs text-slate-400 line-through">{featuredPackage.regularPrice}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollTo("packages")}
                    className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-[#22C7B8] hover:text-[#101B2D] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    <span>View Tour</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Mini Experience Pill */}
              <div className="absolute -bottom-6 -left-6 bg-[#101B2D]/90 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1769AA] to-[#22C7B8] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">8 Handcrafted Circuits</div>
                  <div className="text-[11px] text-[#22C7B8]">Verified authentic pricing</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-slate-300 font-medium">Scroll</span>
        <button
          onClick={() => scrollTo("services")}
          aria-label="Scroll to services"
          className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 transition-colors animate-bounce"
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#22C7B8]" />
        </button>
      </div>
    </section>
  );
}
