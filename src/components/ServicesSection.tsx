"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, Heart, Sparkles, Brain, Activity, Video } from "lucide-react";

const services = [
  {
    num: "001",
    title: "Hausärztliche Versorgung",
    desc: "Ihre erste Anlaufstelle für alltägliche Gesundheit und Vorsorge.",
    tags: ["Check-ups", "Prävention"],
    icon: Stethoscope,
    image: "/images/service-primary.webp",
  },
  {
    num: "002",
    title: "Kardiologie",
    desc: "Fachkundige Herzversorgung von der Vorsorge bis zur modernen Behandlung.",
    tags: ["Herzgesundheit", "Diagnostik"],
    icon: Heart,
    image: "/images/service-cardiology.webp",
  },
  {
    num: "003",
    title: "Dermatologie",
    desc: "Moderne Hautpflege für Erkrankungen und kosmetische Lösungen.",
    tags: ["Hautpflege", "Kosmetik"],
    icon: Sparkles,
    image: "/images/service-dermatology.webp",
  },
  {
    num: "004",
    title: "Psychische Gesundheit",
    desc: "Unterstützende Therapie für emotionales Wohlbefinden und mentale Klarheit.",
    tags: ["Therapie", "Beratung"],
    icon: Brain,
    image: "/images/service-mental.webp",
  },
  {
    num: "005",
    title: "Neurologie",
    desc: "Spezialisierte Versorgung für neurologische Erkrankungen und Gehirngesundheit.",
    tags: ["Gehirngesundheit", "Erkrankungen"],
    icon: Activity,
    image: "/images/service-neurology.webp",
  },
  {
    num: "006",
    title: "Telemedizin",
    desc: "Verbinden Sie sich jederzeit stressfrei online mit vertrauenswürdigen Ärzten.",
    tags: ["Online", "Virtuell"],
    icon: Video,
    image: "/images/service-telehealth.webp",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-8"
          >
             <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-dark)]">Unsere Leistungen</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-[var(--color-dark)] leading-tight"
          >
            Alle Ihre Gesundheits&shy;bedürfnisse an einem Ort.
          </motion.h2>
        </div>

        {/* 3x Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="bg-white rounded-[32px] p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100/50"
            >
              {/* Top wrapper: Number + Icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold text-[var(--color-dark)]">/{service.num}</span>
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-sm">
                   <service.icon size={22} className="text-white" strokeWidth={2} />
                </div>
              </div>
              
              {/* Text wrapper */}
              <div className="flex flex-col flex-1">
                <h3 className="font-heading text-2xl font-bold text-[var(--color-dark)] mb-3 tracking-tight">{service.title}</h3>
                <p className="text-[var(--color-muted)] font-medium mb-8 leading-relaxed">{service.desc}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {service.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] rounded-full">
                      {/* Check Icon SVG */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--color-dark)]">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[13px] font-semibold text-[var(--color-dark)]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image wrapper */}
              <div className="w-full h-56 md:h-64 relative rounded-[24px] overflow-hidden mt-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
