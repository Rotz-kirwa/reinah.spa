import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Mail, Send, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import exterior from "@/assets/exterior.jpg";

const Contact = () => {
  const [formSent, setFormSent] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
        <img src={exterior} alt="Spa exterior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-6xl text-cream font-light">Contact Us</h1>
          <div className="divider-gold mt-4" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <SectionHeading subtitle="Get in Touch" title="We'd Love to Hear From You" />
            <div className="space-y-6 font-body text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">Mpaka Road, Westlands<br />Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@reinahasspa.co.ke</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground">Monday – Sunday: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 aspect-video bg-muted rounded-sm overflow-hidden">
              <iframe
                title="Reinaha's Spa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8189!2d36.8019!3d-1.2636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMpaka+Road%2C+Westlands%2C+Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl text-foreground mb-6">Send a Message</h3>
              {formSent ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <Send className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="font-body text-sm text-muted-foreground">Thank you! We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setFormSent(true); }}
                  className="space-y-5"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp"
                    className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 text-sm tracking-widest uppercase font-body hover:bg-gold-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Testimonials */}
            <div className="mt-8 space-y-4">
              <h4 className="font-display text-lg text-foreground">Guest Reviews</h4>
              {[
                { name: "Sarah L.", text: "An absolute gem in Westlands. The atmosphere is unmatched." },
                { name: "Michael T.", text: "Professional staff, stunning interiors, and transformative treatments." },
              ].map((r) => (
                <div key={r.name} className="glass-card p-5">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm text-muted-foreground font-body italic">"{r.text}"</p>
                  <span className="text-xs font-body text-foreground mt-2 block">{r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
