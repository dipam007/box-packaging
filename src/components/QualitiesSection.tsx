import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Leaf,
  Zap,
  BadgeCheck,
  Recycle,
  Settings,
} from "lucide-react";

const qualities = [
  {
    icon: Shield,
    title: "Superior Durability",
    description:
      "Our boxes are engineered with high-burst strength materials, ensuring maximum protection for your products during transit and storage.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description:
      "We use 100% recyclable and biodegradable materials, contributing to a sustainable future while maintaining premium quality.",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    description:
      "With state-of-the-art machinery and efficient processes, we deliver your orders faster without compromising on quality.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Certified",
    description:
      "ISO certified manufacturing processes ensure consistent quality across every batch, meeting international standards.",
  },
  {
    icon: Recycle,
    title: "Sustainable Production",
    description:
      "Our production facility minimizes waste and maximizes resource efficiency, reducing environmental impact significantly.",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "From design to delivery, we provide tailored packaging solutions that perfectly match your brand identity and product needs.",
  },
];

export function QualitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="qualities" className="section-padding bg-muted geometric-pattern">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Qualities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Sets Us <span className="text-gradient">Apart</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to excellence shines through every box we create,
            delivering unmatched quality that speaks for itself.
          </p>
        </motion.div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 lg:p-8 bg-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 border border-border/50 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-saffron text-primary-foreground mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <quality.icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
