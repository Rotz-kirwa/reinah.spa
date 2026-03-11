import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-spa.jpg";
import massageRoom from "@/assets/massage-room.jpg";
import facialRoom from "@/assets/facial-room.jpg";
import lounge from "@/assets/lounge.jpg";
import nailBar from "@/assets/nail-bar.jpg";
import steamRoom from "@/assets/steam-room.jpg";
import bodyTreatment from "@/assets/body-treatment.jpg";
import exterior from "@/assets/exterior.jpg";

const galleryImages = [
  { src: heroImage, alt: "Reception & Water Wall" },
  { src: massageRoom, alt: "Massage Treatment Room" },
  { src: facialRoom, alt: "Skincare Suite" },
  { src: lounge, alt: "Relaxation Lounge" },
  { src: nailBar, alt: "Nail Bar" },
  { src: steamRoom, alt: "Steam Room & Sauna" },
  { src: bodyTreatment, alt: "Body Treatment Room" },
  { src: exterior, alt: "Spa Exterior" },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      <img src={exterior} alt="Reinaha's Spa exterior" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-4xl md:text-6xl text-cream font-light">About & Gallery</h1>
        <div className="divider-gold mt-4" />
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <SectionHeading subtitle="Our Story" title="Nairobi's Premier Wellness Oasis" />
        <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-6 text-center">
          <p>
            Born from a vision to bring world-class spa culture to the heart of Nairobi, Reinaha's Spa opened its doors on
            Mpaka Road, Westlands, as a sanctuary where modern luxury meets African warmth. Every detail — from the cascading
            indoor water wall to the hand-selected bamboo panelling — has been curated to transport you to a realm of
            unparalleled serenity.
          </p>
          <p>
            Our team of certified therapists, each with over a decade of experience, blends traditional African healing
            wisdom with cutting-edge wellness techniques. We source organic, locally-produced ingredients for our treatments,
            supporting Kenyan artisans while delivering results that speak for themselves.
          </p>
          <p>
            Whether you seek a restorative deep tissue massage after a long week, a glamorous bridal preparation, or a
            romantic couples retreat, Reinaha's Spa is your invitation to pause, breathe, and rediscover yourself.
          </p>
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding bg-muted">
      <SectionHeading subtitle="Virtual Tour" title="Explore Our Spaces" description="Step inside Nairobi's most exclusive wellness destination." />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`overflow-hidden rounded-sm group cursor-pointer ${
              i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <div className="relative h-full min-h-[250px]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-end p-4">
                <span className="font-body text-xs text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wider uppercase">
                  {img.alt}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Therapists */}
    <section className="section-padding bg-background">
      <SectionHeading subtitle="Our Team" title="Expert Therapists" description="Certified professionals with a passion for wellness." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { name: "Grace Mwangi", role: "Senior Massage Therapist", exp: "12 years" },
          { name: "James Ochieng", role: "Skincare Specialist", exp: "10 years" },
          { name: "Wanjiku Njeri", role: "Nail Artist", exp: "8 years" },
          { name: "Aisha Mohamed", role: "Holistic Wellness Expert", exp: "15 years" },
        ].map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-20 h-20 bg-sage-light rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="font-display text-2xl text-foreground">{t.name[0]}</span>
            </div>
            <h4 className="font-display text-lg text-foreground">{t.name}</h4>
            <p className="text-xs text-primary font-body tracking-wider uppercase mt-1">{t.role}</p>
            <p className="text-xs text-muted-foreground font-body mt-2">{t.exp} experience</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
