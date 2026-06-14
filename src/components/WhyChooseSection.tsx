"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";

const TEAL = "linear-gradient(135deg, #2a8fa8 0%, #1d6fae 50%, #144f9e 100%)";

const cards = [
  {
    title: "Erfahrene Ärzte",
    desc: "Zertifizierte Ärzte, die allen Patienten vertrauensvolle, persönliche Versorgung bieten.",
  },
  {
    title: "Support rund um die Uhr",
    desc: "Sofortige Hilfe bei der Terminbuchung und Verwaltung Ihrer Gesundheit – jederzeit.",
  },
  {
    title: "Patientenzentrierte Versorgung",
    desc: "Ihr Gesundheitsweg, geleitet von Empathie und kontinuierlicher Unterstützung.",
  },
];

// --- Sub-components for dynamic visuals ---

function DoctorVisual() {
  const docs = [
    { name: "Dr. Robert Ellison", role: "Allgemeinarzt", img: "/images/doctor-robert.webp" },
    { name: "Dr. Sarah Mitchell", role: "Dermatologin", img: "/images/doctor-sarah.webp" },
    { name: "Dr. James Carter", role: "Kardiologe", img: "/images/doctor-james.webp" },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((prev) => (prev + 1) % docs.length), 3000);
    return () => clearInterval(timer);
  }, [docs.length]);

  return (
    <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-[100px] p-1.5 flex items-center justify-between shadow-lg overflow-hidden">
      <div className="relative flex-1 h-9 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0">
              <Image src={docs[idx].img} alt={docs[idx].name} fill className="object-cover" />
            </div>
            <div className="min-w-0 pr-2">
              <p className="text-[13px] font-bold text-[var(--color-dark)] leading-tight truncate">{docs[idx].name}</p>
              <p className="text-[11px] font-semibold text-gray-500 truncate">{docs[idx].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="w-9 h-9 rounded-full bg-[var(--color-dark)] flex items-center justify-center shrink-0 z-10 relative">
        <ArrowUpRight size={18} className="text-white" />
      </span>
    </div>
  );
}

function ChatVisual() {
  const msgs = [
    "Hallo, wie kann ich helfen?",
    "Ich brauche einen Termin.",
    "Morgen um 10:00 Uhr?",
    "Perfekt, bis dann! ✅"
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((prev) => (prev + 1) % msgs.length), 2500);
    return () => clearInterval(timer);
  }, [msgs.length]);

  const isDoc = idx % 2 === 0;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white rounded-2xl p-4 shadow-xl">
      <div className="space-y-2 mb-4">
        <div className="h-2 bg-gray-100 rounded w-3/4" />
        <div className="h-2 bg-gray-100 rounded w-1/2" />
      </div>
      <div className="relative h-10 mb-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, x: isDoc ? -10 : 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: isDoc ? -10 : 10 }}
            transition={{ duration: 0.25 }}
            className={`absolute flex items-center text-[11px] sm:text-[12px] font-medium px-3 py-2 rounded-xl shadow-sm ${
              isDoc
                ? 'bg-gray-50 text-[var(--color-dark)] left-0 rounded-bl-sm' 
                : 'bg-[var(--color-primary)] text-white right-0 rounded-br-sm'
            }`}
          >
            {msgs[idx]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-1.5 mt-3 px-1">
        {[0, 1, 2].map((i) => (
          <motion.span 
            key={i}
            animate={{ y: [0, -3, 0] }} 
            transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-gray-300" 
          />
        ))}
      </div>
    </div>
  );
}

function ChecklistVisual() {
  const items = [
    "Personalisierte Behandlungspläne",
    "Empathische Facharztvermittlung",
    "Kontinuierliche Betreuung & Support"
  ];
  
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev > items.length) return 0;
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] bg-white rounded-2xl p-5 shadow-xl space-y-3.5">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-3">
          <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
             <div className="absolute inset-0 rounded-full border-2 border-gray-100" />
             <AnimatePresence>
               {i < visibleCount && (
                 <motion.div
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   exit={{ scale: 0 }}
                   transition={{ type: "spring", stiffness: 400, damping: 25 }}
                   className="absolute inset-0 rounded-full bg-green-500 flex items-center justify-center"
                 >
                   <Check size={12} className="text-white" strokeWidth={3} />
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
          
          <div className="relative flex-1 h-4 flex items-center">
             <AnimatePresence mode="popLayout">
               {i < visibleCount ? (
                 <motion.span
                   key="text"
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0 }}
                   className="text-[11px] sm:text-[12px] font-medium text-[var(--color-dark)] absolute line-clamp-1"
                 >
                   {item}
                 </motion.span>
               ) : (
                 <motion.div 
                   key="skeleton"
                   exit={{ opacity: 0 }}
                   className="h-2 bg-gray-100 rounded w-full absolute" 
                 />
               )}
             </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#f4f6fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-dark)]">Warum Praxis am Park?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-[52px] font-bold text-[var(--color-dark)] leading-[1.05] tracking-tight"
          >
            Warum Praxis am Park für<br className="hidden md:block" /> bessere Gesundheit
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[var(--radius-card)] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_50px_rgb(0,0,0,0.08)] transition-shadow flex flex-col"
            >
              {/* Visual top */}
              <div className="h-56 p-6 relative flex items-end justify-center overflow-hidden" style={{ backgroundImage: TEAL }}>
                {idx === 0 && <DoctorVisual />}
                {idx === 1 && <ChatVisual />}
                {idx === 2 && <ChecklistVisual />}
              </div>

              <div className="p-8">
                <h3 className="font-heading font-bold text-2xl text-[var(--color-dark)] mb-3">{card.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
