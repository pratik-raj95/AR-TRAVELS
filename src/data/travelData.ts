export interface PackageItem {
  id: string;
  destination: string;
  duration: string;
  route: string;
  highlight?: string;
  title: string;
  regularPrice: string;
  regularPriceNum: number;
  offerPrice: string;
  offerPriceNum: number;
  priceUnit: string;
  category: "Domestic" | "International";
  image: string;
  badge?: string;
  description: string;
}

export interface DestinationItem {
  name: string;
  tagline: string;
  image: string;
  packageCount: number;
  startingPrice: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: "AR Travels",
  tagline: "Your Journey, Our Responsibility.",
  phone1: "+91 88660 22341",
  phone1Raw: "918866022341",
  phone2: "+91 81539 62341",
  phone2Raw: "918153962341",
  email: "artravels725@outlook.com",
  location: "Danilimda, Ahmedabad, Gujarat, India",
  hours: "Monday – Saturday: 9:00 AM – 9:00 PM",
  referenceUrl: "https://artravels725.in",
};

export const createWhatsAppUrl = (message: string, phone: string = BUSINESS_INFO.phone1Raw) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const PACKAGES: PackageItem[] = [
  {
    id: "goa-south-sightseeing",
    destination: "Goa",
    duration: "1 Day / 0 Nights",
    route: "South Goa",
    highlight: "Mandovi Dinner Cruise",
    title: "Goa South Sightseeing with Mandovi Dinner Cruise Experience",
    regularPrice: "₹5,999",
    regularPriceNum: 5999,
    offerPrice: "₹4,999",
    offerPriceNum: 4999,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    badge: "Coastal Cruise",
    description: "Explore the scenic beauty of South Goa featuring heritage sites, idyllic beaches, and an evening Mandovi River Dinner Cruise with music, dining, and panoramic sunset waters.",
  },
  {
    id: "kashmir-srinagar-pahalgam",
    destination: "Kashmir",
    duration: "5 Days / 4 Nights",
    route: "Srinagar, Pahalgam, Gulmarg, Sonmarg",
    title: "Srinagar Pahalgam Gulmarg Sonmarg Tour",
    regularPrice: "₹18,999",
    regularPriceNum: 18999,
    offerPrice: "₹14,550",
    offerPriceNum: 14550,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    badge: "Mountain Paradise",
    description: "An awe-inspiring circuit covering the paradise of Kashmir: tranquil Shikara rides on Dal Lake, pine forests of Pahalgam, the snow meadows of Gulmarg, and the valleys of Sonmarg.",
  },
  {
    id: "himachal-manali-group-tour",
    destination: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    route: "Delhi to Delhi, Manali, Solang Valley, Atal Tunnel",
    title: "Manali Group Tour 2026",
    regularPrice: "₹12,999",
    regularPriceNum: 12999,
    offerPrice: "₹10,999",
    offerPriceNum: 10999,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    badge: "Best Seller",
    description: "Our high-demand Delhi-to-Delhi Manali group getaway. Experience snow adventures at Solang Valley, drive through the historic Atal Tunnel, and revel in alpine mountain air.",
  },
  {
    id: "uttarakhand-mussoorie-package",
    destination: "Uttarakhand",
    duration: "3 Days / 2 Nights",
    route: "Mussoorie, hills and waterfalls",
    title: "Queen of Hills Mussoorie Package",
    regularPrice: "₹13,999",
    regularPriceNum: 13999,
    offerPrice: "₹12,999",
    offerPriceNum: 12999,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    badge: "Himalayan Retreat",
    description: "Unwind amidst the misty pines and cascading waterfalls of the Queen of Hills. Take in panoramic vistas of the Doon Valley and snow-dusted Himalayan peaks.",
  },
  {
    id: "gujarat-divine-escape",
    destination: "Gujarat",
    duration: "5 Days / 4 Nights",
    route: "Dwarka, Somnath, Diu",
    title: "Gujarat Divine Escape | Dwarka Somnath & Diu Tour",
    regularPrice: "₹30,999",
    regularPriceNum: 30999,
    offerPrice: "₹25,523",
    offerPriceNum: 25523,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    badge: "Spiritual & Coastal",
    description: "A sacred pilgrimage blended with serene coastal relaxation: visit the sacred Dwarkadhish temple and Somnath Jyotirlinga, followed by historic forts and beaches in Diu.",
  },
  {
    id: "mp-ujjain-omkareshwar",
    destination: "Madhya Pradesh",
    duration: "3 Days / 2 Nights",
    route: "Ujjain, Omkareshwar",
    title: "Ujjain, Omkareshwar Spiritual Tour",
    regularPrice: "₹25,999",
    regularPriceNum: 25999,
    offerPrice: "₹19,999",
    offerPriceNum: 19999,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    badge: "Sacred Jyotirlinga",
    description: "Revere two of India's most venerated Jyotirlingas: Shri Mahakaleshwar temple on the Shipra River in Ujjain and Omkareshwar on the island of Mandhata along the holy Narmada.",
  },
  {
    id: "up-heritage-tour",
    destination: "Uttar Pradesh",
    duration: "4 Days / 3 Nights",
    route: "Agra, Mathura, Vrindavan",
    title: "Uttar Pradesh Heritage Tour | Agra, Mathura & Vrindavan",
    regularPrice: "₹21,999",
    regularPriceNum: 21999,
    offerPrice: "₹16,999",
    offerPriceNum: 16999,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    badge: "Heritage & Devotion",
    description: "Experience the timeless grandeur of the Taj Mahal in Agra alongside the devotional spirit and historic temples of Lord Krishna in Mathura and Vrindavan.",
  },
  {
    id: "andaman-island-escape",
    destination: "Andaman Islands",
    duration: "4 Days / 3 Nights",
    route: "Port Blair, Coral Island and beaches",
    title: "Andaman Island Escape | Port Blair, Coral Island & Beach Tour",
    regularPrice: "₹32,999",
    regularPriceNum: 32999,
    offerPrice: "₹25,999",
    offerPriceNum: 25999,
    priceUnit: "per person",
    category: "Domestic",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    badge: "Exotic Island",
    description: "Crystal clear aquamarine waters, untouched white sand beaches, and thrilling coral island experiences across Port Blair and surrounding tropical islands.",
  },
];

