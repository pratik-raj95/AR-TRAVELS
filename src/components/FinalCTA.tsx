"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { BUSINESS_INFO, createWhatsAppUrl } from "@/data/travelData";

export default function FinalCTA() {
  const whatsappUrl = createWhatsAppUrl(
    "Hello AR Travels, I am ready to plan my trip. Let's get started!"
  );

  return (
    <section className="relative py-28 sm:py-36 bg-[#101B2D] overflow-hidden text-white text-center">
      
      {/* Cinematic Destination Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85"
          alt="Scenic travel background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#101B2D]/88 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101B2D] via-transparent to-[#101B2D]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Subtle Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#22C7B8] text-xs font-semibold uppercase tracking-wider border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Adventure</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Some journeys begin with a simple hello.
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-xl mx-auto font-normal leading-relaxed">
          Tell AR Travels where you want to go, and let&apos;s start planning.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#22C7B8]/30 hover:shadow-2xl hover:shadow-[#22C7B8]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Start a WhatsApp Enquiry</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone1Raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/25 hover:border-white/40 backdrop-blur-md transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-[#22C7B8]" />
            <span>Call AR Travels: +91 88660 22341</span>
          </a>
        </div>

        {/* Contact note */}
        <p className="text-xs text-slate-400 pt-2">
          Ahmedabad, Gujarat • Mon - Sat: 9:00 AM - 9:00 PM • Fast WhatsApp responses
        </p>

      </div>
    </section>
  );
}
