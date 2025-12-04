import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";
import manufacturingImage from "@/assets/manufacturing.jpg";

const highlights = [
  "Over 25 years of industry expertise",
  "State-of-the-art manufacturing facility",
  "Pan-Gujarat delivery network",
  "Committed to sustainable practices",
];

const stats = [
  { icon: TrendingUp, value: "98%", label: "Customer Satisfaction" },
  { icon: Users, value: "500+", label: "Active Clients" },
  { icon: Clock, value: "24hrs", label: "Quick Response" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={manufacturingImage}
                alt="Keshar Packaging Manufacturing Facility"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-keshar-dark/50 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-gradient-saffron text-primary-foreground p-6 rounded-2xl shadow-glow"
            >
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm opacity-90">Years Strong</div>
            </motion.div>

            {/* Decorative shapes */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-primary/30 rounded-lg rotate-12 hidden md:block" />
            <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-accent/20 rounded-full hidden md:block" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Quick Company Overview
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Trust Through{" "}
              <span className="text-gradient">Quality Packaging</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Established in 1998, Keshar Packaging has grown from a small
              corrugated box manufacturer to one of Gujarat&apos;s most trusted
              packaging solution providers. Our journey is built on the
              foundation of quality, innovation, and unwavering customer service.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We specialize in manufacturing a wide range of corrugated boxes,
              custom printed packaging, and industrial packaging solutions. Our
              modern facility houses advanced machinery operated by skilled
              professionals who share our passion for excellence.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Mini Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
