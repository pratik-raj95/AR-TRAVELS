"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickServices from "@/components/QuickServices";
import DestinationsSection from "@/components/DestinationsSection";
import PackagesSection from "@/components/PackagesSection";
import PackageDetailsModal from "@/components/PackageDetailsModal";
import WhyChooseUs from "@/components/WhyChooseUs";
import TripPlannerForm from "@/components/TripPlannerForm";
import SpecialTravelSections from "@/components/SpecialTravelSections";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingContactElements from "@/components/FloatingContactElements";
import { PackageItem } from "@/data/travelData";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedDestinationFilter, setSelectedDestinationFilter] = useState<string>("All");

  const handleSelectDestination = (dest: string) => {
    setSelectedDestinationFilter(dest);
  };

  const handleOpenPackageDetails = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
  };

  const handleClosePackageDetails = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-[#FAF8F3]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <HeroSection />

        {/* 2. Quick Services (Flights, Hotels, Trains, Umrah) */}
        <QuickServices />

        {/* 3. Destination Discovery (8 regions & circuits) */}
        <DestinationsSection onSelectDestination={handleSelectDestination} />

        {/* 4. Curated Travel Packages */}
        <PackagesSection
          onViewDetails={handleOpenPackageDetails}
          selectedDestination={selectedDestinationFilter}
          onSelectDestination={handleSelectDestination}
        />

        {/* 5. Why Choose AR Travels (4 pillars) */}
        <WhyChooseUs />

        {/* 6. Special Travel Highlights (Umrah, International, Domestic) */}
        <SpecialTravelSections />

        {/* 7. Trip Planner Enquiry Form */}
        <TripPlannerForm />

        {/* 8. Final Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Footer & Policies */}
      <Footer />

      {/* Floating Elements (Desktop WhatsApp button & Mobile bottom bar) */}
      <FloatingContactElements />

      {/* Detailed Package Modal */}
      <PackageDetailsModal
        pkg={selectedPackage}
        onClose={handleClosePackageDetails}
      />
    </div>
  );
}
