import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7 }}
    className="text-center max-w-2xl mx-auto mb-16"
  >
    {subtitle && (
      <span className={`text-xs tracking-[0.3em] uppercase font-body ${light ? "text-gold-light" : "text-primary"}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-5xl font-light mt-3 mb-4 ${light ? "text-cream" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="divider-gold" />
    {description && (
      <p className={`text-sm leading-relaxed font-body mt-4 ${light ? "text-cream-dark" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
