"use client";

import React, { useState, useMemo } from "react";
import { Search, Globe, MessageCircle, RotateCcw, Compass } from "lucide-react";
import { PACKAGES, PackageItem, createWhatsAppUrl } from "@/data/travelData";
import PackageCard from "./PackageCard";

interface PackagesSectionProps {
  onViewDetails: (pkg: PackageItem) => void;
  selectedDestination: string;
  onSelectDestination: (dest: string) => void;
}

export default function PackagesSection({
  onViewDetails,
  selectedDestination,
  onSelectDestination,
}: PackagesSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Domestic" | "International">("All");

  // Filtering logic
  const filteredPackages = useMemo(() => {
    if (activeCategory === "International") {
      return [];
    }

    return PACKAGES.filter((pkg) => {
      // Destination filter from outside or inside
      const matchesDest =
        selectedDestination === "All" ||
        pkg.destination.toLowerCase() === selectedDestination.toLowerCase();

      // Search query filter (destination, title, route, highlight)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pkg.title.toLowerCase().includes(q) ||
        pkg.destination.toLowerCase().includes(q) ||
        pkg.route.toLowerCase().includes(q) ||
        (pkg.highlight && pkg.highlight.toLowerCase().includes(q));

      // Category filter
      const matchesCategory =
        activeCategory === "All" || pkg.category === activeCategory;

      return matchesDest && matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, selectedDestination]);

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    onSelectDestination("All");
  };

  const internationalWhatsAppUrl = createWhatsAppUrl(
    "Hello AR Travels, I am interested in exploring international travel options. I would like to consult with your team regarding destinations, flight coordination, and package options."
  );

  return (
    <section id="packages" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1769AA]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#22C7B8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#1769AA]" />
            <span>Curated Circuits</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#101B2D] tracking-tight leading-tight">
            Find your kind of getaway.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Thoughtfully selected journeys for spiritual escapes, mountain adventures, beach holidays and memorable family trips.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-md shadow-slate-200/40 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Category Tabs: All, Domestic, International */}
          <div className="flex items-center p-1 bg-slate-100 rounded-2xl w-full md:w-auto">
            {(["All", "Domestic", "International"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab
                    ? "bg-[#101B2D] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#101B2D]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, tour, route..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-[#101B2D] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40 focus:border-[#1769AA] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 p-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Active Filter Pill indicator if destination selected */}
          {selectedDestination !== "All" && (
            <div className="flex items-center gap-2 text-xs font-medium text-[#101B2D] bg-[#22C7B8]/15 px-3 py-1.5 rounded-xl border border-[#22C7B8]/30">
              <span>Filter: <strong>{selectedDestination}</strong></span>
              <button
                onClick={() => onSelectDestination("All")}
                className="text-slate-500 hover:text-black font-bold ml-1"
                title="Reset destination filter"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* International Tab View (Honest, bespoke consultation without fabricating data) */}
        {activeCategory === "International" ? (
          <div className="bg-gradient-to-br from-[#101B2D] to-[#1A2B47] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md text-[#22C7B8] flex items-center justify-center mx-auto shadow-inner">
              <Globe className="w-8 h-8" />
            </div>

            <div className="max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                Custom International Travel Planning
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                AR Travels coordinates bespoke international journeys tailored strictly to your schedule, flight preferences, visa requirements, and destination wishes. Rather than generic pre-set tours, every international trip is curated with personal guidance.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={internationalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enquire About International Travel</span>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Speak directly with our team on WhatsApp for Dubai, Saudi Arabia, Southeast Asia, Europe, and beyond.
            </p>
          </div>
        ) : (
          <>
            {/* Packages Grid */}
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {filteredPackages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            ) : (
              /* Empty Search State */
              <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80 max-w-lg mx-auto shadow-sm">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#101B2D] mb-2">
                  No matching packages found
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  We could not find packages matching &ldquo;{searchQuery || selectedDestination}&rdquo;. Try clearing your search filters or ask us directly on WhatsApp.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 bg-[#101B2D] hover:bg-[#1769AA] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}
