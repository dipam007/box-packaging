import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { QualitiesSection } from "@/components/QualitiesSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [preview, setPreview] = useState(false);

  if (preview) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <QualitiesSection />
          <AboutSection />
          <WhyUsSection />
          <ServicesSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      <div className="relative z-10 w-full max-w-xl mx-4 p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <svg
              className="w-20 h-20 text-sky-600 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M12 2v2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 20v2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.9 4.9l1.4 1.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7 17.7l1.4 1.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12h2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12h2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.9 19.1l1.4-1.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7 6.3l1.4-1.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3.2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
            Site Under Maintenance
          </h1>
          <p className="text-slate-700 mb-4 text-center">
            We're performing scheduled maintenance and making improvements.
            We'll be back shortly.
          </p>

          <div className="flex items-center space-x-2 mt-4">
            <span className="w-3 h-3 rounded-full bg-sky-600 animate-pulse inline-block" />
            <span
              className="w-3 h-3 rounded-full bg-sky-600 animate-pulse inline-block"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-3 h-3 rounded-full bg-sky-600 animate-pulse inline-block"
              style={{ animationDelay: "300ms" }}
            />
          </div>

          <div className="mt-6">
            <button
              onClick={() => setPreview(true)}
              className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
            >
              View site preview
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-28 -top-24 w-72 h-72 bg-sky-200 opacity-30 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute -right-28 -bottom-24 w-72 h-72 bg-pink-200 opacity-30 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-12px) scale(1.05); }
          66% { transform: translateY(8px) scale(0.95); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
      `}</style>
    </div>
    // <div className="min-h-screen bg-background">
    //   <Navbar />
    //   <main>
    //     <HeroSection />
    //     <QualitiesSection />
    //     <AboutSection />
    //     <WhyUsSection />
    //     <ServicesSection />
    //     <TestimonialsSection />
    //     <FAQSection />
    //     <ContactSection />
    //   </main>
    //   <Footer />
    // </div>
  );
};

export default Index;