export const DESTINATIONS: DestinationItem[] = [
  {
    name: "Goa",
    tagline: "Sun, sand, coastal cruises & heritage",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹4,999",
    category: "Beach & Cruise",
  },
  {
    name: "Kashmir",
    tagline: "Meadows, Dal Lake & snow-kissed valleys",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹14,550",
    category: "Himalayas",
  },
  {
    name: "Himachal Pradesh",
    tagline: "Solang adventures & Atal Tunnel wonders",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹10,999",
    category: "Mountain Adventure",
  },
  {
    name: "Uttarakhand",
    tagline: "Misty pine hills & Queen of the Hills",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹12,999",
    category: "Hill Station",
  },
  {
    name: "Gujarat",
    tagline: "Sacred shrines of Dwarka, Somnath & Diu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹25,523",
    category: "Spiritual & Coast",
  },
  {
    name: "Madhya Pradesh",
    tagline: "Mahakal Jyotirlinga & holy Narmada ghats",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹19,999",
    category: "Spiritual Heritage",
  },
  {
    name: "Uttar Pradesh",
    tagline: "Taj Mahal splendor & sacred Braj Bhumi",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹16,999",
    category: "Heritage & Culture",
  },
  {
    name: "Andaman Islands",
    tagline: "Coral reefs, turquoise seas & pure serenity",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    packageCount: 1,
    startingPrice: "₹25,999",
    category: "Tropical Island",
  },
];

export const QUICK_SERVICES = [
  {
    id: "flights",
    title: "Flight Booking",
    subtitle: "Domestic and international flights.",
    description: "Compare schedules and secure great fares with customized routing and flight assistance.",
    cta: "Enquire About Flights",
    prefill: "Hello AR Travels, I would like to enquire about flight bookings (domestic/international). Please share options.",
    icon: "Plane",
  },
  {
    id: "hotels",
    title: "Hotel Booking",
    subtitle: "Hotels and resorts.",
    description: "Curated stays from boutique heritage hotels to luxury beach and mountain resorts.",
    cta: "Find a Hotel",
    prefill: "Hello AR Travels, I am looking for hotel/resort accommodations. Please guide me through suitable options.",
    icon: "Building2",
  },
  {
    id: "trains",
    title: "Train Ticket Assistance",
    subtitle: "Tatkal and regular ticket assistance.",
    description: "Guidance with train routes, booking assistance, and travel schedule coordination.",
    disclaimer: "Subject to official railway availability and guidelines.",
    cta: "Enquire About Trains",
    prefill: "Hello AR Travels, I need assistance with train ticket booking. Please share details and availability.",
    icon: "Train",
  },
  {
    id: "umrah",
    title: "Umrah Assistance",
    subtitle: "Visa, hotel and transport coordination.",
    description: "Thoughtful coordination of your pilgrimage needs with hotel accommodations close to the Harams.",
    disclaimer: "Guidance and coordination services in accordance with official visa regulations.",
    cta: "Plan Your Umrah Journey",
    prefill: "Assalamu Alaikum AR Travels, I would like guidance and assistance with planning an Umrah journey.",
    icon: "Compass",
  },
];

export const WHY_CHOOSE_US = [
  {
    num: "01",
    title: "Best Value",
    description: "Options matched to your travel requirements, ensuring transparent pricing and memorable journeys.",
  },
  {
    num: "02",
    title: "Personal Support",
    description: "Speak directly with the AR Travels team for tailored recommendations and ongoing journey support.",
  },
  {
    num: "03",
    title: "Clear Communication",
    description: "Quotations and booking details explained clearly with no hidden surprises or ambiguous terms.",
  },
  {
    num: "04",
    title: "WhatsApp Convenience",
    description: "Enquire, clarify details and coordinate your journey through one simple, accessible channel.",
  },
];
