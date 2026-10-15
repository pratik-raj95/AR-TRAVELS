"use client";

import React from "react";
import Image from "next/image";
import { Clock, MapPin, MessageCircle, Eye, Tag } from "lucide-react";
import { PackageItem, createWhatsAppUrl } from "@/data/travelData";

interface PackageCardProps {
  pkg: PackageItem;
  onViewDetails: (pkg: PackageItem) => void;
}

export default function PackageCard({ pkg, onViewDetails }: PackageCardProps) {
  // WhatsApp booking prefilled message
  const bookingMessage = `Hello AR Travels, I would like to enquire about the "${pkg.title}" package (${pkg.duration}, Route: ${pkg.route}) listed at ${pkg.offerPrice} per person. Please share further details, availability, and quotation.`;
  const whatsappUrl = createWhatsAppUrl(bookingMessage);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-[#101B2D]/8 hover:border-[#1769AA]/40 transition-all duration-300 flex flex-col justify-between">
      
      {/* Card Header & Image */}
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-slate-100">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#101B2D]/85 backdrop-blur-md text-[#22C7B8] border border-white/10 shadow-sm">
              {pkg.destination}
            </span>
            {pkg.badge && (
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#101B2D] shadow-sm">
                {pkg.badge}
              </span>
            )}
          </div>

          {/* Duration in bottom of image */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-[#22C7B8]" />
            <span>{pkg.duration}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Route */}
          <div className="flex items-start gap-1.5 text-xs text-[#1769AA] font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-1">{pkg.route}</span>
          </div>

          {/* Package Title */}
          <h3 className="font-serif text-lg font-bold text-[#101B2D] group-hover:text-[#1769AA] transition-colors leading-snug line-clamp-2 mb-3 min-h-[3rem]">
            {pkg.title}
          </h3>

          {/* Short factual description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {pkg.description}
          </p>

          {/* Highlight tag if any */}
          {pkg.highlight && (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md mb-4">
              <Tag className="w-3 h-3 text-emerald-600" />
              <span>Highlight: {pkg.highlight}</span>
            </div>
          )}
        </div>
      </div>

      {/* Pricing & Actions Footer */}
      <div className="px-6 pb-6 pt-3 border-t border-slate-100/90 bg-slate-50/50">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-medium">
              Offer Price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#101B2D] tracking-tight">
                {pkg.offerPrice}
              </span>
              <span className="text-xs text-slate-600 line-through">
                {pkg.regularPrice}
              </span>
            </div>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {pkg.priceUnit}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onViewDetails(pkg)}
            className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-[#101B2D] hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>View Details</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] shadow-sm shadow-[#22C7B8]/20 transition-all hover:shadow-md cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
