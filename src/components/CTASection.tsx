"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  { src: "/images/doctor-sarah.webp", className: "top-12 left-[6%] w-16 h-16 md:w-20 md:h-20" },
  { src: "/images/doctor-emily.webp", className: "bottom-16 left-[12%] w-14 h-14 md:w-16 md:h-16" },
  { src: "/images/doctor-james.webp", className: "top-12 right-[6%] w-16 h-16 md:w-20 md:h-20" },
  { src: "/images/doctor-robert.webp", className: "bottom-16 right-[12%] w-14 h-14 md:w-16 md:h-16" },
];

export default function CTASection() {
  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[32px] overflow-hidden relative"
        style={{ backgroundImage: "linear-gradient(135deg, #2a8fa8 0%, #1d6fae 40%, #144f9e 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

        {/* Floating avatars */}
        {avatars.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className={`hidden md:block absolute rounded-full border-4 border-white/40 overflow-hidden shadow-xl ${a.className}`}
          >
            <Image src={a.src} alt="Doctor" fill className="object-cover" />
          </motion.div>
        ))}

        <div className="relative px-6 py-20 md:py-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-7 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-sm font-medium text-white">Loslegen</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.05] max-w-2xl tracking-tight">
            Ihr Weg zu besserer Gesundheit beginnt hier.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl">
            Entdecken Sie erfahrene Fachkräfte und verwalten Sie alle Ihre Arztbesuche an einem bequemen, sicheren Ort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="px-8 py-3.5 rounded-pill bg-white text-dark font-semibold hover:bg-gray-100 transition-colors text-[15px]"
            >
              Leistungen entdecken
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-pill bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors text-[15px]"
            >
              Termin buchen
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
