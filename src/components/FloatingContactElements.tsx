"use client";

import React, { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS_INFO, createWhatsAppUrl } from "@/data/travelData";

export default function FloatingContactElements() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello AR Travels, I would like to enquire about holiday packages and travel assistance."
  );

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Hidden on Mobile) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <div className="relative group">
          
          {/* Tooltip Pill */}
          <div
            className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#101B2D] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-white/10 transition-all duration-200 pointer-events-none ${
              tooltipVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Chat with AR Travels</span>
            </div>
            {/* Arrow */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-4 border-transparent border-l-[#101B2D]" />
          </div>

          {/* Floating WhatsApp Action Button */}
          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with AR Travels on WhatsApp"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            className="w-14 h-14 rounded-full bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] flex items-center justify-center shadow-2xl shadow-[#22C7B8]/40 hover:shadow-[#22C7B8]/60 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#22C7B8]/30"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
          </a>
        </div>
      </div>

      {/* Mobile Bottom Fixed Action Bar (Visible only on Mobile, md:hidden) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#101B2D]/95 backdrop-blur-md border-t border-white/15 px-4 py-2.5 shadow-2xl safe-area-pb">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          
          {/* Call Now Button */}
          <a
            href={`tel:${BUSINESS_INFO.phone1Raw}`}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-3 px-3 rounded-xl border border-white/15 active:scale-98 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#22C7B8]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-xs py-3 px-3 rounded-xl shadow-md active:scale-98 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

        </div>
      </div>
    </>
  );
}
