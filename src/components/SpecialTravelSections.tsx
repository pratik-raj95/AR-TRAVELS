"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, HeartHandshake, Mountain } from "lucide-react";
import { createWhatsAppUrl } from "@/data/travelData";

export default function SpecialTravelSections() {
  const umrahWhatsApp = createWhatsAppUrl(
    "Assalamu Alaikum AR Travels, I would like to seek guidance regarding Umrah travel assistance, visa support, and hotel arrangements."
  );

  const intlWhatsApp = createWhatsAppUrl(
    "Hello AR Travels, I would like to enquire about planning an international journey. Please let me know how we can discuss destinations and options."
  );

  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Panel A: Umrah Assistance */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#101B2D] via-[#101B2D]/95 to-[#1A2B47] text-white border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#C5A059] text-xs font-bold uppercase tracking-wider border border-[#C5A059]/30">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Spiritual Pilgrimage Assistance</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
                A meaningful journey deserves thoughtful planning.
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
                Get personal guidance for your Umrah travel requirements, including visa, hotel and transport coordination.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href={umrahWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#C5A059] hover:bg-[#B38D46] text-[#101B2D] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire About Umrah</span>
                </a>
              </div>

              <p className="text-xs text-slate-400">
                Coordination and facilitation services provided in accordance with official Saudi visa and travel protocols.
              </p>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[350px]">
              <Image
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80"
                alt="Umrah pilgrimage spiritual atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#101B2D] via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* 2-Column Split: Panel B (International) & Panel C (Domestic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Panel B: International Travel */}
          <div className="relative rounded-3xl overflow-hidden bg-[#101B2D] text-white border border-slate-200/20 shadow-xl flex flex-col justify-between group">
            <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80"
                alt="International Skyline"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B2D] via-[#101B2D]/50 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#101B2D]/85 backdrop-blur-md text-[#22C7B8] border border-white/10">
                  Global Destinations
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">
                Your next international journey begins with a conversation.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Tell us your destination, travel dates and preferences to discuss international travel options.
              </p>

              <div className="pt-2">
                <a
                  href={intlWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1769AA] hover:bg-[#125387] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Explore International Travel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Panel C: Domestic Holidays */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white border border-slate-200/20 shadow-xl flex flex-col justify-between group">
            <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
                alt="Domestic Incredible India Island and Nature"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#101B2D]/85 backdrop-blur-md text-[#22C7B8] border border-white/10">
                  Incredible India
                </span>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">
                Discover more of India.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Explore mountain escapes, spiritual destinations, heritage cities and beautiful island experiences.
              </p>

              <div className="pt-2">
                <button
                  onClick={scrollToPackages}
                  className="inline-flex items-center gap-2 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Mountain className="w-4 h-4" />
                  <span>Explore Domestic Packages</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
