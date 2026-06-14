"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const logos = ["HealthFirst", "MedGroup", "CareNet", "Vitalis", "DocLink"];
// Duplicate array for seamless infinite scroll
const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogoMarquee() {
  return (
    <div className="py-12 border-y border-gray-100 bg-white overflow-hidden flex whitespace-nowrap relative">
      {/* Optional fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex gap-16 md:gap-32 items-center px-8"
      >
        {marqueeLogos.map((logo, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-400 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
            <Activity size={24} strokeWidth={2.5} className="text-primary" />
            <span className="font-heading font-bold text-2xl tracking-wider uppercase">{logo}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
