import { motion } from "framer-motion";
import { ArrowRight, Package, Award, Truck } from "lucide-react";
import heroImage from "@/assets/hero-packaging.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Packaging warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45"
            animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-24 h-24 border border-accent/20 rotate-12"
            animate={{ rotate: [12, -12, 12], scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rotate-45"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="relative z-10 container-wide pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-secondary-foreground text-sm font-medium">
              Gujarat&apos;s Premier Packaging Partner
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 leading-tight"
          >
            Crafting{" "}
            <span className="text-gradient">Premium Packaging</span>{" "}
            Solutions
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            The Symbol of{" "}
            <span className="text-primary font-semibold">Trust</span> and{" "}
            <span className="text-accent font-semibold">Service</span> — 
            Delivering excellence in corrugated boxes and custom packaging 
            solutions for over two decades.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#services"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-saffron text-primary-foreground rounded-full text-lg font-semibold shadow-glow hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border-2 border-secondary-foreground/30 text-secondary-foreground rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              { icon: Package, value: "25+", label: "Years Experience" },
              { icon: Award, value: "500+", label: "Happy Clients" },
              { icon: Truck, value: "10K+", label: "Orders Delivered" },
              { icon: Package, value: "50+", label: "Box Varieties" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="flex flex-col items-center p-4 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border/50"
              >
                <stat.icon className="w-6 h-6 text-primary mb-2" />
                <span className="text-2xl md:text-3xl font-bold text-secondary-foreground">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-secondary-foreground/70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-secondary-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
