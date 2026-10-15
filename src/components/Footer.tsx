"use client";

import React, { useState } from "react";
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ArrowUp,
  X,
  AlertCircle,
} from "lucide-react";
import { BUSINESS_INFO, createWhatsAppUrl } from "@/data/travelData";

type PolicyType = "privacy" | "terms" | "refunds" | null;

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappFooterUrl = createWhatsAppUrl(
    "Hello AR Travels, I am contacting you through your website footer regarding travel enquiries."
  );

  return (
    <>
      <footer id="contact" className="bg-[#0B1320] text-slate-300 pt-20 pb-28 md:pb-16 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
            
            {/* Col 1: Brand & Tagline (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1769AA] to-[#22C7B8] flex items-center justify-center text-white shadow-md">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-tight">
                    AR Travels
                  </h3>
                  <p className="text-xs text-[#22C7B8] font-medium tracking-wider uppercase">
                    Your Journey, Our Responsibility.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
                Dedicated travel consultancy based in Ahmedabad, providing personalized assistance for flights, hotel stays, train coordination, Umrah journeys, and tailored holiday packages.
              </p>

              <div className="pt-2">
                <a
                  href={whatsappFooterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-xs px-4 py-2.5 rounded-full transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#hero" className="hover:text-[#22C7B8] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-[#22C7B8] transition-colors">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#22C7B8] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-[#22C7B8] transition-colors">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#trip-planner" className="hover:text-[#22C7B8] transition-colors">
                    Plan Your Trip
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Travel Services (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Bookings & Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href={createWhatsAppUrl("Hello AR Travels, I need assistance with Flight Booking.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#22C7B8] transition-colors"
                  >
                    Flight Booking Assistance
                  </a>
                </li>
                <li>
                  <a
                    href={createWhatsAppUrl("Hello AR Travels, I need assistance with Hotel Booking.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#22C7B8] transition-colors"
                  >
                    Hotels & Resorts Booking
                  </a>
                </li>
                <li>
                  <a
                    href={createWhatsAppUrl("Hello AR Travels, I need assistance with Train Ticket Booking.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#22C7B8] transition-colors"
                  >
                    Train Ticket Assistance
                  </a>
                </li>
                <li>
                  <a
                    href={createWhatsAppUrl("Assalamu Alaikum AR Travels, I need assistance with Umrah Coordination.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#22C7B8] transition-colors"
                  >
                    Umrah Pilgrimage Assistance
                  </a>
                </li>
                <li>
                  <a href="#packages" className="hover:text-[#22C7B8] transition-colors">
                    Domestic Circuit Tours
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Verified Contact Info (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Contact AR Travels
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#22C7B8] flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${BUSINESS_INFO.phone1Raw}`}
                      className="text-white hover:text-[#22C7B8] font-semibold transition-colors block"
                    >
                      {BUSINESS_INFO.phone1}
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phone2Raw}`}
                      className="text-xs text-slate-400 hover:text-white transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phone2} (Secondary)
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#22C7B8] flex-shrink-0" />
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-slate-300 hover:text-white transition-colors text-xs"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </li>

                <li className="flex items-start gap-2.5 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-[#22C7B8] flex-shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.location}</span>
                </li>

                <li className="flex items-center gap-2.5 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-[#22C7B8] flex-shrink-0" />
                  <span>{BUSINESS_INFO.hours}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Policies */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © {currentYear} <strong>AR Travels</strong>. All rights reserved. &bull; Concept Redesign & Demo
            </div>

            {/* Policy Modals Trigger Links */}
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <button
                onClick={() => setActivePolicy("privacy")}
                className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>&bull;</span>
              <button
                onClick={() => setActivePolicy("terms")}
                className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Terms & Conditions
              </button>
              <span>&bull;</span>
              <button
                onClick={() => setActivePolicy("refunds")}
                className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Cancellation & Refunds
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>

      {/* Honest Policy Placeholder Modal */}
      {activePolicy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setActivePolicy(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Policy Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Notice: Client Demonstration Placeholder</span>
              </div>

              {activePolicy === "privacy" && (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#101B2D]">Privacy Policy</h3>
                  <p className="text-xs text-slate-500 italic">
                    Note: The exact legal privacy terms are subject to final review and approval by AR Travels management.
                  </p>
                  <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                    <p>
                      AR Travels values your privacy. When you enquire about travel packages, flights, hotels, or Umrah assistance, your supplied contact details (such as name, phone number, and travel preferences) are utilized exclusively for preparing quotations and coordinating travel reservations.
                    </p>
                    <p>
                      We do not sell, rent, or lease your personal information to third-party marketing brokers. Communication takes place directly between the customer and our travel team via WhatsApp, phone, or email.
                    </p>
                  </div>
                </>
              )}

              {activePolicy === "terms" && (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#101B2D]">Terms & Conditions</h3>
                  <p className="text-xs text-slate-500 italic">
                    Note: Final binding terms are subject to formal confirmation by AR Travels upon booking.
                  </p>
                  <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                    <p>
                      1. <strong>Quotations & Inclusions:</strong> Package prices, flight fares, and hotel tariffs are dynamic and subject to live inventory availability at the time of final booking confirmation.
                    </p>
                    <p>
                      2. <strong>Regulatory Compliance:</strong> Visa guidelines, railway ticketing rules (IRCTC), and airline carriage protocols are governed strictly by respective governmental and carrier authorities.
                    </p>
                    <p>
                      3. <strong>Identity Documents:</strong> Travellers are responsible for maintaining valid government identity cards (such as Aadhaar, Passport) as required during journey execution.
                    </p>
                  </div>
                </>
              )}

              {activePolicy === "refunds" && (
                <>
                  <h3 className="font-serif text-2xl font-bold text-[#101B2D]">Cancellation & Refunds</h3>
                  <p className="text-xs text-slate-500 italic">
                    Note: Official cancellation slabs are governed by individual airline, hotel, and railway partner policies.
                  </p>
                  <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                    <p>
                      1. Flight and train ticket cancellations are governed directly by the respective airline and railway carrier cancellation slabs and processing charges.
                    </p>
                    <p>
                      2. Hotel and tour package cancellations depend on supplier cut-off times and will be explicitly detailed on your formal booking receipt prior to payment confirmation.
                    </p>
                    <p>
                      3. For cancellation requests or emergency adjustments, please contact AR Travels directly via WhatsApp at +91 88660 22341.
                    </p>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActivePolicy(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#101B2D] text-white text-xs font-semibold hover:bg-[#1769AA] transition-colors"
                >
                  Understood & Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
