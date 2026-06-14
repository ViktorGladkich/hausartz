"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. James Carter",
    specialty: "Kardiologe",
    rating: "4.9/5",
    image: "/images/doctor-james.webp",
  },
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Dermatologin",
    rating: "4.8/5",
    image: "/images/doctor-sarah.webp",
  },
  {
    name: "Dr. Robert Ellison",
    specialty: "Allgemeinarzt",
    rating: "4.9/5",
    image: "/images/doctor-robert.webp",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pb-20 pt-32 lg:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "linear-gradient(135deg, #2a8fa8 0%, #1d6fae 40%, #0f3f6f 100%)" }}>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white opacity-[0.07] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-linear-to-r from-black/25 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 mb-8"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 text-dark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-dark">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z" />
                </svg>
                <span className="font-bold text-[13px] tracking-wide">Rund um die Uhr</span>
              </div>
              <div className="px-5 py-2 text-white/90 font-medium text-[13px] flex items-center">
                Versorgung, wenn es zählt
              </div>
            </motion.div>
            
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-heading text-5xl md:text-[64px] lg:text-[72px] leading-[1.05] font-bold text-white mb-6 max-w-xl"
            >
              Echte Ärzte,<br/>echte Fürsorge.
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-lg text-white/90 mb-10 max-w-md font-medium leading-relaxed"
            >
              Entdecken Sie erfahrene Ärzte, vergleichen Sie Fachgebiete und buchen Sie vertrauensvolle Termine ganz einfach online.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#doctors"
                className="px-8 py-3.5 rounded-pill bg-white text-dark font-semibold hover:bg-gray-50 transition-colors text-[15px]"
              >
                Ärzte ansehen
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-pill bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors text-[15px]"
              >
                Termin buchen
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Doctor Cards 3D Stack & Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center justify-center"
          >
            {/* Cards Container with 3D perspective */}
            <div 
              className="relative w-full h-[500px] flex items-center justify-center" 
              style={{ perspective: '1200px' }}
            >
              {doctors.map((doc, index) => {
                let offset = index - currentIndex;
                // Normalize offset to -1, 0, or 1 for infinite carousel
                if (offset < -1) offset += doctors.length;
                if (offset > 1) offset -= doctors.length;
                
                const isCenter = offset === 0;
                const isLeft = offset === -1;
                return (
                  <motion.div
                    key={doc.name}
                    initial={false}
                    animate={{
                      x: isCenter ? "-50%" : isLeft ? "calc(-50% - 190px)" : "calc(-50% + 190px)",
                      y: "-50%",
                      scale: isCenter ? 1 : 0.85,
                      rotateY: isCenter ? 0 : isLeft ? -10 : 10,
                      opacity: isCenter ? 1 : 0.2,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-1/2 w-[280px] md:w-[360px] h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-white"
                    style={{
                      left: '50%',
                      transformOrigin: isCenter ? "50% 50%" : isLeft ? "100% 50%" : "0% 50%",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover"
                      priority={isCenter}
                    />
                    
                    {/* Dark gradient mask at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />

                    {/* Top Rating Tag */}
                    <div className="absolute top-4 right-4 rounded-[100px] bg-[#1A3B5C] pl-2.5 pr-3.5 py-1.5 flex items-center gap-1.5 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-white text-white" />
                      <span className="text-white text-[13px] font-semibold tracking-tight">{doc.rating}</span>
                    </div>

                    {/* Bottom Info Pill */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[100px] p-2 flex items-center justify-between shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 bg-gray-100">
                          <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-heading font-bold text-dark text-[15px] leading-tight">{doc.name}</span>
                          <span className="text-muted text-[13px] font-medium mt-0.5">{doc.specialty}</span>
                        </div>
                      </div>
                      <Link 
                        href="#" 
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity mr-1 bg-[#1A3B5C]"
                      >
                         <ArrowUpRight className="text-white" size={20} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 mt-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
