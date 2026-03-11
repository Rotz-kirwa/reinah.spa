import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  index: number;
}

const ServiceCard = ({ title, description, price, duration, image, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="glass-card hover-lift group overflow-hidden"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500" />
      <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-body tracking-wider px-3 py-1.5 rounded-sm">
        {price}
      </span>
    </div>
    <div className="p-6">
      <h3 className="font-display text-xl font-medium mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
          <Clock className="w-3.5 h-3.5" /> {duration}
        </span>
        <Link
          to="/booking"
          className="text-xs tracking-widest uppercase text-primary hover:text-foreground transition-colors font-body"
        >
          Book Now →
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ServiceCard;
