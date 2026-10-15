"use client";

import React from "react";
import { Plane, Building2, Train, Compass, ArrowRight, MessageCircle, Shield } from "lucide-react";
import { QUICK_SERVICES, createWhatsAppUrl } from "@/data/travelData";

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Train: <Train className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
};

export default function QuickServices() {
  return (
    <section id="services" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1769AA]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22C7B8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1769AA]/10 text-[#1769AA] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Essential Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#101B2D] tracking-tight leading-tight">
            Travel made simpler.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Everything you need for your next journey, with personal assistance at every step.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {QUICK_SERVICES.map((service, index) => {
            const whatsappUrl = createWhatsAppUrl(service.prefill);

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#101B2D]/5 hover:border-[#22C7B8]/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-7 right-7 text-xs font-semibold text-slate-300 font-mono">
                  0{index + 1}
                </div>

                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#101B2D] text-[#22C7B8] flex items-center justify-center mb-6 group-hover:bg-[#1769AA] group-hover:text-white transition-colors duration-300 shadow-md">
                    {iconMap[service.icon]}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl font-bold text-[#101B2D] mb-1 group-hover:text-[#1769AA] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1769AA] mb-3">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Honest disclaimer if applicable */}
                  {service.disclaimer && (
                    <div className="flex items-start gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 mb-4">
                      <Shield className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{service.disclaimer}</span>
                    </div>
                  )}
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-4 border-t border-slate-100 mt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#101B2D] group-hover:text-[#1769AA] py-2 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-[#22C7B8] fill-current" />
                      {service.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1769AA] group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
