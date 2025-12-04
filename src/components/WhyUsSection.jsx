import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory,
  Handshake,
  Wallet,
  Clock,
  HeadphonesIcon,
  Award,
} from "lucide-react";
import boxesShowcase from "@/assets/boxes-showcase.jpg";

const reasons = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description:
      "Complete control over production ensures consistent quality and faster delivery times.",
  },
  {
    icon: Handshake,
    title: "Personalized Service",
    description:
      "Dedicated account managers who understand your unique packaging requirements.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    description:
      "Premium quality packaging at prices that make sense for your business budget.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Our logistics network ensures your orders reach you when you need them.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to address your queries and concerns promptly.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Decades of experience serving diverse industries from FMCG to e-commerce.",
  },
];

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                Why Choose Us
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Packaging Partner for{" "}
                <span className="text-primary">Success</span>
              </h2>

              <p className="text-secondary-foreground/80 text-lg mb-10 leading-relaxed">
                When you partner with Keshar Packaging, you get more than just
                boxes – you get a team dedicated to protecting your products and
                elevating your brand.
              </p>
            </motion.div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={boxesShowcase}
                alt="Variety of packaging boxes"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 to-transparent" />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl shadow-glow flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center text-primary-foreground">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs">Quality</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-accent/40 rounded-full hidden lg:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
