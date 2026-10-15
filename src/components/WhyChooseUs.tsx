"use client";

import React from "react";
import { WHY_CHOOSE_US } from "@/data/travelData";
import { ShieldCheck, UserCheck, FileText, MessageSquareQuote } from "lucide-react";

const icons = [
  <ShieldCheck key="1" className="w-6 h-6 text-[#22C7B8]" />,
  <UserCheck key="2" className="w-6 h-6 text-[#22C7B8]" />,
  <FileText key="3" className="w-6 h-6 text-[#22C7B8]" />,
  <MessageSquareQuote key="4" className="w-6 h-6 text-[#22C7B8]" />,
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#101B2D] text-white relative overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1769AA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#22C7B8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#22C7B8] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <span>Our Approach</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            More than a booking. <br />
            A better travel experience.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We focus on genuine hospitality, prompt communication, and well-organized travel logistics.
          </p>
        </div>

        {/* 4 Benefit Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.num}
              className="group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[#22C7B8]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Number and Icon Header */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl font-bold text-[#C5A059] tracking-wider">
                    {item.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[index]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#22C7B8] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="w-8 h-1 bg-[#22C7B8]/40 group-hover:w-full group-hover:bg-[#22C7B8] transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
