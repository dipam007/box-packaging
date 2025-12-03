import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    company: "Gujarat Textiles Pvt Ltd",
    role: "Procurement Manager",
    content:
      "Keshar Packaging has been our trusted partner for over 8 years. Their consistency in quality and timely deliveries have never let us down. The team truly understands our packaging needs.",
    rating: 5,
  },
  {
    name: "Meena Shah",
    company: "Fresh Foods India",
    role: "Operations Head",
    content:
      "We switched to Keshar for our food-grade packaging and the difference was remarkable. Their attention to safety standards and print quality is exceptional. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "TechMart E-Commerce",
    role: "CEO",
    content:
      "As an e-commerce business, packaging is crucial for us. Keshar's custom e-commerce boxes have significantly reduced our damage rates and improved customer satisfaction.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Sunshine Cosmetics",
    role: "Brand Manager",
    content:
      "The printed packaging boxes from Keshar helped elevate our brand presence. The color accuracy and finish quality exceeded our expectations. Great team to work with!",
    rating: 5,
  },
  {
    name: "Amit Desai",
    company: "Industrial Solutions Ltd",
    role: "Supply Chain Manager",
    content:
      "For our heavy industrial products, we needed packaging that could withstand rough handling. Keshar delivered exactly what we needed with their 7-ply heavy-duty boxes.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-muted geometric-pattern"
    >
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from businesses we&apos;ve
            helped succeed with premium packaging solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/20" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-lg md:text-xl text-card-foreground leading-relaxed mb-8">
              &quot;{testimonials[currentIndex].content}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-saffron flex items-center justify-center text-primary-foreground font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-card-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role},{" "}
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Additional testimonials preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Repeat Orders" },
            { value: "25+", label: "Years of Trust" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card rounded-xl border border-border/50"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
