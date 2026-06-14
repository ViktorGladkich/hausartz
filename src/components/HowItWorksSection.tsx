"use client";

import { motion } from "framer-motion";
import { ClipboardList, CalendarClock, HeartHandshake } from "lucide-react";

const steps = [
  {
    num: "Schritt 01",
    title: "Sagen Sie uns, was Sie brauchen",
    desc: "Teilen Sie Ihre Beschwerden mit und wir verbinden Sie mit dem richtigen Facharzt.",
    icon: ClipboardList,
  },
  {
    num: "Schritt 02",
    title: "Wählen Sie Ihre passende Zeit",
    desc: "Sehen Sie die Verfügbarkeit der Ärzte und planen Sie Ihren Termin vor Ort oder virtuell.",
    icon: CalendarClock,
  },
  {
    num: "Schritt 03",
    title: "Versorgung, ganz entspannt",
    desc: "Nehmen Sie online teil oder kommen Sie sicher und völlig stressfrei in die Praxis.",
    icon: HeartHandshake,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: "linear-gradient(135deg, #2a8fa8 0%, #1d6fae 45%, #0f3f6f 100%)" }}>
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-white opacity-[0.06] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/20 backdrop-blur-md mb-6"
          >
             <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-sm font-semibold text-white">So funktioniert&apos;s</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight"
          >
Ihr Weg zur Gesundheit in drei einfachen Schritten.
          </motion.h2>
        </div>

        {/* 3x Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Circle Wrapper */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10">
                 <step.icon className="w-20 h-20 text-white" strokeWidth={1.5} />

                 {/* Number wrapper pill */}
                 <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-xl">
                   <span className="text-[14px] font-bold text-dark tracking-wide">{step.num}</span>
                 </div>
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white mb-3 mt-4 tracking-tight">{step.title}</h3>
              <p className="text-white/80 max-w-[280px] text-[15px] font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
