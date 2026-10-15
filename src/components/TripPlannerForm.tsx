"use client";

import React, { useState } from "react";
import { Send, Sparkles, CheckCircle2 } from "lucide-react";
import { DESTINATIONS, createWhatsAppUrl } from "@/data/travelData";

export default function TripPlannerForm() {
  const [formData, setFormData] = useState({
    destination: "Goa",
    customDestination: "",
    travelDate: "",
    travellers: "2",
    budget: "₹15,000 - ₹30,000 per person",
    hotelCategory: "3-Star Deluxe",
    cabRequired: "Yes",
    specialRequirements: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Today's date in YYYY-MM-DD for min attribute
  const todayStr = new Date().toISOString().split("T")[0];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.destination === "Other" && !formData.customDestination.trim()) {
      newErrors.customDestination = "Please specify your preferred destination";
    }
    if (!formData.travelDate) {
      newErrors.travelDate = "Please select an approximate departure date";
    }
    const travNum = parseInt(formData.travellers, 10);
    if (!formData.travellers || isNaN(travNum) || travNum < 1) {
      newErrors.travellers = "Please specify at least 1 traveller";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const finalDestination =
      formData.destination === "Other" ? formData.customDestination : formData.destination;

    const formattedMessage = `*New Trip Enquiry — AR Travels*
--------------------------------
• *Destination:* ${finalDestination}
• *Approx. Travel Date:* ${formData.travelDate}
• *Number of Travellers:* ${formData.travellers}
• *Budget Preference:* ${formData.budget}
• *Hotel Category:* ${formData.hotelCategory}
• *Cab / Transfer Required:* ${formData.cabRequired}
• *Special Requirements:* ${formData.specialRequirements.trim() || "None specified"}
--------------------------------
Hello AR Travels, please share suitable itineraries and a quotation for our journey.`;

    const url = createWhatsAppUrl(formattedMessage);
    setSubmitted(true);

    // Open WhatsApp
    const win = window.open(url, "_blank");
    if (!win) {
      window.location.href = url;
    }
  };

  return (
    <section id="trip-planner" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1769AA]/10 text-[#1769AA] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Custom Itinerary Builder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#101B2D] tracking-tight leading-tight">
            Your journey. Your way.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            Tell us a little about your plans, and our team will help you explore suitable options.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Destination Selection */}
            <div>
              <label htmlFor="destination" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Preferred Destination *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <select
                    id="destination"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-[#101B2D] focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40 focus:border-[#1769AA]"
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.name} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                    <option value="Other">Other / Custom Destination</option>
                  </select>
                </div>

                {formData.destination === "Other" && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter destination name..."
                      value={formData.customDestination}
                      onChange={(e) =>
                        setFormData({ ...formData, customDestination: e.target.value })
                      }
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm font-medium text-[#101B2D] focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40 ${
                        errors.customDestination ? "border-rose-400" : "border-slate-200"
                      }`}
                    />
                    {errors.customDestination && (
                      <p className="text-[11px] text-rose-500 mt-1 font-medium">
                        {errors.customDestination}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: Travel Date & Number of Travellers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="travelDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Approximate Travel Date *
                </label>
                <div className="relative">
                  <input
                    id="travelDate"
                    type="date"
                    min={todayStr}
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm font-medium text-[#101B2D] focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40 ${
                      errors.travelDate ? "border-rose-400" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.travelDate && (
                  <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.travelDate}</p>
                )}
              </div>

              <div>
                <label htmlFor="travellers" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Number of Travellers *
                </label>
                <div className="relative">
                  <input
                    id="travellers"
                    type="number"
                    min="1"
                    max="50"
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-2xl text-sm font-medium text-[#101B2D] focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40 ${
                      errors.travellers ? "border-rose-400" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.travellers && (
                  <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.travellers}</p>
                )}
              </div>
            </div>

            {/* Row 3: Budget Range & Hotel Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Budget Preference (Per Person)
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-[#101B2D] focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40"
                >
                  <option value="Under ₹15,000 per person">Under ₹15,000 per person</option>
                  <option value="₹15,000 - ₹30,000 per person">₹15,000 - ₹30,000 per person</option>
                  <option value="₹30,000 - ₹50,000 per person">₹30,000 - ₹50,000 per person</option>
                  <option value="₹50,000+ Luxury / Custom">₹50,000+ Luxury / Custom</option>
                  <option value="Flexible / Suggest best options">Flexible / Suggest best options</option>
                </select>
              </div>

              <div>
                <label htmlFor="hotelCategory" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Hotel Category Preference
                </label>
                <select
                  id="hotelCategory"
                  value={formData.hotelCategory}
                  onChange={(e) => setFormData({ ...formData, hotelCategory: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-[#101B2D] focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40"
                >
                  <option value="Budget / Standard Hotel">Budget / Standard</option>
                  <option value="3-Star Deluxe">3-Star Deluxe</option>
                  <option value="4-Star Premium Resort">4-Star Premium Resort</option>
                  <option value="5-Star Luxury Stay">5-Star Luxury Stay</option>
                  <option value="Flexible / Not decided">Flexible / Advise options</option>
                </select>
              </div>
            </div>

            {/* Row 4: Cab Requirement (Yes / No Toggle) */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Cab / Local Transfers Required?
              </span>
              <div className="flex gap-4">
                {(["Yes", "No"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({ ...formData, cabRequired: opt })}
                    className={`flex-1 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      formData.cabRequired === opt
                        ? "bg-[#101B2D] text-white border-[#101B2D] shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt === "Yes" ? "✓ Yes, include cab assistance" : "✗ No, I will arrange transport"}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 5: Special Requirements */}
            <div>
              <label htmlFor="specialRequirements" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Special Requirements or Notes (Optional)
              </label>
              <textarea
                id="specialRequirements"
                rows={3}
                placeholder="E.g., Senior citizen friendly, vegetarian meals, flight assistance required, anniversary trip..."
                value={formData.specialRequirements}
                onChange={(e) =>
                  setFormData({ ...formData, specialRequirements: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-[#101B2D] focus:outline-none focus:ring-2 focus:ring-[#1769AA]/40 resize-none"
              />
            </div>

            {/* Success notification banner when submitted */}
            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-900">Enquiry Formatted for WhatsApp</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Your trip details have been loaded into WhatsApp. Simply hit send to chat with our travel team!
                  </p>
                </div>
              </div>
            )}

            {/* Informational Notice */}
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1769AA] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-sky-900 leading-relaxed">
                <strong>Your message will open in WhatsApp with the details filled in.</strong> You can review and send it directly to AR Travels (+91 88660 22341) to begin the conversation.
              </p>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-[#22C7B8] hover:bg-[#1AA89B] text-[#101B2D] font-bold text-base py-4 px-6 rounded-2xl shadow-lg shadow-[#22C7B8]/25 hover:shadow-xl transition-all cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>Send Enquiry via WhatsApp</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
