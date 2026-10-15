"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/data/travelData";

interface DestinationsSectionProps {
  onSelectDestination: (destName: string) => void;
}

export default function DestinationsSection({ onSelectDestination }: DestinationsSectionProps) {
  const handleDestinationClick = (destName: string) => {
    onSelectDestination(destName);
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="destinations" className="py-24 bg-[#101B2D] text-white relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#1769AA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#22C7B8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#22C7B8] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#22C7B8]" />
              <span>Iconic Regions & Circuits</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Where will your next <br className="hidden sm:block" />
              story take you?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              From snow-kissed Himalayan passes to serene coastal sanctuaries and revered spiritual shrines.
            </p>
          </div>

          <button
            onClick={() => handleDestinationClick("All")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C7B8] hover:text-white transition-colors group cursor-pointer self-start md:self-end pb-1 border-b border-[#22C7B8]/30 hover:border-white"
          >
            <span>Explore All Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {DESTINATIONS.map((dest, idx) => {
            // Asymmetric layout span classes for editorial variety
            // idx 0 (Goa): col-span-4
            // idx 1 (Kashmir - featured): col-span-8
            // idx 2 (Himachal): col-span-4
            // idx 3 (Uttarakhand): col-span-4
            // idx 4 (Gujarat): col-span-4
            // idx 5 (Madhya Pradesh): col-span-4
            // idx 6 (Uttar Pradesh): col-span-4
            // idx 7 (Andaman): col-span-4
            let colSpan = "lg:col-span-4";
            if (idx === 1) colSpan = "lg:col-span-8"; // Kashmir featured wide
            if (idx === 7) colSpan = "lg:col-span-4";

            return (
              <div
                key={dest.name}
                onClick={() => handleDestinationClick(dest.name)}
                className={`group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-[#22C7B8]/60 ${colSpan}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleDestinationClick(dest.name);
                  }
                }}
              >
                {/* Background Destination Photo */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B2D] via-[#101B2D]/40 to-black/20 group-hover:via-[#101B2D]/55 transition-colors duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#101B2D]/75 backdrop-blur-md text-[#22C7B8] border border-white/10">
                    {dest.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-[#22C7B8]" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#22C7B8]" />
                    <span>From {dest.startingPrice}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[#22C7B8] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-300/90 line-clamp-1 mt-1 font-normal">
                    {dest.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
