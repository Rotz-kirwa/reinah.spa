import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-cream">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display text-2xl font-semibold mb-2">Reinaha's Spa</h3>
        <p className="text-cream-dark text-sm leading-relaxed font-body">
          Nairobi's premier luxury wellness destination. Where tranquility meets modern elegance.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" aria-label="Instagram" className="text-cream-dark hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="Facebook" className="text-cream-dark hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
      <div className="space-y-4 text-sm font-body">
        <h4 className="font-display text-lg font-medium mb-4">Visit Us</h4>
        <div className="flex items-start gap-3 text-cream-dark">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
          <span>Mpaka Road, Westlands<br />Nairobi, Kenya</span>
        </div>
        <div className="flex items-center gap-3 text-cream-dark">
          <Phone className="w-4 h-4 shrink-0 text-gold" />
          <span>+254 700 000 000</span>
        </div>
        <div className="flex items-center gap-3 text-cream-dark">
          <Clock className="w-4 h-4 shrink-0 text-gold" />
          <span>Mon – Sun: 9:00 AM – 9:00 PM</span>
        </div>
      </div>
      <div className="text-sm font-body">
        <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
        <div className="flex flex-col gap-3">
          {[
            { to: "/services", label: "Our Services" },
            { to: "/booking", label: "Book Appointment" },
            { to: "/about", label: "About & Gallery" },
            { to: "/contact", label: "Contact Us" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-cream-dark hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-cream-dark/20 text-center py-6 text-xs text-cream-dark/60 font-body space-y-2">
      <p>© {new Date().getFullYear()} Reinaha's Spa. All rights reserved. ™</p>
      <p>Built by Algokings</p>
    </div>
  </footer>
);

export default Footer;
