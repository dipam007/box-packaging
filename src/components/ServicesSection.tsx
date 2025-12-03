import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services-boxes.jpg";

const services = [
  {
    title: "Corrugated Boxes",
    description:
      "3-ply, 5-ply, and 7-ply corrugated boxes in all standard and custom sizes. Perfect for shipping, storage, and retail packaging.",
    features: ["Custom Sizes", "Multiple Ply Options", "High Burst Strength"],
  },
  {
    title: "Printed Packaging",
    description:
      "Custom printed boxes with your brand logo, colors, and designs. Flexo and offset printing options available.",
    features: ["Full Color Printing", "Brand Customization", "Premium Finish"],
  },
  {
    title: "E-Commerce Boxes",
    description:
      "Specially designed boxes for e-commerce businesses with easy assembly and secure closure mechanisms.",
    features: ["Easy Assembly", "Self-Locking", "Tamper Evident"],
  },
  {
    title: "Industrial Packaging",
    description:
      "Heavy-duty packaging solutions for industrial products, machinery, and equipment.",
    features: ["Heavy Load Capacity", "Moisture Resistant", "Stackable Design"],
  },
  {
    title: "Food-Grade Boxes",
    description:
      "Safe and hygienic packaging for food products, compliant with food safety standards.",
    features: ["Food Safe", "Grease Resistant", "FDA Compliant"],
  },
  {
    title: "Display Packaging",
    description:
      "Eye-catching display boxes and stands for retail environments to showcase your products effectively.",
    features: ["Retail Ready", "Custom Design", "Point of Sale"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Packaging Solutions for{" "}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From small businesses to large enterprises, we provide comprehensive
            packaging solutions tailored to your specific requirements.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-16 shadow-xl"
        >
          <img
            src={servicesImage}
            alt="Various packaging solutions"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-keshar-dark/80 via-keshar-dark/40 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
                Complete Packaging Solutions Under One Roof
              </h3>
              <p className="text-secondary-foreground/80 mb-6">
                Design, manufacture, and deliver — we handle everything so you
                can focus on your business.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative p-6 lg:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold text-card-foreground mb-3 pr-12 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-saffron rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
