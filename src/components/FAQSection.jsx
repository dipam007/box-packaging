import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of corrugated boxes do you manufacture?",
    answer:
      "We manufacture a wide range of corrugated boxes including 3-ply, 5-ply, and 7-ply boxes in various grades. Our products include regular slotted containers (RSC), die-cut boxes, e-commerce boxes, food-grade boxes, and custom printed packaging solutions.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Our minimum order quantity varies based on the type and size of boxes. For standard boxes, we can accommodate orders as low as 500 pieces. For custom printed boxes, the minimum is typically 1000 pieces. Contact us for specific requirements.",
  },
  {
    question: "How long does production and delivery take?",
    answer:
      "Standard box orders are typically ready within 3-5 business days. Custom printed orders may take 7-10 business days depending on complexity. We offer express delivery for urgent requirements at additional cost.",
  },
  {
    question: "Do you offer custom printing services?",
    answer:
      "Yes, we offer full-color flexographic and offset printing services. We can print your brand logo, product information, handling instructions, and any custom design on the boxes. Our design team can also help create packaging designs if needed.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver across Gujarat and neighboring states. Our primary delivery areas include Ahmedabad, Surat, Vadodara, Rajkot, and surrounding industrial areas. For bulk orders, we can arrange nationwide delivery.",
  },
  {
    question: "Are your boxes eco-friendly?",
    answer:
      "Yes, all our boxes are made from 100% recyclable materials. We use sustainable manufacturing practices and offer boxes made from recycled paper content. Our packaging solutions are biodegradable and environmentally responsible.",
  },
  {
    question: "Can you provide samples before bulk orders?",
    answer:
      "Absolutely! We encourage clients to request samples before placing bulk orders. Standard samples are provided free of cost. For custom printed samples, nominal charges may apply which are adjusted against your bulk order.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We offer flexible payment terms including advance payment, credit (for established clients), and milestone-based payments for large orders. We accept bank transfers, cheques, and all major digital payment methods.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Got questions? We&apos;ve got answers. If you can&apos;t find what
              you&apos;re looking for, feel free to reach out to our team.
            </p>

            {/* Contact CTA */}
            <div className="p-6 bg-muted rounded-2xl border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Still have questions?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our team is here to help
                  </p>
                </div>
              </div>
              <motion.a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className={`bg-card rounded-xl border transition-colors ${
                  openIndex === index
                    ? "border-primary/30 shadow-soft"
                    : "border-border/50 hover:border-border"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="font-semibold text-card-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        openIndex === index
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
