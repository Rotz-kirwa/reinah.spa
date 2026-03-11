import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import massageRoom from "@/assets/massage-room.jpg";
import lounge from "@/assets/lounge.jpg";
import nailBar from "@/assets/nail-bar.jpg";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const highlights = [
  { title: "Massages", desc: "Deep Tissue, Swedish, Hot Stone", image: massageRoom },
  { title: "Facials & Skincare", desc: "Deep Cleansing, Anti-Aging", image: "https://i.pinimg.com/736x/14/0a/b9/140ab96977c75b5b959170f800dbfeb1.jpg" },
  { title: "Nail Bar", desc: "Manicures, Pedicures, Gel & Acrylics", image: nailBar },
];

const testimonials = [
  { name: "Amara K.", text: "The most serene spa I've ever visited. The hot stone massage was heavenly.", rating: 5 },
  { name: "David O.", text: "Brought my wife for the couples day — absolutely worth every shilling. World-class.", rating: 5 },
  { name: "Fatima N.", text: "Their facials transformed my skin. The therapists are incredibly skilled and warm.", rating: 5 },
];

const Index = () => {
  const featuredServices = services.filter(s =>
    ["deep-tissue", "anti-aging", "couples-day"].includes(s.id)
  );

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Reinaha's Spa reception with cascading water wall" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="inline-flex items-center gap-2 text-gold-light text-xs tracking-[0.4em] uppercase font-body mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Westlands, Nairobi
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
              Ultimate Serenity<br />
              <span className="text-gradient-gold font-medium">in Westlands</span>
            </h1>
            <p className="text-cream-dark/80 font-body text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
              Experience Nairobi's most exclusive wellness sanctuary. Where modern luxury meets timeless tranquility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm tracking-widest uppercase font-body hover:bg-gold-light transition-colors duration-300"
              >
                Book Your Escape <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-3.5 text-sm tracking-widest uppercase font-body hover:bg-cream/10 transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-5 h-8 border border-cream/40 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </motion.div>
      </section>

      {/* Service Highlights */}
      <section className="section-padding bg-background">
        <SectionHeading
          subtitle="Our Expertise"
          title="Indulge in Luxury"
          description="From rejuvenating massages to expert skincare, every treatment is crafted for ultimate relaxation."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group overflow-hidden rounded-sm aspect-[3/4] cursor-pointer"
            >
              <img src={h.image} alt={h.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl text-cream mb-1">{h.title}</h3>
                <p className="text-cream-dark text-xs font-body">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-muted">
        <SectionHeading subtitle="Featured" title="Signature Treatments" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredServices.map((s, i) => (
            <ServiceCard key={s.id} {...s} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-sm tracking-widest uppercase text-primary hover:text-foreground transition-colors font-body">
            View All Services →
          </Link>
        </div>
      </section>

      {/* Location Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <SectionHeading
            subtitle="Find Us"
            title="Mpaka Road, Westlands"
            description="Nestled in the heart of Nairobi's vibrant Westlands district, Reinaha's Spa is your urban retreat from the everyday."
            light
          />
          <div className="flex items-center justify-center gap-2 text-gold-light font-body text-sm">
            <MapPin className="w-4 h-4" />
            Mpaka Road, Westlands, Nairobi, Kenya
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <SectionHeading subtitle="Testimonials" title="What Our Guests Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed italic mb-4">"{t.text}"</p>
              <span className="text-xs font-body tracking-wider uppercase text-foreground">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={lounge} alt="Relaxation lounge" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-5xl text-cream font-light mb-4">
              Begin Your Journey to Serenity
            </h2>
            <div className="divider-gold" />
            <p className="text-cream-dark/80 font-body text-sm max-w-md mx-auto mb-8">
              Reserve your sanctuary today. Let us take care of the rest.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase font-body hover:bg-gold-light transition-colors"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
