import massageRoom from "@/assets/massage-room.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import bodyTreatment from "@/assets/body-treatment.jpg";
import nailBar from "@/assets/nail-bar.jpg";
import lounge from "@/assets/lounge.jpg";
import steamRoom from "@/assets/steam-room.jpg";

export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  priceValue: number;
  duration: string;
  image: string;
}

export const serviceCategories = [
  "All",
  "Massages",
  "Facials & Skincare",
  "Body Treatments",
  "Nail Care",
  "Waxing & Threading",
  "Lash & Brows",
  "Special Packages",
];

export const services: Service[] = [
  {
    id: "deep-tissue",
    category: "Massages",
    title: "Deep Tissue Massage",
    description: "Intensive pressure targeting deep muscle layers to release chronic tension and restore flexibility.",
    price: "KSh 8,000",
    priceValue: 8000,
    duration: "90 min",
    image: massageRoom,
  },
  {
    id: "swedish",
    category: "Massages",
    title: "Swedish Massage",
    description: "Classic relaxation technique with long flowing strokes to ease stress and improve circulation.",
    price: "KSh 6,500",
    priceValue: 6500,
    duration: "60 min",
    image: massageRoom,
  },
  {
    id: "hot-stone",
    category: "Massages",
    title: "Hot Stone Massage",
    description: "Heated basalt stones placed on key points to melt tension and promote deep relaxation.",
    price: "KSh 9,000",
    priceValue: 9000,
    duration: "75 min",
    image: massageRoom,
  },
  {
    id: "deep-cleansing",
    category: "Facials & Skincare",
    title: "Deep Cleansing Facial",
    description: "Thorough purification with extraction, exfoliation, and hydrating mask for radiant skin.",
    price: "KSh 7,000",
    priceValue: 7000,
    duration: "60 min",
    image: facialRoom,
  },
  {
    id: "anti-aging",
    category: "Facials & Skincare",
    title: "Anti-Aging Facial",
    description: "Premium treatment with retinol, peptides, and LED therapy to diminish fine lines.",
    price: "KSh 10,000",
    priceValue: 10000,
    duration: "90 min",
    image: facialRoom,
  },
  {
    id: "body-scrub",
    category: "Body Treatments",
    title: "Body Scrub & Wrap",
    description: "Full-body exfoliation with organic scrubs followed by a nourishing body wrap detox.",
    price: "KSh 8,500",
    priceValue: 8500,
    duration: "60 min",
    image: bodyTreatment,
  },
  {
    id: "detox",
    category: "Body Treatments",
    title: "Detox Treatment",
    description: "Steam therapy and lymphatic drainage to purify and rejuvenate from within.",
    price: "KSh 8,500",
    priceValue: 8500,
    duration: "60 min",
    image: steamRoom,
  },
  {
    id: "mani-pedi",
    category: "Nail Care",
    title: "Manicure & Pedicure",
    description: "Classic nail care with shaping, cuticle treatment, massage, and polish of your choice.",
    price: "KSh 3,500",
    priceValue: 3500,
    duration: "45 min",
    image: nailBar,
  },
  {
    id: "gel-acrylics",
    category: "Nail Care",
    title: "Gel & Acrylic Nails",
    description: "Long-lasting gel or acrylic application with custom designs and nail art.",
    price: "KSh 5,000",
    priceValue: 5000,
    duration: "90 min",
    image: nailBar,
  },
  {
    id: "waxing",
    category: "Waxing & Threading",
    title: "Waxing & Threading",
    description: "Gentle hair removal using premium wax and precise threading techniques.",
    price: "From KSh 2,000",
    priceValue: 2000,
    duration: "30–60 min",
    image: facialRoom,
  },
  {
    id: "lash-extensions",
    category: "Lash & Brows",
    title: "Eyelash Extensions & Brow Tinting",
    description: "Individual lash application and professional brow shaping and tinting.",
    price: "KSh 6,000",
    priceValue: 6000,
    duration: "60 min",
    image: facialRoom,
  },
  {
    id: "couples-day",
    category: "Special Packages",
    title: "Couples Spa Day",
    description: "A romantic escape: side-by-side massages, facials, and champagne in our private suite.",
    price: "KSh 25,000",
    priceValue: 25000,
    duration: "3 hrs",
    image: lounge,
  },
  {
    id: "bridal",
    category: "Special Packages",
    title: "Bridal Package",
    description: "Full-day bridal pampering: facial, massage, manicure, pedicure, makeup, and styling.",
    price: "KSh 40,000",
    priceValue: 40000,
    duration: "Full Day",
    image: lounge,
  },
];
