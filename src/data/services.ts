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
    image: "https://i.pinimg.com/1200x/3b/4e/ab/3b4eabe03afef3601dbc7c2023c57706.jpg",
  },
  {
    id: "swedish",
    category: "Massages",
    title: "Swedish Massage",
    description: "Classic relaxation technique with long flowing strokes to ease stress and improve circulation.",
    price: "KSh 6,500",
    priceValue: 6500,
    duration: "60 min",
    image: "https://i.pinimg.com/1200x/84/56/3d/84563d2388eff44584bfd44bc0a04f93.jpg",
  },
  {
    id: "hot-stone",
    category: "Massages",
    title: "Hot Stone Massage",
    description: "Heated basalt stones placed on key points to melt tension and promote deep relaxation.",
    price: "KSh 9,000",
    priceValue: 9000,
    duration: "75 min",
    image: "https://i.pinimg.com/1200x/63/c5/f2/63c5f27e9b116dc387dfe0afe0524fb2.jpg",
  },
  {
    id: "deep-cleansing",
    category: "Facials & Skincare",
    title: "Deep Cleansing Facial",
    description: "Thorough purification with extraction, exfoliation, and hydrating mask for radiant skin.",
    price: "KSh 7,000",
    priceValue: 7000,
    duration: "60 min",
    image: "https://i.pinimg.com/736x/c1/97/bf/c197bffcfa525dc2434317e867ccd180.jpg",
  },
  {
    id: "anti-aging",
    category: "Facials & Skincare",
    title: "Anti-Aging Facial",
    description: "Premium treatment with retinol, peptides, and LED therapy to diminish fine lines.",
    price: "KSh 10,000",
    priceValue: 10000,
    duration: "90 min",
    image: "https://i.pinimg.com/1200x/34/e4/5b/34e45b6b6158f541b6fa9f70c55fe41a.jpg",
  },
  {
    id: "body-scrub",
    category: "Body Treatments",
    title: "Body Scrub & Wrap",
    description: "Full-body exfoliation with organic scrubs followed by a nourishing body wrap detox.",
    price: "KSh 8,500",
    priceValue: 8500,
    duration: "60 min",
    image: "https://i.pinimg.com/736x/db/1b/40/db1b4074f45bc20b80bb1e37f7f4d593.jpg",
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
    image: "https://i.pinimg.com/736x/4a/2e/d4/4a2ed4cc1553869d3da71dc3b9ae362f.jpg",
  },
  {
    id: "gel-acrylics",
    category: "Nail Care",
    title: "Gel & Acrylic Nails",
    description: "Long-lasting gel or acrylic application with custom designs and nail art.",
    price: "KSh 5,000",
    priceValue: 5000,
    duration: "90 min",
    image: "https://i.pinimg.com/1200x/f6/09/4c/f6094cf7e7eea4266b2d565e62aebfbb.jpg",
  },
  {
    id: "waxing",
    category: "Waxing & Threading",
    title: "Waxing & Threading",
    description: "Gentle hair removal using premium wax and precise threading techniques.",
    price: "From KSh 2,000",
    priceValue: 2000,
    duration: "30–60 min",
    image: "https://i.pinimg.com/1200x/e8/07/13/e807136184900dbc7235d94040153293.jpg",
  },
  {
    id: "lash-extensions",
    category: "Lash & Brows",
    title: "Eyelash Extensions & Brow Tinting",
    description: "Individual lash application and professional brow shaping and tinting.",
    price: "KSh 6,000",
    priceValue: 6000,
    duration: "60 min",
    image: "https://i.pinimg.com/1200x/51/56/9d/51569dc129426ed60e90010e9ce38375.jpg",
  },
  {
    id: "couples-day",
    category: "Special Packages",
    title: "Couples Spa Day",
    description: "A romantic escape: side-by-side massages, facials, and champagne in our private suite.",
    price: "KSh 25,000",
    priceValue: 25000,
    duration: "3 hrs",
    image: "https://i.pinimg.com/1200x/fd/fb/a4/fdfba43817b944a1c741130faaf3c28d.jpg",
  },
  {
    id: "bridal",
    category: "Special Packages",
    title: "Bridal Package",
    description: "Full-day bridal pampering: facial, massage, manicure, pedicure, makeup, and styling.",
    price: "KSh 40,000",
    priceValue: 40000,
    duration: "Full Day",
    image: "https://i.pinimg.com/736x/f7/16/73/f71673e0f18d38ac8bb20d5b78c003ea.jpg",
  },
];
