import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
    action: "tel:+919876543210",
    actionLabel: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@kesharpackaging.com", "sales@kesharpackaging.com"],
    action: "mailto:info@kesharpackaging.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "Keshar Packaging Industries",
      "Industrial Area, Phase 2",
      "Ahmedabad, Gujarat - 380024",
    ],
    action: "https://maps.google.com",
    actionLabel: "Get Directions",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Saturday: 9:00 AM - 7:00 PM",
      "Sunday: Closed",
    ],
    action: null,
    actionLabel: null,
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to elevate your packaging? Get in touch with us today and
            let&apos;s discuss how we can help your business grow.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 bg-secondary-foreground/5 rounded-2xl border border-secondary-foreground/10 hover:border-primary/30 hover:bg-secondary-foreground/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <info.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-secondary-foreground mb-4">
                {info.title}
              </h3>

              {/* Details */}
              <div className="space-y-1 mb-6">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-secondary-foreground/70 text-sm">
                    {detail}
                  </p>
                ))}
              </div>

              {/* Action */}
              {info.action && (
                <motion.a
                  href={info.action}
                  target={info.action.startsWith("http") ? "_blank" : undefined}
                  rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  whileHover={{ x: 5 }}
                >
                  {info.actionLabel}
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map / CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-saffron p-8 md:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-primary-foreground/90 max-w-xl">
                Call us today or send us an email. Our team will get back to you
                within 24 hours with a customized packaging solution for your
                business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:info@kesharpackaging.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
