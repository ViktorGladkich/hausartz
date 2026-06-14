"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14 2h-4a1 1 0 0 0-1 1v6H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6V3a1 1 0 0 0-1-1z" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about-us" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-8"
          >
             <CrossIcon className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-dark)]">Über Praxis am Park</span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-[28px] md:text-4xl lg:text-[40px] leading-tight font-medium text-[var(--color-dark)] px-4"
          >
            Wir sind ein modernes Ärzteteam, das Sie mit vertrauenswürdigen Ärzten verbindet und hochwertige Versorgung einfach, klar und jederzeit zugänglich macht.
          </motion.h3>
        </div>

        {/* 3x Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[480px]">
          
          {/* Card 1: Image + Book a call overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[32px] overflow-hidden group h-[400px] md:h-full p-6 flex flex-col justify-between"
            style={{ backgroundImage: "linear-gradient(150deg, #2a8fa8 0%, #1d6fae 50%, #0f3f6f 100%)" }}
          >
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white opacity-10 rounded-full blur-2xl" />
            {/* Shield/cross emblem */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                <CrossIcon className="w-11 h-11 text-white" />
              </div>
            </div>

            {/* Excellence in Care Badge */}
            <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 self-start shadow-sm border border-white/20">
               <CrossIcon className="w-4 h-4 text-[var(--color-primary)]" />
               <span className="font-semibold text-sm text-[var(--color-dark)]">Exzellente Versorgung</span>
            </div>

            {/* Book a call button overlay */}
            <Link
              href="/contact"
              className="relative z-10 w-full py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-center hover:bg-white/20 transition-all active:scale-[0.98]"
            >
              Termin buchen
            </Link>
          </motion.div>

          {/* Card 2: Tall Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-[32px] overflow-hidden h-[400px] md:h-full"
          >
            <Image
              src="/images/service-telehealth.webp"
              alt="Doctor"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Card 3: Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-[32px] bg-[var(--color-background)] p-10 flex flex-col justify-between h-[400px] md:h-full border border-gray-100"
          >
             <div>
               <h1 className="font-heading text-6xl md:text-[80px] font-bold text-[var(--color-dark)] tracking-tight leading-none">120+</h1>
               <p className="text-[var(--color-muted)] font-medium text-base mt-2">Vertrauensvolle Ärzte</p>
             </div>

             <div className="space-y-6 mt-12 md:mt-0">
                {/* Rated */}
                <div className="flex items-center gap-4">
                  <span className="text-[var(--color-dark)] font-semibold text-[15px] w-14">Bewertet</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[var(--color-primary)] rounded-full" 
                    />
                  </div>
                  <span className="text-[var(--color-dark)] font-bold text-[15px] w-10 text-right">90%</span>
                </div>
                
                {/* Cured */}
                <div className="flex items-center gap-4">
                  <span className="text-[var(--color-dark)] font-semibold text-[15px] w-14">Geheilt</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-[var(--color-primary)] rounded-full" 
                    />
                  </div>
                  <span className="text-[var(--color-dark)] font-bold text-[15px] w-10 text-right">85%</span>
                </div>
                
                {/* Active */}
                <div className="flex items-center gap-4">
                  <span className="text-[var(--color-dark)] font-semibold text-[15px] w-14">Aktiv</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-[var(--color-primary)] rounded-full" 
                    />
                  </div>
                  <span className="text-[var(--color-dark)] font-bold text-[15px] w-10 text-right">75%</span>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
