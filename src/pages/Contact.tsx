import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Send, Star } from "lucide-react";
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
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">Mpaka Road, Westlands<br />Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+254 700 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.32)] ring-4 ring-[#25D366]/15">
                  <svg
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-221.7 99.3-221.7 221.7 0 39.1 10.2 77.3 29.6 111L0 480l118.7-31.1c32.6 17.8 69.3 27.2 106.9 27.2h.1c122.3 0 223.3-99.3 223.3-221.7 0-59.3-23.1-115-65.1-157.3zM223.9 438.6h-.1c-33.1 0-65.7-8.9-94.3-25.7l-6.8-4-70.4 18.5 18.8-68.6-4.4-7c-18.6-29.5-28.4-63.7-28.4-98.9 0-102.8 83.6-186.4 186.5-186.4 49.8 0 96.6 19.4 131.7 54.6 35.2 35.2 54.5 82 54.5 131.8-.1 102.9-85.9 186.7-187.1 186.7zm102.3-138.2c-5.6-2.8-33.1-16.3-38.3-18.1-5.1-1.9-8.9-2.8-12.6 2.8-3.7 5.6-14.5 18.1-17.8 21.8-3.3 3.7-6.5 4.2-12.1 1.4-33.1-16.5-54.8-29.5-76.6-66.8-5.8-9.9 5.8-9.2 16.5-30.7 1.9-3.7.9-7-0.5-9.9-1.4-2.8-12.6-30.4-17.3-41.7-4.5-10.8-9.1-9.3-12.6-9.5-3.3-.2-7-.2-10.8-.2-3.7 0-9.8 1.4-14.9 7-5.1 5.6-19.6 19.1-19.6 46.6s20.1 54.1 22.9 57.8c2.8 3.7 39.5 60.3 95.7 84.6 35.5 15.3 49.4 16.6 67.2 14 10.8-1.6 33.1-13.5 37.8-26.6 4.7-13 4.7-24.2 3.3-26.6-1.4-2.3-5.1-3.7-10.7-6.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/254700000000?text=Hello%20Reinaha%27s%20Spa%2C%20I%27d%20like%20to%20book%20an%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#128C7E] hover:text-[#25D366] transition-colors"
                  >
                    +254 700 000 000
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">Typically replies on WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@reinahasspa.co.ke</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 shadow-sm">
                  <Clock className="h-5 w-5" />
                </div>
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
