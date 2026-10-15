"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Clock,
  Tag,
  MessageCircle,
  Phone,
  Info,
} from "lucide-react";
import { PackageItem, BUSINESS_INFO, createWhatsAppUrl } from "@/data/travelData";

interface PackageDetailsModalProps {
  pkg: PackageItem | null;
  onClose: () => void;
}

export default function PackageDetailsModal({ pkg, onClose }: PackageDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (pkg) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pkg, onClose]);

  if (!pkg) return null;

  const whatsappMessage = `Hello AR Travels, I am reviewing the "${pkg.title}" package (${pkg.duration}) priced at ${pkg.offerPrice} per person. I would like to discuss day-wise itinerary, inclusions, departure dates, and availability.`;
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-slate-200 flex flex-col animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full flex-shrink-0 bg-slate-100">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#101B2D]/90 backdrop-blur-md text-[#22C7B8] border border-white/10">
              {pkg.destination}
            </span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-[#101B2D]">
              {pkg.category}
            </span>
          </div>

          {/* Bottom Title & Route */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#22C7B8]" />
              <span>Route: {pkg.route}</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
              {pkg.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div>
              <span className="text-[11px] font-semibold text-slate-600 block uppercase">Duration</span>
              <div className="flex items-center gap-1.5 text-sm font-bold text-[#101B2D] mt-0.5">
                <Clock className="w-4 h-4 text-[#1769AA]" />
                <span>{pkg.duration}</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-600 block uppercase">Destination</span>
              <div className="flex items-center gap-1.5 text-sm font-bold text-[#101B2D] mt-0.5">
                <MapPin className="w-4 h-4 text-[#1769AA]" />
                <span>{pkg.destination}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] font-semibold text-slate-600 block uppercase">Offer Price</span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-lg font-bold text-[#101B2D]">{pkg.offerPrice}</span>
                <span className="text-xs text-slate-600 line-through">{pkg.regularPrice}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Package Overview
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {pkg.description}
            </p>
          </div>

          {/* Highlight Callout */}
          {pkg.highlight && (
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-start gap-3">
              <Tag className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-900 block">Featured Experience</span>
                <p className="text-xs text-amber-800 mt-0.5">{pkg.highlight}</p>
              </div>
            </div>
          )}

          {/* Transparent Travel Notice (Mandatory Requirement) */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#101B2D]">
              <Info className="w-4 h-4 text-[#1769AA]" />
              <span>Transparent Quotation & Itinerary Policy</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Detailed inclusions, exclusions, day-wise itineraries, available departure dates, and preferred hotel tiers are confirmed directly by the AR Travels team upon enquiry to match your custom dates, group size, and seasonal requirements.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-sm py-3.5 px-6 rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Discuss This Package on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone1Raw}`}
              className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-[#101B2D] font-semibold text-sm py-3.5 px-6 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1769AA]" />
              <span>Call Team</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
