import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artravels725.in"),
  title: "AR Travels | Holiday Packages, Flight & Hotel Booking",
  description:
    "Explore travel packages across India, flight and hotel booking assistance, train ticket assistance and personalized Umrah travel guidance with AR Travels.",
  keywords: [
    "AR Travels",
    "Travel Agency Ahmedabad",
    "Goa Tour Package",
    "Kashmir Tour",
    "Manali Tour 2026",
    "Mussoorie Package",
    "Gujarat Tour Dwarka Somnath",
    "Ujjain Omkareshwar Tour",
    "Agra Mathura Vrindavan Tour",
    "Andaman Island Package",
    "Umrah Assistance",
    "Flight Booking",
    "Hotel Booking",
  ],
  authors: [{ name: "AR Travels" }],
  openGraph: {
    title: "AR Travels | Holiday Packages, Flight & Hotel Booking",
    description:
      "Explore travel packages across India, flight and hotel booking assistance, train ticket assistance and personalized Umrah travel guidance with AR Travels.",
    url: "https://artravels725.in",
    siteName: "AR Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AR Travels - Your Journey, Our Responsibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Travels | Holiday Packages, Flight & Hotel Booking",
    description:
      "Explore travel packages across India, flight and hotel booking assistance, train ticket assistance and personalized Umrah travel guidance with AR Travels.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://artravels725.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "AR Travels",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  description:
    "Explore travel packages across India, flight and hotel booking assistance, train ticket assistance and personalized Umrah travel guidance with AR Travels.",
  telephone: "+91 88660 22341",
  email: "artravels725@outlook.com",
  url: "https://artravels725.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Danilimda, Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  priceRange: "₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F3] text-[#101B2D] font-sans antialiased selection:bg-[#22C7B8] selection:text-[#101B2D]">
        {children}
      </body>
    </html>
  );
}
